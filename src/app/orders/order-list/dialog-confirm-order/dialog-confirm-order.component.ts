import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STATUS } from '../../../helpers/const-data';
import { Order } from '../../../entities/order';
import { Helper } from '../../../helpers/helper';
import { PRODUCT_DATA } from '../../../mock-data/products-data';

@Component({
  selector: 'app-dialog-confirm-order',
  templateUrl: './dialog-confirm-order.component.html',
  styleUrls: ['./dialog-confirm-order.component.scss']
})
export class DialogConfirmOrderComponent implements OnInit {

  order: Order = {
    id: 0,
    createdDate: '',
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
  };

  status: any[] = STATUS;
  products: any[] = PRODUCT_DATA;
  helper: Helper = new Helper();

  isAdmin: boolean = new Helper().isAdmin();
  isUpdated: boolean = true;
  selectedStatus: any = {};

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
      this.selectedStatus = this.status.find(x => x.value === this.order.status);

    } else {
      this.isUpdated = false;
    }
  }

  onSubmit() {
    if (this.order.status === 2) {
      this.order.status = this.selectedStatus.value;
      console.log(this.order)
      // update to storage
      //this.helper.updateStatusOrder(this.order.id, this.order.status);

      //call api update status by id
    } else {
      // call api update order and return update data list
    }

    this.dialogRef.close(this.order);
  }
}
