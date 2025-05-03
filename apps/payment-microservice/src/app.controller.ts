import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_SERVICE')
    private readonly kafkaClient: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('process-payment')
  handleOrderCreated(@Payload() data: any) {
    console.log('[PAYMENT-SERVICE]: Payment in process: ', data);

    this.kafkaClient.emit('payment-succeed', data);
  }
}
