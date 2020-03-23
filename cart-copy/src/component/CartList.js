import React from 'react'

 
function CartList(props) {
    return (
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    {props.cartItems.map(order =>(
                            <div className="cart-item" key={order.id}>
                             <div style={{ display:'flex' }}> 
                                 <button className="btn btn-danger btn-xs">X</button>
                                 <span className="cart-item__name">{order.productName}</span>
                                    <span>Quantity:{order.Quantity}</span> &nbsp;
                                 <span>{order.price}$</span>
                             </div>
                             {/* <div className="cart-item__price">{order.price}$</div> */}
                         </div>
                    ))}
                </div>
                <div className="card-footer">
                        <span>Total</span>: 
                </div>
            </div>
         
        </div>
    )
}

export default CartList
