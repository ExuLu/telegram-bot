require('dotenv').config();
const fs = require('fs');
const path = require('path');
const os = require('os');
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const sourceChat = parseInt(process.env.CHAT_ID);
const stringSession = new StringSession(process.env.SESSION);
const targetChats = process.env.TARGET_CHATS.split(',').map((chat) =>
  chat.trim()
);

const statePath = './state.json';

async function sendScheduledMessage() {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  console.log('client has started');

  try {
    await client.connect();

    let state = { currentIndex: 1 };
    if (fs.existsSync(statePath)) {
      state = JSON.parse(fs.readFileSync(statePath, 'utf-8'));
    }

    const messages = (
      await client.getMessages(sourceChat, { limit: 200 })
    ).reverse();

    if (messages.length === 0) {
      console.log('There is no messages in the channel');
      return;
    }

    const currentMsg = messages[state.currentIndex];
    console.log(currentMsg);
    const text = currentMsg.message || '';

    if (!currentMsg.media) {
      console.log('There is no media in the message');
      return;
    }

    const tempPath = path.join(os.tmpdir(), 'poster-temp.jpg');
    const buffer = await client.downloadMedia(currentMsg.media);
    fs.writeFileSync(tempPath, buffer);

    for (const chat of targetChats) {
      await client.sendFile(chat, {
        file: tempPath,
        caption: text,
        forceDocument: false,
      });
      console.log(`Sent to ${chat}`);
    }

    fs.unlinkSync(tempPath);

    state.currentIndex++;
    if (state.currentIndex >= messages.length) {
      state.currentIndex = 1;
    }

    fs.writeFileSync(statePath, JSON.stringify(state), 'utf-8');
  } catch (error) {
    console.error('Error while applying:', error);
  } finally {
    try {
      if (client._updateLoop) {
        clearTimeout(client._updateLoop._timeout);
        client._updateLoopController?.abort();
      }
      await client.disconnect();
      console.log('Connection was closed correctly');
    } catch (e) {
      console.error('Error while close connection:', e);
    } finally {
      // process.exit(0);
    }
  }
}

module.exports = sendScheduledMessage;
