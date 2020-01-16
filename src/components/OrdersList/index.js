import React, { Component } from 'react';

import './index.scss';

class OrdersList extends Component {
    render() {
        const {
            orders,
            currentOrder,
            orderById,
            getOrder
        } = this.props;

        return (
            <div className='orders-list'>
                {orders.length && orders.map((order) => (
                    <div
                        key={order.id}
                        className='orders-list__item'
                    >
                        <button
                            className='orders-list__item-toggle'
                            onClick={() => getOrder(order.id)}
                        >
                            {currentOrder === order.id ? '-' : '+'}
                        </button>
                        <div className='orders-list__item-info'>
                            <span>
                                <b>Номер:</b> {order.docNum}
                            </span>
                            <span>
                                <b>Дата:</b> {order.docDate}
                            </span>
                            <span>
                                <b>Описание:</b> {order.description}
                            </span>
                            {
                                currentOrder === order.id && orderById.length ? (
                                    <div className='orders-list__more'>
                                        {orderById.map((item) => (
                                            <div
                                                key={item.id}
                                                className='orders-list__more-item'
                                            >
                                                <span>
                                                    <b>Наименование:</b> {item.name}
                                                </span>
                                                <span>
                                                    <b>Количество:</b> {item.qty}
                                                </span>
                                                <span>
                                                    <b>Цена:</b> {item.price}
                                                </span>
                                                <span>
                                                    <b>Сумма:</b> {item.sum}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default OrdersList;