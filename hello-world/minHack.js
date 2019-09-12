// producer

// inport AMQP client library
const amqp = require('amqplib/callback_api');

// credentials for acessing the rabbitMQ server
const credentials = {
// ..............
  };

// publish data every 0.8s
setInterval(function(){
    // connect to the rabbitMQ server
    amqp.connect(credentials, function(err0, connection){
        // create a channel with the connection
        // the channel contains the api for most of the features
        if(err0) throw err0;
        // create the channel
        // it returns to a callback an error and the created channel
        connection.createChannel(function(err1, channel){
            if(err1) throw err1;
            const msg = 'this is the message to be sent'; // the data to be published
            // create the queue with the name
            // the queue is only created if it as not been created
            channel.assertQueue('queueName', { durable: false }); // set the queue to a durable queue
            // publish data to queue
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(' [X] Sent %s', msg);
            // close the connection and exit the node process after 0.5s
            setTimeout(function closeConnection(){
                // close the connection after 0.5s
                connection.close();
            }, 500);
        });
    });
}, 800);