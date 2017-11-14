//NETA MAIN START UNIT - UI
//Created by RAkerman1

//Reference Variables

/*
const attack = require('../attack.js')
const discover = require('../discover.js')
*/

const pkg = require('./package.json')
const latestVersion = require('latest-version')
const chalk = require('chalk')
const ora = require('ora')
const figlet = require('figlet')
const async = require('async')
const debug = require('debug')
const confirm = require('confirm')
const network = require('network')
const inquirer = require('inquirer')
const nmap = require('node-nmap')
const delay = require('delay')
const evilscan = require('evilscan')

//Start Bash Terminal
var clear = require('clear')
clear();

//Prepare Start - Figlet Title Text
function bashprint(fprint) {
	//Main Figlet Function
	figlet('NETA', function (err, logo) {
    	if (err) {
      		console.log('ERROR - Check Figlet Directory')
      		console.dir(err)
      		return
      	}
      	var subtitle = (chalk.green(' --> Network Analysis | Version: (' + chalk.red('NETA v ' + pkg.version) + ') <--\n') + chalk.green(' --> Created By: ' + chalk.red('LAY0Y & R@kerman') + ' <--'))
   		fprint(null, chalk.blue(logo) + '\n' + subtitle + '\n\n')
   	})	
}
//Print Start - Print/Error (As Exportable)
async.waterfall([
  function (callback) {
    bashprint(function (err, gprint) {
      if (err) throw err
      console.log(gprint)
      callback(null)
    })
  }
])

//Locate Network IP
network.get_private_ip(function(err, ip) {
	netip = (ip)
})

//Check Network Connection
delay(200)
    .then(() => {
		require('dns').resolve('www.google.com', function(err) {
		  if (err) {
		     console.log(chalk.red('ERROR - No Network Connection'));
		  } else {
		     console.log(chalk.green('Network Connected | Private-IP: ') + chalk.yellow(netip));
		  }
		  console.log(' ')
		  console.log(' ')
		})
	});

//Spinner Start Scan
delay(2000)
    .then(() => {
        const spinner = ora('Scanning LAN Network').start();
        setTimeout(() => {
			spinner.color = 'green';
			spinner.text = 'Scanning LAN Network. | Time: 1 min';
		}, 60000);
		setTimeout(() => {
			spinner.color = 'blue';
			spinner.text = 'Scanning LAN Network.. | Time: 2 mins';
		}, 120000);
		setTimeout(() => {
			spinner.color = 'gray';
			spinner.text = 'Scanning LAN Network... | Time: 3 mins';
		}, 180000);
		setTimeout(() => {
			spinner.color = 'magenta';
			spinner.text = 'Scanning LAN Network.... | Time: 4 mins';
		}, 240000);
		setTimeout(() => {
			spinner.color = 'red';
			spinner.text = 'Scanning LAN Network..... | Time: 5 mins';
		}, 300000);
    });

//NODE EVILSCAN
var options = {
    target:'10.0.0.150-300', 
    //target:'10.0.2.0/25', 
    //target:'192.168.0.0/17',
    port:'21,22,80,443,3306,60000-65535',
    status:'O', // Timeout, Refused, Open, Unreachable
    banner  : false,
    geo	    : false,
};

var scanner = new evilscan(options);

scanner.on('result',function (data) {
	// fired when item is matching options
	console.log(' ');
	console.log('-----------------------------------------')
	console.log(' ');
	console.log(data);
});

scanner.on('error',function (err) {
	throw new Error(data.toString());
});

scanner.on('done',function () {
	console.log('PROCESS COMPLETED')
}),

delay(2100)
    .then(() => {
        scanner.run();
    });
