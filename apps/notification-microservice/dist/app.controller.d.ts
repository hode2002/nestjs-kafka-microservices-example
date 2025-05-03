import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    sendOrderCreatedNotification(data: any): void;
    sendPaymentSucceedNotification(data: any): void;
}
