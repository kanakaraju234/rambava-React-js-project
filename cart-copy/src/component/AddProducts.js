import React, { Component } from 'react';


 class AddProducts extends Component {
            constructor(props){
                super(props)
                this.state ={
                   
                        productName:'',
                        price:'',
                        description:'',
                        keywords:'',
                        selector:'ltr',
                        id: Number(new Date().getTime()),
                        Quantity:1
                        
                }
                this.handleSubmit = this.handleSubmit.bind(this)
                this.handleChange = this.handleChange.bind(this)
                
            }
            handleChange(e){
                        this.setState({
                           [e.target.name] : e.target.value
                           
                        })
            }

         handleSubmit(e){
                    e.preventDefault();
                   
                    const product = this.state
                this.props.startAddingItems(product)

            }
   
    render() {
        return (
            <div className="container w-50" >
                
                <form onSubmit = {this.handleSubmit} className="needs-validation bg-info rounded p-4" name="grocery-form">
                    <div className="form-group row">
                            <label htmlFor="validationCustom01" className="col-sm-4 col-form-label">Product Name</label>
                            <div className="col-sm-8">
                            <input type="text" 
                            className="form-control" 
                            id="validationCustom01" 
                            name="productName" 
                            defaultValue={this.state.productName}
                            onChange={this.handleChange}
                             required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="price" className="col-sm-4 col-form-label">Price</label>
                                <div className="form-inline col-sm-8">
                                    <input type="text" className="form-control col-sm-10" id="price" name="price"
                                     onChange={this.handleChange}
                                     defaultValue={this.state.price}
                                     />
                                    <select type="password" className="form-control col-sm-2" id="pwd" name="selector"
                                     onChange={this.handleChange} 
                                     defaultValue={this.state.selector}
                                     >
                                    <option  value="Kg">Kg</option>
                                    <option  value="ltr">ltr</option>
                                    <option value="PerItem" >Per Item</option>
                                    </select>
                                </div>
                        </div>

                     
                        <div className="form-group row">
                            <label htmlFor="pdescription" className="col-sm-4 col-form-label">Product Description</label>
                            <div className="col-sm-8">
                            <input type="text" className="form-control" id="pdescription" name="description"
                             onChange={this.handleChange}
                             defaultValue={this.state.description}
                              />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTextarea" className="col-sm-4 col-form-label">Search keywords</label>
                            <div className="col-sm-8">
                            <textarea className="form-control " id="validationTextarea" 
                            onChange={this.handleChange}
                             name="keywords"
                             defaultValue={this.state.keywords}
                             >

                            </textarea>
                            </div>
                        </div>
                        <div className="form-group row text-center">
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-8">
                            <input type="submit" className="form-control w-50 " value="Add Product" />
                            </div>
                        </div>
                </form>
            </div>
        )
    }
}

export default AddProducts
