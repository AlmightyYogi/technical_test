import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqplib from 'amqplib';

@Injectable()
export class RabbitMQService implements OnModuleInit {
  private connection: amqplib.Connection;
  private channel: amqplib.Channel;

  async onModuleInit() {
    this.connection = await amqplib.connect(process.env.RABBITMQ_URI || 'amqp://localhost');
    this.channel = await this.connection.createChannel();
  }

  getChannel() {
    return this.channel;
  }
}
