import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cities, Transports } from '../../helpers/const-data';
import { Order } from '../../entities/order';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ICity, ITransport } from '../../helpers/helper';
import { Product } from '../../entities/product';
import { ErrorStateMatcher } from '@angular/material/core';
import * as moment from 'moment';
import { PRODUCT_DATA } from 'src/app/mock-data/products-data';
import { ActivatedRoute, Router } from '@angular/router';

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
  header: string = 'Thêm mới đơn hàng';

  deliveryCityControl = new FormControl<ICity | null>(null, Validators.required);
  pickupCityControl = new FormControl<ICity | null>(null, Validators.required);
  productControl = new FormControl<Product | null>(null, Validators.required);
  transportControl = new FormControl<ITransport | null>(null, Validators.required);

  order: Order = {
    id: 0,
    createdDate: moment().format('DD-MM-YYYY'),
    deliveryAddress: '',
    pickupAddress: '',
    productTotal: 0,
    transport: 1,
    licensePlates: '',
    driver: '',
    receivedDate: '',
    note: '',
    status: 0,
    contract: '',
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

  constructor(public router: Router, private route: ActivatedRoute){}

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => 
      {
        if (data && data['id'] !== 0) {
          this.header = 'Cập nhật thông tin đơn hàng';
          this.order.id = data['id'];
          this.order.createdDate = data['createdDate'];
          this.order.deliveryAddress = data['deliveryAddress'];
          this.order.pickupAddress = data['pickupAddress'];
          this.order.productTotal = data['productTotal'];
          this.order.driver = data['driver'];
          this.order.note = data['note'];
          this.order.transport = data['transport'];
          this.order.licensePlates = data['licensePlates'];
          this.order.receivedDate = data['receivedDate'];
          this.order.status = data['status'];
          this.order.note = data['note'];
          this.order.products = data['products'];
          this.order.contract = data['contract'];
        }
        console.log(data)
      }
      );
    // if (data && data.id !== 0) {
    //   this.header = 'Cập nhật thông tin đơn hàng';
    //   this.order.id = this.data.id;
    //   this.order.createdDate = this.data.createdDate;
    //   this.order.deliveryAddress = this.data.deliveryAddress;
    //   this.order.pickupAddress = this.data.pickupAddress;
    //   this.order.productTotal = this.data.productTotal;
    //   this.order.driver = this.data.driver;
    //   this.order.note = this.data.note;
    //   this.order.transport = this.data.transport;
    //   this.order.licensePlates = this.data.licensePlates;
    //   this.order.receivedDate = this.data.receivedDate;
    //   this.order.status = this.data.status;
    //   this.order.note = this.data.note;
    //   this.order.products = this.data.products;
    //   this.order.contract = this.data.contract;
    // } else {
    //   this.order.createdDate = moment().format('DD-MM-YYYY'); 
    // }
  }

  onSubmit() { }

  onCancel() {
    this.order
  }

}
