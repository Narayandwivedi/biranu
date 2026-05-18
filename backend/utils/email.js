const nodemailer = require('nodemailer');

/**
 * Creates a reusable transporter object using the default SMTP transport
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Send an email
 * @param {Object} options Email options
 * @param {string} options.to Recipient email address
 * @param {string} options.subject Email subject
 * @param {string} options.text Plain text body (optional)
 * @param {string} options.html HTML body (optional)
 * @returns {Promise<Object>} Information about the sent email
 */
const sendEmail = async ({ to, subject, text, html, attachments }) => {
  try {
    const mailOptions = {
      from: '"Job post alert" <desinplus1@gmail.com>', // sender address
      to: to || 'info@biranuconsulting.com', // list of receivers
      subject, // Subject line
    };

    if (text) mailOptions.text = text;
    if (html) mailOptions.html = html;
    if (attachments) mailOptions.attachments = attachments;

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
  transporter,
  sendEmail,
};
