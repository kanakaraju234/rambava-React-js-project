import React, { Component } from 'react';


 class Dcart extends Component {
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
           this.deleteItem = this.deleteItem.bind(this);
           this.Qdecrease = this.Qdecrease.bind(this);
           this.Qincrease = this.Qincrease.bind(this);
       }
        handleChange = (e)=>{
           this.setState({
               searchValue: e.target.value
            })
        }
        addToCart(data){
            const checkingDuplicate = this.props.cartItems.addedItems;
          
                if((checkingDuplicate.findIndex(item => item.id === data.id))<0){
                    this.props.addToCart(data) 
                }


                   }

        deleteItem(data){
            const checkingDuplicate = this.props.cartItems.addedItems;
                if((checkingDuplicate.find(item => item.id === data.id))){
                    this.props.removeItem(data.id) 
                }
          
        }

        Qdecrease (data){
            this.props.subtractQuantity(data.id)
        }

        Qincrease (data){
            this.props.addQuantity(data.id)
        }


        
     printTable =  () => {
                        var tab = document.getElementById('tab');
                        var win = window.open('', '', 'height=700,width=700');
                        win.document.write(tab.outerHTML);
                        win.document.close();
                        win.print();
                    }
       

    render() {
        console.log(this.props)
        

        const filterList = this.props.items.filter(name =>{
            return name.keywords.toLowerCase().includes(this.state.searchValue.toLowerCase())})     
        .map((data) =>{
            return <tr key={data.id}>
                        <td>{data.productName}</td>
                        <td>{`${data.price} /${data.selector}`}</td>
                        <td><button className="btn btn-success" onClick={()=>{
                            this.addToCart(data)
                        }}>Add</button></td>
                 </tr>
        })

        const addTocartList = this.props.cartItems.addedItems
        .map((data, index) =>{
            return <tr key={data.id}>
                        <td><button className="btn btn-danger" onClick={()=>{
                            this.deleteItem(data)
                        }}>Delete</button></td>
                        <td>{data.productName}</td>
                        {/* <td><input type='number' style={styled} name="quantiy" id={data.id} defaultValue={data.Quantity} min='1' 
                        onChange={this.handleQuantity}/></td> */}
                        <td>
                            <button className="btn btn-secondary" onClick ={()=> this.Qdecrease(data)}> - </button>&nbsp;
                            <span>{data.Quantity}</span>&nbsp;
                            <button className="btn btn-secondary" onClick ={()=> this.Qincrease(data)}> + </button>
                        </td>
                        <td>{`${data.price} /${data.selector}`}</td>
                        
                        <td>{(data.Quantity) * (data.price)}</td>
                 </tr>
        })

        //cart total logic
        const cartTotal = this.props.cartItems.addedItems;
        const totalCost = cartTotal.reduce(function(prev,cur){
            return prev + (cur.Quantity*cur.price)
        },0)

        return (
            
            <div className="container">
                <div className="form-group has-search w-50">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Search" />
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <table className="table table-bordered table-striped text-center">
                            <thead>
                                <tr className="table-active">
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
                        
                        <table className="table table-bordered table-striped text-center" id="tab">
                            <thead>
                                <tr className="table-success">
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price(Rs)</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody className="cartlist">
                            {addTocartList}
                            
                              <tr className="table-success">
                                <td colSpan='2'>Total:</td>
                               
                             <td colSpan='3'>{totalCost}</td>
                              </tr>
                            </tbody>
                            </table>
                        <input className="btn btn-primary" type="button" value="Print Table" onClick = {()=>this.printTable()} />

                        </div>
                        
                    </div>
            </div>
        )
    }
}

export default Dcart
