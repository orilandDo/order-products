import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeleteConfirmComponent } from '../../helpers/dialog-delete-confirm/dialog-delete-confirm.component';
import { Order } from '../../entities/order';
import { DialogDetailOrderComponent } from './dialog-detail-order/dialog-detail-order.component';
import { Helper } from '../../helpers/helper';
import { DialogConfirmOrderComponent } from './dialog-confirm-order/dialog-confirm-order.component';
import { FormControl, FormGroup } from '@angular/forms';
import { STATUS } from '../../helpers/const-data';
import { CustomPaginator } from '../../helpers/custom-paginator';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }  // Here
  ]
})
export class OrderListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'createdDate', 'contract', 'receivedDate', 'deliveryAddress', 'pickupAddress', 'productName', 'quantity', 'productTotal', 'licensePlates', 'driver', 'status', 'deleteAction'];
  dataSource = new MatTableDataSource<Order>();
  clickedRows = new Set<Order>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  status = STATUS;
  helper = new Helper();
  isAdmin: boolean = new Helper().isAdmin();
  searchForm = new FormGroup({
    id: new FormControl(0),
    createdDate: new FormControl(''),
    receivedDate: new FormControl(''),
    agency: new FormControl(''),
    status: new FormControl({
      value: 0, 
      label: '-----',
    }),
  });

  constructor(public dialog: MatDialog,
    public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.data = this.helper.getOrderList();
    // load data from api
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // openDialog(row: any): void {
  //   console.log(row)
  //   const dialogRef = this.dialog.open(DialogDetailOrderComponent, {
  //     data: row,
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     //row = result;
  //   });
  // }

  @HostListener('click', ['$event']) 
  onClick(event: any) {
    const element = document.getElementsByClassName('mat-mdc-paginator-page-size-label');
    if (element) {
      element[0].innerHTML = 'Số dòng hiển thị: ';
    }
  }

  onEdit(row: any) {
    console.log(row)
    if (row && row.status !== 1) {
      const dialogRef = this.dialog.open(DialogConfirmOrderComponent, {
        data: row,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      const dialogRef = this.dialog.open(DialogDetailOrderComponent, {
        data: row,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result) {
          row.deliveryAddress = result.deliveryAddress;
          row.pickupAddress = result.pickupAddress;
          row.productTotal = result.productTotal;
          row.transport = result.transport;
          row.licensePlates = result.licensePlates;
          row.contract = result.contract;
          row.driver = result.driver;
          row.receivedDate = result.receivedDate;
          row.note = result.note;
          row.status = result.status;
          row.products = result.products;
        }
      });
    }
    
  }

  onDelete(row: any) {
    console.log(row.id)
    const dialogRef = this.dialog.open(DialogDeleteConfirmComponent, {
      data: { id: row.id, content: 'Bạn chắc chắn muốn xóa đơn hàng này không?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog delete was closed');
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(x => x.id !== row.id);
      }
      console.log(this.dataSource.data);
    });
  }

  onPrint(row: any) {
    // xuat don dat hang
    alert('In chi tiết đơn hàng dạng pdf')
  }

  // onDownloadPDF(row: any) {
  //   // xuat danh sach don dat hang
  //   console.log('Download pdf')
  // }

  exportExcel() {
    alert('Tải xuống danh sách đơn hàng, định dạng excel')
  }

  onSearch(data: any) {
    console.log(data)
    alert('Tìm kiếm đơn hàng')
  }

}
