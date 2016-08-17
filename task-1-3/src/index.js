const colors = require('colors/safe');
const ChatApp = require('./lib/ChatApp');

const log = (message, color = 'white') => {
  /* eslint no-console: ["error", { allow: ["log"] }] */
  console.log(colors[color](message));
};

const webinarChat = new ChatApp('Webinar');
const facebookChat = new ChatApp('Facebook');
const vkChat = new ChatApp('VK');

const chatOnMessage = message => log(message);
const readyToResponse = () => log('Готовлюсь к ответу', 'yellow');
const vkChatOnClose = () => log('Чат Вконтакте закрылся :(', 'red');

vkChat.setMaxListeners(2);
vkChat.on('message', chatOnMessage);
vkChat.on('message', readyToResponse);
vkChat.on('close', vkChatOnClose);

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);

setTimeout(() => {
  log('Закрываю Вконтакте...', 'blue');
  vkChat.removeListener('message', chatOnMessage);
  vkChat.removeListener('message', readyToResponse);
  vkChat.close();
}, 10000);

setTimeout(() => {
  log('Закрываю Facebook...', 'green');
  facebookChat.removeListener('message', chatOnMessage);
}, 15000);

setTimeout(() => {
  log('Закрываю вебинар...', 'magenta');
  webinarChat.removeListener('message', chatOnMessage);
}, 30000);
