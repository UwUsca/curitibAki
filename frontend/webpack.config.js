module.exports = function (env) {
	return require(`./webpack.config.${env}`)({ env: env })
}

