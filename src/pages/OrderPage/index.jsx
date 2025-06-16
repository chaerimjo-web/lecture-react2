import React from "react";
import OrderApi from "shared/api/OrderApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import NaveBar from "../../components/Navbar";
import Card from "../../components/Card";
import OrderDeliveryCard from "./OrderDeliveryCard";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderStatusCard from "./OrderStatusCard";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: null,
    };
  }

  async fetch() {
    try {
      const order = await OrderApi.fetchMyOrder();
      this.setState({ order });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { order } = this.state;

    return (
      <div className="OrderPage">
        <Page header={<Title>주문내역</Title>} footer={<NaveBar />}>
          {order && (
            <>
              <OrderStatusCard order={order} />
              <OrderPaymentCard order={order} />
              <OrderDeliveryCard order={order} />
            </>
          )}
        </Page>
      </div>
    );
  }
}
export default OrderPage;
