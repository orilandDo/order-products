import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyErrorStateMatcher } from '../../orders/order-create/order-create.component';
import { Agency } from '../../entities/agency';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-detail-agency',
  templateUrl: './dialog-detail-agency.component.html',
  styleUrls: ['./dialog-detail-agency.component.scss']
})
export class DialogDetailAgencyComponent implements OnInit {
  header: string = '';
  error: any = '';
  disabled: boolean = false;

  matcher = new MyErrorStateMatcher();
  agency = {
    id: 0,
    fullName: '',
    address: '',
    contract: '',
    phone: '',
    note: '',
    accountName: '',
    password: '',
    confirmPassword: '',
    email: ''
  };

  constructor(
    public dialogRef: MatDialogRef<DialogDetailAgencyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Agency,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    if (this.data && this.data.id !== 0) {
      this.disabled = true;
      this.translate.get('AGENCY.TITLE_MODIFIED').subscribe(data => {this.header = data});
      this.agency.id = this.data.id;
      this.agency.fullName = this.data.fullName;
      this.agency.address = this.data.address;
      this.agency.phone = this.data.phone;
      this.agency.note = this.data.note;
      this.agency.accountName = this.data.accountName;
      this.agency.password = this.data.password;
      this.agency.email = this.data.email;
      this.agency.contract = this.data.contract;
    } else {
      this.translate.get('AGENCY.TITLE_ADD').subscribe(data => {this.header = data});
      this.header
      this.disabled = false;
    }
  }

  onSubmit() {
    this.dialogRef.close(this.agency);
  }

}
