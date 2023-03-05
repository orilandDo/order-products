import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ORDERS_DATA } from '../mock-data/orders-data';
import { MenuAdminData, MenuUserData } from '../mock-data/menu-data';

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    })
};

@Injectable({
    providedIn: 'root'
})

export class NotifyService {
    errorSubject: any = new BehaviorSubject<any>(null);
    errorMessage: any = this.errorSubject.asObservable();
    ulr: any = 'http://localhost:4200/product';

    constructor(
        private http: HttpClient,
    ) { }

    getList(): any[] {
        
        return [];
    }

    add(obj: any) {
        
        //return [];
    }

}