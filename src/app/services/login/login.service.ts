import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ORDERS_DATA } from '../../mock-data/orders-data';
import { MenuAdminData, MenuUserData } from '../../mock-data/menu-data';

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    })
};

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    navigateComponent: string = 'dashboard';
    isSuccess: boolean = false;
    ulr: any = 'http://localhost:4200/login';
    errorSubject: any = new BehaviorSubject<any>(null);
    errorMessage: any = this.errorSubject.asObservable();

    data = [
        { username: 'admin', password: '123aaa', isAdmin: 1 },
        { username: 'user1', password: '123aaa', isAdmin: 0 },
        { username: 'user2@gmail.com', password: '123456', isAdmin: 0 },
    ]

    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    login(username: string, password: string): any {
        // this.http.post(this.ulr, { username, password }, httpOptions).toPromise().then((res: any) => {
        //     if (res && res.jwt) {
        //         sessionStorage.setItem('jwt', res.jwt);
        //         this.errorSubject.next(null);
        //         this.isSuccess = true;
        //         //this.router.navigateByUrl(this.navigateComponent);
        //         this.router.navigate([this.navigateComponent, this.isSuccess]);
        //     } else if (res.Message) {
        //         this.errorSubject.next(res.Message);
        //         this.isSuccess = false;
        //     }
        // });




        // login thanh cong, lay danh sach menu tuong ung quyen account

        const user = this.data.find(x => x.username === username && x.password === password);
        if (user) {
            //if (username === 'admin' && password === '123aaa') {
            sessionStorage.setItem('loginStatus', '1');
            sessionStorage.setItem('isAdmin', user.isAdmin.toString());
            sessionStorage.setItem('orderList', JSON.stringify(ORDERS_DATA)); // co the bo
            let menu = [];
            if (user.isAdmin) {
                menu = MenuAdminData;
            } else {
                menu = MenuUserData;
            }
            sessionStorage.setItem('menuList', JSON.stringify(menu));
            this.errorSubject.next(null);
            this.router.navigateByUrl(this.navigateComponent);
        } else {
            sessionStorage.setItem('loginStatus', '0');
            this.errorSubject.next('Username hoặc password không đúng.');
        }
    }

    isAuthenticated(): boolean {
        if (sessionStorage.getItem('loginStatus')) {
            return true;
        } else {
            return false;
        }
        // if (sessionStorage.getItem('jwt')) {
        //     console.log(sessionStorage.getItem('jwt'))
        //     return true;
        // } else {
        //     return false;
        // }
    }
}