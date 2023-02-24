import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cities, Transports } from '../../helpers/const-data';
import { Order } from '../../entities/order';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ICity, ITransport } from '../../helpers/helper';
import { Product } from '../../entities/product';
import { ErrorStateMatcher } from '@angular/material/core';
import * as moment from 'moment';
import { PRODUCT_DATA } from 'src/app/mock-data/products-data';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit, AfterViewInit {
  cities: any[] = Cities;
  products: any[] = PRODUCT_DATA;
  transport: any[] = Transports;

  receivedDate: Date = new Date();
  error: any = '';
  selected: any;
  createdDate: string = moment().format('DD-MM-YYYY');

  deliveryCityControl = new FormControl<ICity | null>(null, Validators.required);
  pickupCityControl = new FormControl<ICity | null>(null, Validators.required);
  productControl = new FormControl<Product | null>(null, Validators.required);
  transportControl = new FormControl<ITransport | null>(null, Validators.required);

  order: Order = {
    id: 0,
    createdDate: '12/02/2023',
    deliveryAddress: 'Can Tho',
    pickupAddress: 'Kien Giang',
    productTotal: 20,
    transport: 1,
    licensePlates: '',
    driver: 'Nguyen Van Thanh',
    receivedDate: '20/02/2023',
    note: '',
    status: 0,
    products: [
      {
        id: 1,
        name: 'PCB 30 (vỏ bao Phụ Tử)',
        quantity: 10,
      },
      {
        id: 3,
        name: 'PCB 40 (vỏ bao Sử Tử) ',
        quantity: 20,
      },
    ]
  }

  matcher = new MyErrorStateMatcher();

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  onSubmit() { }

}
