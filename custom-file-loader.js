const loaderUtils = require('loader-utils')

module.exports = function(content) {
  const config = {
    name: '[hash].[ext]'
  }

  const options = loaderUtils.getOptions(this) || {}

  // options override config
  Object.keys(options).forEach(key => {
    config[key] = options[key]
  })

  // 1. generate file url
  let url = loaderUtils.interpolateName(this, config.name, {
    content
  })

  // 2. emit file
  let outputPath = ''

  if (config.outputPath) {
    outputPath = config.outputPath + url
    url = outputPath
  } else {
    outputPath = url
  }

  this.emitFile(outputPath, content)

  // 3. export file publicPath
  const publicPath = `__webpack_public_path__ + "${url}"`
  return `module.exports = ${publicPath}`
}

module.exports.raw = true
