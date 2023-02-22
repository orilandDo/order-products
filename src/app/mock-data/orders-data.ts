import { Order } from "../entities/order";

export const Orders: Order[] = [
    {
        id: 1,
        createdDate: '01/01/2023',
        deliveryAddress: '12 Ly chinh Thang',
        pickupAddress: 'Kho BSOC Cu Chi',
        productId: 1,
        quantity: 55,
        driver: 'Nguyen Thanh Tam',
        note: 'Giao dung ngay',
        stranport: 1,
        numberOfVehicles: 5,
        receivedDate: '20/01/2023',
        status: 2
    },
    {
        id: 2,
        createdDate: '02/02/2023',
        deliveryAddress: '102 BR-VT',
        pickupAddress: 'Kho BSOC Cu Chi',
        productId: 3,
        quantity: 15,
        driver: 'Tran Minh',
        note: 'Giao dung ngay',
        stranport: 1,
        numberOfVehicles: 1,
        receivedDate: '10/02/2023',
        status: 2
    },
];