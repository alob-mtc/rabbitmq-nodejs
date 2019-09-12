// consumer

// inport AMQP client library
const amqp = require('amqplib/callback_api');

// credentials for acessing the rabbitMQ server
const credentials = {
    protocol: 'amqp',
    hostname: 'localhost',
    username: 'username',
    password: 'password',
    locale: 'en_US',
    frameMax: 0,
    heartbeat: 0,
    vhost: '/',
  };

  let count = 0;
// connect to the rabbitMQ server
  amqp.connect(credentials, function(err0, connection){
    // create a channel with the connection
    // the channel contains the api for most of the features
    if(err0) throw err0;
    // create a channel with the created connection
    // it returns to a callback an error and the created channel
    connection.createChannel(function(err1, channel){
        if(err1) throw err1;
        // declare the queue to consumme data from
        const queue = 'hello';
        // create the queue with the name to consume from
        // the queue is only created if it as not been created
        channel.assertQueue(queue, { durable: false }); // set the queue to a durable queue
        console.log('[X] Waiting for messages in %s. To exit press CTRL+C', queue);
        // consume the message from the queue 
        // the rabbit server push message to the consumer asynchronously
        channel.consume(queue, function(msg){
            console.log('[X] Received %s, %d', msg.content.toString(), ++count);
        }, { noAck: true });    // set ack to true removes the msg from the queue
    });
  });