const cron = require('node-cron');
const sendScheduledMessage = require('./sendMessages');

const timeZone = 'Asia/Tbilisi';

cron.schedule(
  '34 8 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '18 10 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '26 12 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '13 14 * * *',
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
  '11 18 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '54 19 * * *',
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
