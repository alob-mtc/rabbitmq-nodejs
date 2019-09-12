# RabbitMQ

**A work through the official docs and tutorials of RabbitMQ(Message Broker) and a min project**

## asynchrons messageing
```js

// 
//
//    +---+          +---+        +---+            +---+
//    | P |          | E |        |   |            | C |
//    | R |          | X |        | Q |            | O |
//    | O |          | C |        | U |            | N |
//    | D | --SEND-->| H |------->| E |--RECEIVE-->| S |
//    | U |          | A |        | U |            | U |
//    | C |          | N |        | E |            | M |
//    | E |          | G |        |   |            | E |
//    | R |          | E |        |   |            | R |
//    +---+          +---+        +---+            +---+
//
// 

```
## Task
1. [x] - Hello World => *The simplest thing that does something*
1. [] - Work queues => *Distributing tasks among workers*
1. [] - Publish/Subscribe => *Sending messages to many consumers at once*
1. [] - Routing => *Receiving messages selectively*
1. [] - Topics => *Receiving messages based on a pattern (topics)*
1. [] - RPC => *Request/reply pattern example*
1. [] - Publisher Condirms => *Reliable publishing with publisher confirms*
___
1. [] - complete the official docs
1. [] - create a mini project(__test out my understanding of the docs and tutorials__)

## Project

- AMQP client library for Node.JS

## intall script

    npm install amqplib

**Directory setup**
### producer(send.js) - queue - consumer(receive.js)
- /hello-world
  - receive.js
  - send.jd

