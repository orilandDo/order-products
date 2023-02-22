import { Component } from '@angular/core';
import { Products } from '../../mock-data/products-data';
import { Cities, Transports } from '../../entities/const-data';
import { Order } from '../../entities/order';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent {
  cities: any[] = Cities;
  products: any[] = Products;
  transport: any[] = Transports;

  receivedDate: Date = new Date();
  error: any = '';

  order: Order = {
    id: 0,
    createdDate: '12/02/2023',
    deliveryAddress: 'Can Tho',
    pickupAddress: 'Kien Giang', 
    productId: 2,
    quantity: 20,
    stranport: 1,
    numberOfVehicles: 1,
    driver: 'Thanh',
    receivedDate: '20/02/2023',
    note: '',
    status: 0,
  }

  onSubmit() {}

}
