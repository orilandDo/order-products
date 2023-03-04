import { Component, OnInit } from '@angular/core';
import { Cities, STATUS, Transports } from '../../helpers/const-data';
import { Order } from '../../entities/order';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Helper } from '../../helpers/helper';
import { ErrorStateMatcher } from '@angular/material/core';
import * as moment from 'moment';
import { PRODUCT_DATA } from '../../mock-data/products-data';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryData } from '../../mock-data/delivery-data';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmOrderComponent } from '../dialog-confirm-order/dialog-confirm-order.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {
  header: string = 'Thêm mới đơn hàng';
  matcher = new MyErrorStateMatcher();

  cities: any[] = Cities;
  deliveries: any[] = DeliveryData;
  products: any[] = PRODUCT_DATA;
  transport: any[] = Transports;
  status: any[] = STATUS;

  error: any = '';
  isAdmin: boolean = new Helper().isAdmin();

  selectedStatus: any = {};
  pickupSelected: any = {};
  deliverySelected: any = {};
  transportSelected: any = {};

  order: Order = {
    id: 0,
    createdDate: moment().format('DD/MM/YYYY'),
    deliveryAddress: 0,
    pickupAddress: 0,
    productTotal: 0,
    driver: '',
    note: '',
    transport: 0,
    licensePlates: '',
    receivedDate: '',
    status: 0,
    contract: '',
    products: [],
    agencyId: 0,
    agencyName: ''
  };

  constructor(public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.order.products = this.products;
    this.order.products.forEach(element => {
      element.quantity = 0;
      this.order.productTotal += element.quantity;
    });
  }

  onSubmit() {
    this.order.status = this.selectedStatus.value;
    const dialogRef = this.dialog.open(DialogConfirmOrderComponent, {
      data: this.order,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog detail was closed');
      this.router.navigate(['orders']); 
    });
   }

  onCancel() {
    this.router.navigate(['orders']); 
  }

  onKeyUp(event: any) {
    console.log(this.order.products)
    this.order.products.forEach(element => {
      this.order.productTotal += element.quantity;
    });
  }

}
