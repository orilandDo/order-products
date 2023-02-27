import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../entities/product';
import { MyErrorStateMatcher } from '../../orders/order-create/order-create.component';

@Component({
  selector: 'app-dialog-detail-product',
  templateUrl: './dialog-detail-product.component.html',
  styleUrls: ['./dialog-detail-product.component.scss']
})
export class DialogDetailProductComponent implements OnInit {
  header: string = 'Thêm mới sản phẩm';
  error: any = '';
  matcher = new MyErrorStateMatcher();
  product = {
    id: 0,
    productName: '',
    quantity: 0,
    price: 0,
    createDate: '',
    note: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogDetailProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) { }

  ngOnInit(): void {
    if (this.data && this.data.id !== 0) {
      this.header = 'Cập nhật thông tin sản phẩm';
      this.product.id = this.data.id;
      this.product.productName = this.data.productName;
      this.product.quantity = this.data.quantity;
      this.product.price = this.data.price;
      this.product.note = this.data.note;
    }
  }

  onSubmit() {
    this.dialogRef.close(this.product);
   }

}
