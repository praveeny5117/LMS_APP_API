const cron = require("node-cron");

// Every month 28th morning 10 o clock it will run
cron.schedule("0 10 28 * *", function() {
    console.log("running a task every 1 minute");
});
  