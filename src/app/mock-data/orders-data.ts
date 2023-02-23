import { Order } from "../entities/order";

export const ORDERS_DATA: Order[] = [
    {
        id: 2,
        createdDate: '01/02/2023',
        deliveryAddress: '12 Ly chinh Thang',
        pickupAddress: 'Kho BSOC Cu Chi',
        productId: 1,
        quantity: 55,
        driver: 'Nguyen Thanh Tam',
        note: 'Giao dung ngay',
        stranport: 1,
        numberOfVehicles: 5,
        receivedDate: '20/02/2023',
        status: 1,
        productName: 'PCB 30 (vỏ bao Phụ Tử) (10 tấn), \nPCB 40 (vỏ bao Sử Tử) (20 tấn)'
    },
    {
        id: 1,
        createdDate: '02/01/2023',
        deliveryAddress: '102 BR-VT',
        pickupAddress: 'Kho BSOC Cu Chi',
        productId: 3,
        quantity: 15,
        driver: 'Tran Minh',
        note: 'Giao dung ngay',
        stranport: 1,
        numberOfVehicles: 1,
        receivedDate: '10/01/2023',
        status: 2,
        productName: 'PCB 40 (vỏ bao Phụ tử) (50 tấn)'
    },
];