const NotificationService = require("../service/NotificationService");

const sendFirebaseNotification = async (req, res) => {
    try{
        const {title, body, deviceToken} = req.body;
        await NotificationService.sendNotification(deviceToken, title, body);
        res.status(200).json({ message: "Notification sent successfully", success: true});
    }catch(error){
        res.status(500).json({ message: "Error sending notification" , success: false});
    }
}

const sendMultipleFirebaseNotification = async (req, res) => {
    try{
        const {title, body, deviceToken} = req.body;
        await NotificationService.sendMultipleNotification(deviceTokens, title, body);
        res.status(200).json({ message: "Notification sent successfully", success: true});
    }catch(error){
        res.status(500).json({ message: "Error sending notification" , success: false});
    }
}


async function sendNotificationEveryTenMinutes(){
    const title= "Hello";
    const body= "How are you?";
    const deviceToken = "audhfhf";
    await Notification.sendNotification(title, body, deviceToken);
}

module.exports = { sendFirebaseNotification, sendNotificationEveryTenMinutes, sendMultipleFirebaseNotification};