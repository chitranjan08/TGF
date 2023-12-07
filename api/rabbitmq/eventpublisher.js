// eventPublisher.js
// const controller = require("./api/user/controller/user.conntroller")
const amqp = require('amqplib');
const host = require("../../config/db.config")
const rabbitmqhost=host.RabbitMQHOST

async function publishUserRegistrationEvent(data) {
  try {
    const connection = await amqp.connect(rabbitmqhost);
    const channel = await connection.createChannel();
    const queue = 'user_registration_queue';

    // Declare a queue if not exists
    await channel.assertQueue(queue, { durable: false });
    console.log(data)

    // Define the message
    const message = {
      event_type: 'user_registration',
      message: data,
      timestamp: new Date().toISOString(),
    };

    // Convert message to JSON and send to the queue
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    console.log(`${data}`);

    // Close the connection
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error(error);
  }
}

// Example: Usage of event publisher
module.exports = publishUserRegistrationEvent 
