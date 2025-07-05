const cron = require('node-cron');
const sendScheduledMessage = require('./sendMessages');

const timeZone = 'Asia/Tbilisi';

cron.schedule(
  '18 10 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '14 16 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '11 23 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);
