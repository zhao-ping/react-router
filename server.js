var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')
var _=require('lodash')
var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath, historyApiFallback: true }))
app.use(webpackHotMiddleware(compiler))


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

var items =[
  {
    type:"text",id:0
  }
];


var getMaxId= _.maxBy(items,"id").id;


app.get('/data',function (req,res) {
  res.send(items)
});

app.get('/latestItems',function (req,res) {
  var latestItems=req.query.items;
  items=latestItems;
  _.map(items,function (ite) {
    if(ite.id==undefined){
      ite.id=getMaxId+1;
      getMaxId++;
    }
  })


  res.send(items);
})






app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
