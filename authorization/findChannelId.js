require('dotenv').config();
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession(process.env.SESSION);

(async () => {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.connect();
  console.log('✅ Подключено как:', (await client.getMe()).username);

  const dialogs = await client.getDialogs();
  const channel = dialogs.find((d) =>
    d.entity.title && d.entity.title.toLowerCase().includes('Барахолка ТБИЛИСИ')
  );

  if (!channel) {
    console.log('❌ Канал не найден. Проверь название или попробуй вручную.');
    return;
  }

  console.log('📌 Канал найден:', channel.entity.title);
  console.log('🆔 Chat ID:', channel.entity.id);
  console.log('📦 Полное entity:', channel.entity);

  await client.disconnect();
})();