const { notify } = require("../routes/FirebaseRoute");
const admin = require("../utils/firebase");

class NotificationService {
    static async sendNotification(deviceToken, title, body){
        const message = {
            notification: {
                title, body
            },
            token: deviceToken
        };
        try{
            const response = await admin.messaging().send(message);
        } catch (error) {
            throw error;
        }
    }

    static async sendMultipleNotification(deviceToken, title, bady){
        const message = deviceTokens.amp(token => ({
            notification: {
                title, body
            },
            token: token
        }))
        try{
            const message = await admin.messaging.sendEach(message);
            return response;
        }catch (error){
            throw error;
        }
    }


}


module.exports = NotificationService;