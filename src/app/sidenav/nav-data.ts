import { INavbarData } from "../helpers/helper";

export const NavbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa-house',
        label: 'Dashboard',
    },
    {
        routeLink: 'orders',
        icon: 'fa-cart-shopping',
        label: 'Orders',
        items: [
            {
                routeLink: 'orders/list',
                icon: 'fa-list',
                label: 'List Orders',
            },
            {
                routeLink: 'orders/create',
                icon: 'fa-plus',
                label: 'Create Orders',
            },
            {
                routeLink: 'orders/report',
                icon: 'fa-chart-line',
                label: 'Report',
            },
        ]
    },
    {
        routeLink: 'products',
        icon: 'fa-box-open',
        label: 'Products',
    },
    {
        routeLink: 'statistics',
        icon: 'fa-chart-column',
        label: 'Statistics',
    },
    {
        routeLink: 'users',
        icon: 'fa-user',
        label: 'Agency',
    },
    {
        routeLink: 'login',
        icon: 'fa-right-from-bracket',
        label: 'Logout',
    },
];