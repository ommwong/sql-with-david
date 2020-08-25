const db = require('./models/model');
const { Message } = require('./models/messages');

const getMessage = async ctx => {
  try {
    await console.log(db)
    await console.log(Message)
    ctx.body = await db.Message.findAll();
  } catch (err) {
    ctx.status = 500;
    console.log(err);
  }
}

const postMessage = async ctx => {
  try {

  } catch (err) {

  }
}

module.exports = {
  getMessage,
  postMessage
}