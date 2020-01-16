import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ordersActions from '../../store/actions/orders';

import './index.scss';

import OrdersList from '../../components/OrdersList';

const {
    getOrders,
    getOrderById,
    getOrdersByFilter
} = ordersActions;


class Orders extends Component {
    state = {
        currentOrder: null,
        filter: null
    };

    componentDidMount() {
        this.props.getOrders();
    }

    getOrder = (id) => {
        const { currentOrder } = this.state;

        if (currentOrder !== id) {
            this.setState({
                currentOrder: id
            }, () => {
                this.props.getOrderById(id);
            });
        } else {
            this.setState({
                currentOrder: null
            });
        }
    };

    onFilterChange = (e) => {
        this.setState({
            filter: e.target.value
        }, () => {
            this.props.getOrdersByFilter(this.state.filter);
        })
    };

    render() {
        const { orders, orderById } = this.props;
        const { currentOrder } = this.state;

        return (
            <section className='orders'>
                <div className='container'>
                    <h1>Заказы</h1>
                    <input
                        className='orders__input'
                        onChange={this.onFilterChange}
                        type='text'
                        placeholder='Фильтр'
                    />
                    <OrdersList
                        orders={orders}
                        orderById={orderById}
                        currentOrder={currentOrder}
                        getOrder={this.getOrder}
                    />
                </div>
            </section>
        )
    }
}

export default connect(
    (state) => ({
        orders: state.Orders.orders,
        loading: state.Orders.loading,
        orderById: state.Orders.orderById
    }),
    {
        getOrders,
        getOrderById,
        getOrdersByFilter
    }
)(Orders);