import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../entities/product';
import { MyErrorStateMatcher } from '../../orders/order-create/order-create.component';

@Component({
  selector: 'app-dialog-detail-product',
  templateUrl: './dialog-detail-product.component.html',
  styleUrls: ['./dialog-detail-product.component.scss']
})
export class DialogDetailProductComponent implements OnInit {
  header: string = '';
  error: any = '';
  matcher = new MyErrorStateMatcher();
  product = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
    createDate: '',
    note: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogDetailProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    if (this.data && this.data.id !== 0) {
      this.translate.get('PRODUCT.TITLE_MODIFIED').subscribe(x => {this.header = x});
      this.product.id = this.data.id;
      this.product.name = this.data.name;
      this.product.quantity = this.data.quantity;
      this.product.price = this.data.price;
      this.product.note = this.data.note;
    } else {
      this.translate.get('PRODUCT.TITLE_ADD').subscribe(x => {this.header = x});
    }
  }

  onSubmit() {
    this.dialogRef.close(this.product);
   }

}
