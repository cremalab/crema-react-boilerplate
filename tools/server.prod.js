require('dotenv').config()
var express     = require('express')
var compression = require('compression')
var path        = require('path')
var port        = process.env.PORT || 3002
var baseDir     = 'dist'

var app = module.exports.app = exports.app = express()
var webPath = baseDir + '/'
var options = { maxAge: '5d' }

app.use(compression())
app.use(express.static(baseDir, options))

app.get('*',function(req,res){
  var htmlPath = path.join(process.cwd(), webPath + 'index.html')
  res.sendFile(htmlPath)
})

app.listen(port, function() {
  console.log('Listening at http://localhost:' + port + '/')
})
