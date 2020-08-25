const Router = require('koa-router');
const router = new Router();

const controller = require('./controller');

router.get('/hello', controller.getMessage);
router.post('/hello', controller.postMessage);

module.exports = router;