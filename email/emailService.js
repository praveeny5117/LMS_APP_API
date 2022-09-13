const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config()
module.exports.sendEmail = async (data) => {
    try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user:process.env.SUPPORT_EMAIL,
				pass:process.env.SUPPORT_PASSWORD
			}
		});
		const mailOptions = {
			from: `LMS Support <${process.env.SUPPORT_EMAIL}>`,
			to: data.toEmail,
			//cc: copyTo,
			subject: data.sub,
			html: data.content
		};
		const newTransportPromise = new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, info) => error ? reject(error) : resolve(info))
		});
		console.log('Mail Sent Successfully...!!!');
		return newTransportPromise;

    } catch (error) {
        console.log(error)
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}
