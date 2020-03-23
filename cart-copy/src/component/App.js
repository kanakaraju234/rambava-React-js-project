import React, { Component } from 'react';
import AddProducts from './AddProducts';
import Dcart from './Dcart'
import {Route,Switch,Link} from 'react-router-dom';


 class App extends Component {
    

    componentDidMount(){
        this.props.startLoadingItems()
    }
    render() {
        return (
            <div>
                <div className="container text-center">
                        <Link to="/"><h1>Grocery List</h1></Link>
                        <Link to="/cart">Cart</Link>
                </div>
                
            <Switch>
                <Route exact path ="/">
                    <AddProducts {...this.props} />
                </Route>
                <Route exact path ="/cart">
                    <Dcart data={this.props.items} {...this.props}/>
                </Route>
            </Switch>
            </div>
        )
    }
}



export default App

