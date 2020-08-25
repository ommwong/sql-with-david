const Koa = require ('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const router = require('./router')

app.use(bodyParser());
app.use(router.routes());

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
})