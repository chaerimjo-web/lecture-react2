import React from "react";
import Page from "../../components/Page";
import Title from "../../components/Title";
import NaveBar from "../../components/Navbar";
import Card from "../../components/Card";
import OrderDeliveryCard from "./OrderDeliveryCard";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderStatusCard from "./OrderStatusCard";

const fakeOrder = {
  id: "CACDA420",
  orderDate: "2025. 6. 16. 오전 11:04:30",
  status: "음식 준비중",
  name: "짜장면",
  totalPrice: 7000,
  paymentMethod: "마이페이",
  productPrice: 6000,
  deliveryPrice: 3000,
  discountPrice: 2000,
  deliveryAddress: "서울특별시 송파구 잠실동 1번지",
  deliveryContact: "010-1111-2222",
  messageToShop: "포크는 주지 마세요",
  messageToRider: "안전하게 오세요",
  position: [30, 30],
};

const OrderPage = () => {
  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<NaveBar />}>
				<OrderStatusCard order={fakeOrder} />
				<OrderPaymentCard order={fakeOrder}  />
        <OrderDeliveryCard order={fakeOrder} />
      </Page>
    </div>
  );
};
export default OrderPage;
