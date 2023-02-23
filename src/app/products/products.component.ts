import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../entities/product';
import { PRODUCT_DATA } from '../mock-data/products-data';
import { DialogDetailProductComponent } from './dialog-detail-product/dialog-detail-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'productName', 'quantity', 'price', 'note'];
  dataSource = new MatTableDataSource<Product>(PRODUCT_DATA);
  clickedRows = new Set<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(row: any): void {
    console.log(row)
    const dialogRef = this.dialog.open(DialogDetailProductComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //row = result;
    });
  }

}

