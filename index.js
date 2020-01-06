'use strict';

const path = require('path');
const chalk = require('chalk');
const client = require('scp2');




class SftpUpload {


	constructor(props = {}) {

		// default port is 22
		this.options = Object.assign({ port: 22 }, props);
	}

	apply(compiler) {

		compiler.plugin('done', () => {

				// options = { host, username, password, localPath, path, title }

			let list    = ['host', 'username', 'password', 'localPath', 'path'], // required character
					options = this.options,
					start   = Date.now(),
					empty   = null,
					end     = null;


			for( let i = 0, len = list.length; i < len; i++ ) {

				if( !options[ list[i] ] ) {

					empty = list[i];
					break;
				}
			};

			if( empty ) {

				console.log(chalk.red(`Error: ${ empty } is required character`));
				// if required character is empty, and it exit in process
				process.exit();
			};

			client.scp(options.localPath, options, (err) => {

				if( err ) {

					// console error
					console.log(chalk.red(err));
				} else {

					// close connect
					client.close();

					end = Date.now();

					// console success
					console.log(
						`Upload successly folder in ${ options.localPath } to ${ options.title ? ( chalk.underline(options.title) + ' in server' ) : chalk.underline( 'sftp://' + options.host + ':' + options.port ) }，it spent ${ end - start }ms`
					);
				}
			})

		})
	}


}


module.exports = SftpUpload