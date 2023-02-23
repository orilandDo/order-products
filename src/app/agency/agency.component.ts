import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Agency } from '../entities/agency';
import { AGENCY_DATA } from '../mock-data/agency-data';
import { DialogDetailAgencyComponent } from './dialog-detail-agency/dialog-detail-agency.component';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'fullName', 'address', 'phone', 'accountName', 'note'];
  dataSource = new MatTableDataSource<Agency>(AGENCY_DATA);
  clickedRows = new Set<Agency>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(row: any): void {
    console.log(row)
    const dialogRef = this.dialog.open(DialogDetailAgencyComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //row = result;
    });
  }

}

