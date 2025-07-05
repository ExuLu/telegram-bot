require('dotenv').config();
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const input = require('input');

const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession(process.env.SESSION || '');

(async () => {
  console.log('⏳ Load Telegram');
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text('📱 Put your phone number:'),
    password: async () => await input.text('🔐 2FA Password:'),
    phoneCode: async () => await input.text('📩 Your Telegram code:'),
    onError: (err) => console.log('Authorization error:', err),
  });

  const savedSession = client.session.save();

  await client.sendMessage('me', { message: 'Successful authorization! 🎉' });

  await client.disconnect();
})();
