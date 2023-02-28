import { Order } from "../entities/order";

export const ORDERS_DATA: Order[] = [
    {
        id: 3,
        createdDate: '11/02/2023',
        deliveryAddress: '12 Quan Phu Nhuan, Tp.HCM',
        pickupAddress: 'Kho BSOC Kien Giang',
        productTotal: 70,
        driver: 'Dung',
        note: 'Giao dung ngay',
        transport: 2,
        licensePlates: 'KG0910',
        receivedDate: '28/02/2023',
        status: 1,
        contract: 'HĐBB2023/XMHT_KG',
        products: [
            {
                id: 1,
                name: 'PCB 30 (vỏ bao Phụ Tử)',
                quantity: 30,
            },
            {
                id: 2,
                name: 'PCB 30 (vỏ bao Sư Tử)',
                quantity: 10,
            },
            {
                id: 4,
                name: 'PCB 40 (vỏ bao Phụ tử)',
                quantity: 30,
            },
        ]
    },
    {
        id: 2,
        createdDate: '01/02/2023',
        deliveryAddress: '12 Ly chinh Thang',
        pickupAddress: 'Kho BSOC Cu Chi',
        productTotal: 55,
        driver: 'Nguyen Thanh Tam',
        note: 'Giao dung ngay',
        transport: 1,
        licensePlates: 'CT0989',
        receivedDate: '20/02/2023',
        status: 2,
        contract: 'HĐBB2023/XMHT',
        products: [
            {
                id: 1,
                name: 'PCB 30 (vỏ bao Phụ Tử)',
                quantity: 10,
            },
            {
                id: 3,
                name: 'PCB 40 (vỏ bao Sử Tử) ',
                quantity: 20,
            },
        ]
    },
    {
        id: 1,
        createdDate: '02/01/2023',
        deliveryAddress: '102 BR-VT',
        pickupAddress: 'Kho BSOC Cu Chi',
        productTotal: 15,
        driver: 'Tran Minh',
        note: 'Giao dung ngay',
        transport: 1,
        licensePlates: 'KG1234',
        receivedDate: '10/01/2023',
        status: 3,
        contract: 'HĐBB2023/AMHT',
        products: [
            {
                id: 4,
                name: 'PCB 40 (vỏ bao Phụ tử)',
                quantity: 50,
            },
        ]
    },
];