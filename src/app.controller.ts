import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get("/finance")
  @Render('finance')
  finance(): any {
    let transactions:Array<any> = [
      {
        'date': '08-20-2019 11:10',
        'name': 'Moleskine Agenda',
        'source': 'Summit Bank',
        'price': 10
      },
      {
        'date': '08-20-2019 11:11',
        'name': 'Estabilo Pen',
        'price': 300,
        'source': 'RHTE Bank'
      },
      {
        'date': '08-20-2019 11:11',
        'name': 'A4 Paper Pack',
        'price': 109,
        'source': 'Summit Bank',
      },
      {
        'date': '08-20-2019 11:12',
        'name': 'Apple iPad',
        'price': 109,
        'source': 'RHTE Bank',
      },
      {
        'date': '08-20-2019 11:14',
        'name': 'Apple iPhone',
        'price': 109,
        'source': 'RHTE Bank',
      }
    ];

    return {
      "transactions": transactions,
      "gateway-url": process.env.GATEWAY_URL || 'http://localhost:4000'
    }
  }

  @Get()
  @Render('index')
  index(): any {
    let products:Array<any> = [
      {
          'name': 'Spring Jacket', 
          'vendor': 'Dolce & Gabbana', 
          'color': 'Red',
          'size': 'M',
          'price': 55,
          'image': './assets/img/product1.jpg'
      },
      {
          'name': 'Short Pants', 
          'vendor': 'Pucci', 
          'color': 'Purple',
          'size': 'M',
          'price': 30,
          'image': './assets/img/product2.jpg'
      },
      {
          'name': 'Short Pants', 
          'vendor': 'Valentino', 
          'color': 'White',
          'size': 'L',
          'price': 50,
          'image': './assets/img/product3.jpg'
      }
    ];

    return {
      "products": products,
      "gateway-url": process.env.GATEWAY_URL || 'http://localhost:4000'
    };
  }
  
}
