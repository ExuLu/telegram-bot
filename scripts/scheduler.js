const cron = require('node-cron');
const sendScheduledMessage = require('./sendMessages');

const timeZone = 'Asia/Tbilisi';

cron.schedule(
  '10 10 * * *',
  () => {
    sendScheduledMessage();
    console.log('Message for 10.10 was send');
  },
  { timezone: timeZone }
);

cron.schedule(
  '10 14 * * *',
  () => {
    sendScheduledMessage();
    console.log('Message for 14.10 was send');
  },
  { timezone: timeZone }
);

cron.schedule(
  '10 18 * * *',
  () => {
    sendScheduledMessage();
    console.log('Message for 18.10 was send');
  },
  { timezone: timeZone }
);
