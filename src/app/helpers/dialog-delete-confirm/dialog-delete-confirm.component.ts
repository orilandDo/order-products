import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../entities/product';

@Component({
  selector: 'app-dialog-delete-confirm',
  templateUrl: './dialog-delete-confirm.component.html',
  styleUrls: ['./dialog-delete-confirm.component.scss']
})
export class DialogDeleteConfirmComponent implements OnInit {
  content: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.content = this.data.content;
  }

  onSubmit(id: number) { 
    this.dialogRef.close(id);
    console.log('Đã xóa ' + id)
  }

  onCancel() {
    this.dialogRef.close();
  }

}
