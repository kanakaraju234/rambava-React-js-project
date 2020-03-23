
export function ItemList(state =[], action ){
        switch(action.type){
            case 'ADD_ITEMS':
                return [ ...state, action.items]
            case 'LOAD_ITEMS':
                return  action.items

                default: return state
        }
    }

//  export function cartItems(state=initState, action={}){
//         switch(action.type){
//             case 'CART_LIST':
//                 return [...state, action.cartItems]
                
//             case 'LOAD_CART':
//                 return  action.cartItems
//                 default: return state;

//         }
// }

