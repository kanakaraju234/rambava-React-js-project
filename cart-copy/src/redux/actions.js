import {database} from '../component/Confi'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../redux/cart-actions';
export function startAddingItems(items){
    return (dispatch) =>{
         
        return database.ref('Grocery details/').push(items).then(()=>{
            dispatch(addItems(items))
        }).catch((error) => {
            console.log(error)
        })
    }
}

//cart items adding
// export function addToCart(cartItems){
//     return (dispatch)=> {
//         return database.ref('CartItems/'+cartItems.id).set(cartItems).then(()=>{
//             dispatch(addToCart(cartItems))
//         }).catch(error => console.log(error))
//     }
// }


// cart item update...

// export function UpdateToCart(cartItems){
//     return (dispatch)=> {
//         return database.ref('CartItems/'+cartItems.id).update({Quantity:cartItems.Quantity})
        
//     }
// }
//cart Items loading

// export function startLoadingCartItems(){
//     return (dispatch) =>{
//         return database.ref('CartItems').once('value').then((snapshot)=>{
//             let cartItems = []
//             snapshot.forEach(childSnapshot =>{
//                 cartItems.push(childSnapshot.val())
//             })
//            dispatch(loadCartItems(cartItems))
//         }).catch((error) => {
//             console.log(error)
//         })
//     }
// }

//cart Items deleting
// export function cartItemDeleted(cartItemDelete){
//     return ( ) => {
//                 return database.ref('CartItems/'+cartItemDelete.id).remove();
//     }

// }



export function startLoadingItems(){
    return (dispatch) => {
        return database.ref('Grocery details').once('value').then((snapshot) =>{
            let items = []
            console.log(items)
            snapshot.forEach(item => {
                items.push({...item.val(),id:item.key })
            })
            dispatch(loadItems(items))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadItems(items){
    return {
        type:'LOAD_ITEMS',
        items
    }
    
}

export function addItems(items){
    return {
        type: 'ADD_ITEMS',
        items
    }

}


export function loadCartItems(cartItems){
    return {
        type:'LOAD_CART',
        cartItems
    }
}



//add cart action
export const addToCart= (data)=>{
   // console.log('checking...')
   // console.log(data)
    return{
        type: ADD_TO_CART,
        data,
        
    }
}
//remove item action
export const removeItem=(id,total)=>{
    return{
        type: REMOVE_ITEM,
        id,
        total
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
        
    }
}