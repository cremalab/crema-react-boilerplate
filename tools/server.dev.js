require('dotenv').config()
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from '../webpack.config.dev'
const  port = process.env.PORT || 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err)
  }
  console.log(`Listening at http://localhost:${port}/`)
})
