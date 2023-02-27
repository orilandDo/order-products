export interface Order {
    id: number;
    createdDate: string; // Ngày tạo đơn
    deliveryAddress: string; // Nơi nhận hàng
    pickupAddress: string, // Nơi giao hàng
    productTotal: number,
    transport: number, // Phuong tien van chuyen (1: bộ, 2: thủy, 3: hàng không)
    licensePlates: string, //biển số
    driver: string,
    receivedDate: string,
    note: string,
    status: number, // Trạng thái đơn (1: đang chờ, 2: đã nhận)
    contract: string,
    products: ProductItem[],
    updatedDate?: string,
}

export interface ProductItem {
    id: number,
    name: string,
    quantity: number,
}