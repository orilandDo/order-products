import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../../../entities/order';

@Component({
  selector: 'app-dialog-confirm-order',
  templateUrl: './dialog-confirm-order.component.html',
  styleUrls: ['./dialog-confirm-order.component.scss']
})
export class DialogConfirmOrderComponent implements OnInit {

  order: Order = {
    id: 0,
    createdDate: '',
    deliveryAddress: '',
    pickupAddress: '',
    productTotal: 0,
    driver: '',
    note: '',
    transport: 0,
    licensePlates: '',
    receivedDate: '',
    status: 0,
    contract: '',
    products: [],
  };

  constructor(public dialogRef: MatDialogRef<DialogConfirmOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,) {

  }

  ngOnInit(): void {
    if (this.data && this.data.id !== 0) {
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
    } else {
    }
  }

  onSubmit() {
    // call api update sql and return update data list
  }
}
