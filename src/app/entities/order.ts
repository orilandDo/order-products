export interface Order {
    id: number;
    createdDate: string; // Ngày tạo đơn
    deliveryAddress: number; // Nơi nhận hàng
    selectedDelivery?: string,
    pickupAddress: number, // Nơi giao hàng
    selectedPickup?: string,
    productTotal: number,
    transport: number, // Phuong tien van chuyen (1: bộ, 2: thủy, 3: hàng không)
    selectedTransport?: string,
    licensePlates: string, //biển số
    driver: string,
    receivedDate: string,
    note: string,
    status: number,
    statusLabel?: string,
    contract: string,
    products: ProductItem[],
    updatedDate?: string,
    agencyId: number,
    agencyName?: string,
}

export interface ProductItem {
    id: number,
    name: string,
    quantity: number,
}