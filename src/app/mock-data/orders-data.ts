import { Order } from "../entities/order";

export const ORDERS_DATA: Order[] = [
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
        status: 1,
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
        status: 2,
        products: [
            {
                id: 4,
                name: 'PCB 40 (vỏ bao Phụ tử)',
                quantity: 50,
            },
        ]
    },
];