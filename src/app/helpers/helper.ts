import { animate, style, transition, trigger, keyframes } from "@angular/animations";

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
        style({opacity: 0}),
        animate('350ms',
            style({opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
            style({opacity: 0})
        )
    ])
])

export const rotate = trigger('rotate', [
    transition(':enter', [
      animate('1000ms', 
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'})
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
}

