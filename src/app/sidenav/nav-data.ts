import { INavbarData } from "../helpers/helper";

export const NavbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa-house',
        label: 'Trang chủ',
    },
    {
        routeLink: 'orders',
        icon: 'fa-cart-shopping',
        label: 'Đơn đặt hàng',
        items: [
            {
                routeLink: 'orders/list',
                icon: 'fa-list',
                label: 'Danh sách đơn hàng',
            },
            {
                routeLink: 'orders/create',
                icon: 'fa-plus',
                label: 'Tạo mới đơn hàng',
            },
        ]
    },
    {
        routeLink: 'products',
        icon: 'fa-box-open',
        label: 'Sản phẩm',
    },
    {
        routeLink: 'agency',
        icon: 'fa-user',
        label: 'Nhà phân phối',
    },
    {
        routeLink: 'statistics',
        icon: 'fa-chart-column',
        label: 'Thống kê báo cáo',
    },
    {
        routeLink: 'notify',
        icon: 'fa-bell',
        label: 'Thông báo',
    },
    {
        routeLink: 'logout',
        icon: 'fa-right-from-bracket',
        label: 'Đăng xuất',
    },


    // {
    //     routeLink: 'dashboard',
    //     icon: 'fa-house',
    //     label: 'Dashboard',
    // },
    // // {
    // //     routeLink: 'orders',
    // //     icon: 'fa-cart-shopping',
    // //     label: 'Orders',
    // // },
    // {
    //     routeLink: 'orders',
    //     icon: 'fa-cart-shopping',
    //     label: 'Orders',
    //     items: [
    //         {
    //             routeLink: 'orders/list',
    //             icon: 'fa-list',
    //             label: 'Danh sách đơn hàng',
    //         },
    //         {
    //             routeLink: 'orders/create',
    //             icon: 'fa-plus',
    //             label: 'Tạo mới đơn hàng',
    //         },
    //         // {
    //         //     routeLink: 'orders/report',
    //         //     icon: 'fa-chart-line',
    //         //     label: 'Thống kê đơn hàng',
    //         // },
    //     ]
    // },
    // {
    //     routeLink: 'products',
    //     icon: 'fa-box-open',
    //     label: 'Products',
    // },
    // {
    //     routeLink: 'agency',
    //     icon: 'fa-user',
    //     label: 'Agency',
    // },
    // {
    //     routeLink: 'statistics',
    //     icon: 'fa-chart-column',
    //     label: 'Statistics',
    // },
    // {
    //     routeLink: 'notify',
    //     icon: 'fa-bell',
    //     label: 'Thông báo',
    // },
    // {
    //     routeLink: 'logout',
    //     icon: 'fa-right-from-bracket',
    //     label: 'Logout',
    // },
];