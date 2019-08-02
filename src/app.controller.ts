import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @Render('index')
  getHello(): any {
    let products:Array<any> = [
      {
          'name': 'Spring Jacket', 
          'vendor': 'Dolce & Gabbana', 
          'color': 'Red',
          'size': 'M',
          'price': 549,
          'image': './assets/img/product1.jpg'
      },
      {
          'name': 'Short Pants', 
          'vendor': 'Pucci', 
          'color': 'Purple',
          'size': 'M',
          'price': 549,
          'image': './assets/img/product2.jpg'
      },
      {
          'name': 'Short Pants', 
          'vendor': 'Valentino', 
          'color': 'White',
          'size': 'XL',
          'price': 799,
          'image': './assets/img/product3.jpg'
      }
    ];

    return {"products": products};
  }
  
}
