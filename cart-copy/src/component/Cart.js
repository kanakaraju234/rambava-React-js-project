import React, { Component } from 'react';
import CartList from './CartList';

const styled = {
    border: 'none',
    outline: 'none',
    textAlign: 'center'
}
 class Cart extends Component {
       constructor(){
           super()
           this.state={
               searchValue:'',
               Quantity:1,
               isAdded:false,
               cartItems:[],
               cartTotal:0
           }
           this.addToCart = this.addToCart.bind(this)
           this.handleQuantity = this.handleQuantity.bind(this)
           this.deleteItem = this.deleteItem.bind(this);
       }
        handleChange = (e)=>{
           this.setState({
               searchValue: e.target.value
            })
        }
        addToCart(data){
            console.log(data)

            const cartItems = {
                id:data.id,
                productName:data.productName,
                price:data.price,
                selector:data.selector,
                Quantity:1

            }
            console.log('..cart items..')
            const cartItem = this.state.cartItems
            cartItem.push(cartItems)
            this.setState({
                cartItems: cartItem
            })
            let checkingDuplicate = this.props.cartItems

            console.log(this.state.cartItems)

            //check if item already added or not 
                if((checkingDuplicate.findIndex(item => item.id === data.id))<0){
                    console.log("checking...")
                    this.props.addToCart(cartItems)
                }
        }

        deleteItem(cartItemDeleted){
           
           this.props.cartItemDeleted(cartItemDeleted)
           
           this.props.startLoadingCartItems()
        }

        handleQuantity(e){
                let itemId = e.target.id
                console.log(itemId)
                this.setState({
                    Quantity: e.target.value
                })

               // const {id,productName,price,selector,} = this.props.cartItems;
                let checkingDuplicate = this.props.cartItems
                    let indexValue = checkingDuplicate.findIndex(item => item.id === Number(itemId))
                if((checkingDuplicate.findIndex(item => item.id === itemId ))){
                     const {id,productName,price,selector} = checkingDuplicate[indexValue]
                    const cartItems = {
                        id:id,
                        productName:productName,
                        price:price,
                        selector:selector,
                        Quantity: e.target.value
        
                    }
                    this.props.UpdateToCart(cartItems)

                    this.props.startLoadingCartItems()
                    //this.props.addToCart(cartItems)
                    console.log('changed quantity ')
                    console.log(cartItems)
                }
                
        }
        componentWillReceiveProps(){
        }
        componentDidUpdate(prevState, prevProps){
            console.log('did update...')
            console.log(prevState.cartItems,prevProps)
        }
        componentWillUnmount(){
        }
        componentWillUpdate(){
        }
       
        //Total cart items..

        // cartTotal =() =>{
        //     let cartItems = this.props.cartItems
        //     var msgTotal = cartItems.reduce(function(prev, cur) {
        //         return prev + ((cur.Quantity)*(cur.price));
        //       }, 0);
        // }


    render() {
        console.log(this.props)
        const filterList = this.props.data
        .filter(name =>{
            return name.keywords.toLowerCase()
            .includes(this.state.searchValue.toLowerCase())
        })
        .map((data, index) =>{
            return <tr key={data.id}>
                        <td>{data.productName}</td>
                        {/* <td><input type='number' style={styled} name="quantiy" defaultValue='1' min='1' /></td> */}
                        <td>{`${data.price} /${data.selector}`}</td>
                        <td><button  onClick={()=>{
                            this.addToCart(data)
                        }}>add</button></td>
                        {/* <td>{data.units * data.price}</td> */}
                 </tr>
        })

        var total = this.state.cartTotal;
        const addTocartList = this.state.cartItems      //this.props.cartItems
        .map((data, index) =>{
            total+= (data.Quantity) * (data.price)
            
            return <tr key={data.id}>
                        <td><button  onClick={()=>{
                            this.deleteItem(data)
                        }}>Delete</button></td>
                        <td>{data.productName}</td>
                        <td><input type='number' style={styled} name="quantiy" id={data.id} defaultValue={data.Quantity} min='1' 
                        onChange={this.handleQuantity}/></td>
                        <td>{`${data.price} /${data.selector}`}</td>
                        
                        <td>{(data.Quantity) * (data.price)}</td>
                 </tr>
        })
        console.log('total.....')

        console.log(total)
        

        return (
            
            <div className="container">
                <input type="search" onChange={this.handleChange}/>

                <div className="row">
                    <div className="col-sm-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Product</th>
                                {/* <th scope="col">Quantity</th> */}
                                <th scope="col">Price(Rs)</th>
                                <th scope="col">Add to Cart</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filterList}
                            
                             
                            </tbody>
                            </table>
                        </div>

                        <div className="col-sm-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">updateCart</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price(Rs)</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody className="cartlist">
                            {addTocartList}
                            
                              <tr >
                                <td colSpan='2'>Total:</td>
                               
                             <td colSpan='3'>{this.state.cartTotal}</td>
                              </tr>
                            </tbody>
                            </table>

                        </div>
                        {/* <CartList cartlist={this.props.cartItems} {...this.props}/> */}
                        
                    </div>
            </div>
        )
    }
}

export default Cart
