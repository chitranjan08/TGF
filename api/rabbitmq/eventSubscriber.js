// eventSubscriber.js

const amqp = require('amqplib');
const fs = require('fs');
const host = require("../../config/db.config")
const rabbitmqhost=host.RabbitMQHOST

async function subscribeToUserRegistrationEvents() {
  try {
    const connection = await amqp.connect(rabbitmqhost);
    const channel = await connection.createChannel();
    const queue = 'user_registration_queue';

    // Declare a queue if not exists
    await channel.assertQueue(queue, { durable: false });

    console.log(` [*] Waiting for user registration events. To exit press CTRL+C`);
    // console.log(msg)

    channel.consume(queue, (msg) => {
        console.log(msg)
      const message = JSON.parse(msg.content.toString());
      console.log(` [x] Received user registration event for ${message}`);

      // Log the event to a file
      const logMessage = `${new Date().toISOString()} - User Registration: ${JSON.stringify(message)}\n`;
      fs.appendFileSync('user_registration_log.txt', logMessage);
    }, { noAck: true });
  } catch (error) {
    console.error(error);
  }
}

// Start the event subscriber
module.exports = subscribeToUserRegistrationEvents 
