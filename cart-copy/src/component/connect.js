import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import* as actions from '../redux/actions';
import App from './App';

function mapStateToProps(state){
    return {
        items:state.ItemList,
        cartItems:state.cartItems
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

const Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default Main