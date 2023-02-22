import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'order-products';

  isSideNavCollapsed = false;
  screenWidth = 0;
  isLoginSuccess: boolean = false;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngOnInit() {
    this.isLoginSuccess = false;
    const session = sessionStorage.getItem('loginStatus');
    if (session && session.length > 0) {
      if (Number(session) === 1) {
        this.isLoginSuccess = true;
      }
    }
  }
}
