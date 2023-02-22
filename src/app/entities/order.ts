export interface Order {
    id: number;
    createdDate: string|null; // Ngày tạo đơn
    deliveryAddress: string; // Nơi nhận hàng
    pickupAddress: string, // Nơi giao hàng
    productId: number,
    quantity: number,
    stranport: number, // Phuong tien van chuyen (1: bộ, 2: thủy, 3: hàng không)
    numberOfVehicles: number,
    driver: string,
    receivedDate: string|null,
    note: string,
    status: number, // Trạng thái đơn (1: đang chờ, 2: đã nhận)
}