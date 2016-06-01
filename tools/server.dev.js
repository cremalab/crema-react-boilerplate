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
}).listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://localhost:${port}/`)
})
