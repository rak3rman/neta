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
const spinner = ora('').start();
const evilscan = require('evilscan')
var count = (0)

spinner.stop()

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
delay(500)
    .then(() => {
    	spinner.start(['Scanning LAN Network'])
        setTimeout(() => {
			spinner.color = 'green';
		}, 500);
		setTimeout(() => {
			spinner.color = 'blue';
		}, 1000);
		setTimeout(() => {
			spinner.color = 'gray';
		}, 1500);
		setTimeout(() => {
			spinner.color = 'magenta';
		}, 2000);
		setTimeout(() => {
			spinner.color = 'red';
		}, 2500);
    });

//NODE EVILSCAN
var options = {
    target:'192.168.200.0/22', //Scan 1
    //target:'10.0.0.0-10.0.0.255', //Scan 2
    //target:'172.16.0.0-172.31.255.255' //Scan 3
    port:'21,22,554,3389',
    status:'O', // Timeout, Refused, Open, Unreachable
    banner:true
};

var scanner = new evilscan(options);

scanner.on('result',function (data) {
	// fired when item is matching options
	console.log(' ');
	console.log('-----------------------------------------')
	console.log(' ');
	console.log(data);
	spinner.stop();
	count = (count + 1)
});

scanner.on('error',function (err) {
	throw new Error(data.toString());
});

scanner.on('done',function () {
	console.log(' '),
	console.log(' '),
	spinner.succeed([chalk.white(' PROCESS COMPLETED | DEVICES FOUND: ') + chalk.green(count)])
		delay(500)
    	.then(() => {
      	  spinner.stop();
      	  console.log(' ');
    	});
}),

delay(2000)
    .then(() => {
        scanner.run();
    });
