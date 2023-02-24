import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../../entities/order';
import { ORDERS_DATA } from '../../mock-data/orders-data';
import { DialogDetailOrderComponent } from './dialog-detail-order/dialog-detail-order.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'createdDate', 'contract', 'receivedDate', 'deliveryAddress', 'pickupAddress', 'productName', 'quantity', 'productTotal', 'licensePlates', 'driver', 'status'];
  dataSource = new MatTableDataSource<Order>(ORDERS_DATA);
  clickedRows = new Set<Order>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(row: any): void {
    console.log(row)
    const dialogRef = this.dialog.open(DialogDetailOrderComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //row = result;
    });
  }

}
