import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cities, STATUS, Transports } from '../../../helpers/const-data';
import { PRODUCT_DATA } from '../../../mock-data/products-data';
import { Order } from '../../../entities/order';
import { MyErrorStateMatcher } from '../../order-create/order-create.component';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';
import { Helper, ICity, ITransport } from '../../../helpers/helper';
import { Product } from '../../../entities/product';
import { DialogConfirmOrderComponent } from '../dialog-confirm-order/dialog-confirm-order.component';
import { DeliveryData } from 'src/app/mock-data/delivery-data';

@Component({
  selector: 'app-dialog-detail-order',
  templateUrl: './dialog-detail-order.component.html',
  styleUrls: ['./dialog-detail-order.component.scss']
})
export class DialogDetailOrderComponent implements OnInit, AfterViewInit {
  header: string = 'Thêm mới đơn hàng';
  matcher = new MyErrorStateMatcher();
  receivedDate: Date = new Date();
  error: any = '';
  selected: any;
  isAdmin: boolean = new Helper().isAdmin();
  isUpdated: boolean = true;
  selectedStatus: any = {};

  cities: any[] = Cities;
  deliveries: any[] = DeliveryData;
  products: any[] = PRODUCT_DATA;
  transport: any[] = Transports;
  status: any[] = STATUS;

  // deliveryCityControl = new FormControl<ICity | null>(null, Validators.required);
  // pickupCityControl = new FormControl<ICity | null>(null, Validators.required);
  // productControl = new FormControl<Product | null>(null, Validators.required);
  // transportControl = new FormControl<ITransport | null>(null, Validators.required);

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

  constructor(
    public dialogRef: MatDialogRef<DialogDetailOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.data && this.data.id !== 0) {
      this.header = 'Cập nhật thông tin đơn hàng';
      this.order.id = this.data.id;
      this.order.createdDate = this.data.createdDate;
      this.order.deliveryAddress = this.data.deliveryAddress;
      this.order.pickupAddress = this.data.pickupAddress;
      this.order.productTotal = this.data.productTotal;
      this.order.driver = this.data.driver;
      this.order.note = this.data.note;
      this.order.transport = this.data.transport;
      this.order.licensePlates = this.data.licensePlates;
      this.order.receivedDate = this.data.receivedDate;
      this.order.status = this.data.status;
      this.order.note = this.data.note;
      this.order.products = this.data.products;
      this.order.contract = this.data.contract;
      this.order.agencyId = this.data.agencyId;
      this.order.agencyName = this.data.agencyName;
      this.selectedStatus = this.status.find(x => x.value === this.order.status);
      this.deliverySelected = this.deliveries.find(y => y.id === this.order.deliveryAddress);
      this.pickupSelected = this.cities.find(y => y.id === this.order.pickupAddress);
      this.transportSelected = this.transport.find(y => y.id === this.order.transport);
    } else {
      this.isUpdated = false;
      this.order.products = this.products;
      this.order.products.forEach(element => {
        element.quantity = 0;
        this.order.productTotal += element.quantity;
      });
    }
  }

  ngAfterViewInit(): void {

  }

  onSubmit() { 
    this.order.status = this.selectedStatus.value;
    console.log(this.order)
    if (this.order.id === 0) {
      // navigate to view component
      const dialogRef = this.dialog.open(DialogConfirmOrderComponent, {
        data: this.order,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog detail was closed');
        //row = result;
      });
    } else {
      // call api update sql and return update data list

      this.dialogRef.close(this.order);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  onKeyUp(event: any) {
    console.log(this.order.products)
    this.order.products.forEach(element => {
      this.order.productTotal += element.quantity;
    });
  }

}
