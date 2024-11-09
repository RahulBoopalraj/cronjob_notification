const cron = require("node-cron");
const { sendEveryMinuteNotification } = require("./src/controllers/FirebaseController");


cron.schedule("* 10 * * * *", async () => {
    console.log("sending...")
    await sendEveryMinuteNotification();
})