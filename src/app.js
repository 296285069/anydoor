const http  = require('http')
const chalk = require('chalk')
const conf  = require('./config/defaultConfig')

const server  = http.createServer((req, res)=>{
  const {url} = req
  console.log(url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<body>')
  res.write('hello Mr.wang HHH2')
  res.write('</body>')
  res.write('</html>')
  res.end()
})

server.listen(conf.port, conf.hostname, ()=>{
  const addr = `http://${conf.hostname}:${conf.port}`
  console.log(`Server started at ${chalk.green(addr)}`)
})



//supervisor  热更新模块  npm i -g supervisor全局安装即可，无需项目安装
