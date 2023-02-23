import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyErrorStateMatcher } from '../../orders/order-create/order-create.component';
import { Agency } from '../../entities/agency';

@Component({
  selector: 'app-dialog-detail-agency',
  templateUrl: './dialog-detail-agency.component.html',
  styleUrls: ['./dialog-detail-agency.component.scss']
})
export class DialogDetailAgencyComponent implements OnInit {
  header: string = 'Thêm mới nhà phân phối';
  error: any = '';
  matcher = new MyErrorStateMatcher();
  agency = {
    id: 0,
    fullName: '',
    address: '',
    birthday: null,
    phone: '',
    note: '',
    accountName: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogDetailAgencyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Agency,
  ) { }

  ngOnInit(): void {
    if (this.data.id !== 0) {
      this.header = 'Cập nhật thông tin NPP';
      this.agency.id = this.data.id;
      this.agency.fullName = this.data.fullName;
      this.agency.address = this.data.address;
      this.agency.phone = this.data.phone;
      this.agency.note = this.data.note;
      this.agency.accountName = this.data.accountName;
      this.agency.password = this.data.password;
    } else {
      
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() { }

}