

# webpack-sftp-auto-upload

Upload Automatically file in local folder to SFTP server

## Installation

Use npm:
```
 npm install webpack-sftp-auto-upload -save-dev
```

Use yarn
```
 yarn add webpack-sftp-auto-upload
```

## Usage

```javascript


const path = require('path')
const SftpAutoUpload = require('webpack-sftp-auto-upload')


// if you in webpack
module.exports = {

	// ... others

	plugins: [
		new SftpAutoUpload({
			title: 'server or project name',
			host: '192.16.0.xxx', // required character
			port: 22, // default port is 22
			username: 'root', // your sftp account
			password: '*****',
			localPath: path.resolve(__dirname, '.', 'dist'), // folder in local path
			path: '/data/demo/dist' // server path
		})
	]
}


// if you use webpack-chain

module.exports = {

	chainWebpack: (config) => {

		// ... others

		config
			.plugin('auto_upload')
			.use(SftpUpload, [{
				title: 'server or project name',
				host: '192.16.0.xxx', // required character
				port: 22, // default port is 22
				username: 'root', // your sftp account
				password: '*****',
				localPath: path.resolve(__dirname, '.', 'dist'), // folder in local path
				path: '/data/demo/dist' // server path
			}])
	}
}
```

## License

MIT