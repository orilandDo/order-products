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

  selectedStatus: any = {value: 1, label: ''};
  pickupSelected: any = null;
  deliverySelected: any = null;
  transportSelected: any = null;

  order: Order = {
    id: 0,
    createdDate: moment().format('DD/MM/YYYY'),
    deliveryId: 0,
    pickupId: 0,
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

  date = new FormControl(new Date());
  helper = new Helper();

  constructor(public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.order.products = this.products;
    this.order.products.forEach(element => {
      element.quantity = 0;
      this.order.productTotal += element.quantity;
    });
  }

  onSubmit() {
    debugger
    this.order.status =  Number(this.selectedStatus.value);
    this.order.deliveryId = Number(this.deliverySelected.id);
    this.order.pickupId =  Number(this.pickupSelected.id);
    this.order.transport =  Number(this.transportSelected.id);
    this.order.receivedDate = moment(this.date.value).format('DD/MM/YYYY');
    // const dialogRef = this.dialog.open(DialogConfirmOrderComponent, {
    //   data: this.order,
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog detail was closed');
    //   this.router.navigate(['orders']); 
    // });

    // Call api insert new record

    // If return true (by id), save record to storage
    this.order.id = 5;
    this.helper.pushOrder(this.order);
    this.router.navigate(['orders/list']); 
   }

  onCancel() {
    this.router.navigate(['orders/list']); 
  }

  onKeyUp(event: any) {
    console.log(this.order.products)
    this.order.productTotal = 0;
    this.order.products.forEach(element => {
      this.order.productTotal += element.quantity;
    });
  }

}
