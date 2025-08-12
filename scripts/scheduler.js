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
  '34 9 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 10 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 11 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 12 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 13 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 14 * * *',
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

cron.schedule(
  '34 16 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 17 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 18 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 19 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 20 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 21 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 22 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);

cron.schedule(
  '34 23 * * *',
  () => {
    sendScheduledMessage();
  },
  { timezone: timeZone }
);
