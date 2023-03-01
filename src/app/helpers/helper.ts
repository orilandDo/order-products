import { animate, style, transition, trigger, keyframes } from "@angular/animations";
import { Order } from "../entities/order";

export interface INavbarData {
  routeLink: string;
  icon?: string;
  label: string,
  expanded?: boolean;
  items?: INavbarData[];
}

export interface ICity {
  value: number;
  label: string;
}

export interface ITransport {
  value: number;
  label: string;
}

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('350ms',
      style({ opacity: 1 })
    )
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('350ms',
      style({ opacity: 0 })
    )
  ])
])

export const rotate = trigger('rotate', [
  transition(':enter', [
    animate('1000ms',
      keyframes([
        style({ transform: 'rotate(0deg)', offset: '0' }),
        style({ transform: 'rotate(2turn)', offset: '1' })
      ])
    )
  ])
])

export class Helper {

  checkSession(s: string) {
    let appLoginId = document.getElementById('app-login');
    let appBodyId = document.getElementById('app-body');
    const session = sessionStorage.getItem(s);

    appLoginId ? appLoginId.hidden = false : '';
    appBodyId ? appBodyId.hidden = true : '';

    if (session && session.length > 0) {
      if (Number(session) === 1) {
        appLoginId ? appLoginId.hidden = true : '';
        appBodyId ? appBodyId.hidden = false : '';
      }
    }
  }

  clearSession() {
    sessionStorage.clear();
  }

  isAdmin(): boolean {
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (Number(isAdmin) === 0) {
      return false;
    }
    return true;
  }

  getOrderList(): Order[] {
    let orderList: Order[] = [];
    let jsonString = sessionStorage.getItem('orderList');
    if (jsonString) {
      orderList = JSON.parse(jsonString) as Order[];
      orderList.forEach(item => {
        switch (item.status) {
          case 1:
            item.statusLabel = 'Đang chờ';
            break;
          case 2:
            item.statusLabel = 'Đang nhận';
            break;
          case 3:
            item.statusLabel = 'Đã nhận';
            break;
          case 4:
            item.statusLabel = 'hủy';
            break;
        }
      });
    }
    return orderList;
  }

  getMenuList(): INavbarData[] {
    let menuList: INavbarData[] = [];
    let jsonString = sessionStorage.getItem('menuList');
    if (jsonString) {
      menuList = JSON.parse(jsonString) as INavbarData[];
    }
    return menuList;
  }

  // updateStatusOrder(id: number, status: number) {
  //   let orderList = this.getOrderList();
  //   if (orderList.length > 0) {
  //     orderList.forEach(element => {
  //       if (element.id === id) {
  //         element.status = status;
  //       }
  //     });
  //     sessionStorage.setItem('orderList', JSON.stringify(orderList));
  //   }
  // }
}

