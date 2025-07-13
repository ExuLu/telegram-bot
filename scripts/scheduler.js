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
  '02 21 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '42 17 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 15 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);
