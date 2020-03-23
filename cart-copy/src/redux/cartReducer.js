import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../redux/cart-actions'


const initState = {
    addedItems:[],

}

const cartReducer = (state = initState,action)=>{

    function updateQuantity(addedItem){
        let index = state.addedItems.findIndex(item => item.id === action.id);
    
        // replace quantity
        state.addedItems.splice(index,1,addedItem);
    }

    switch(action.type){

        case ADD_TO_CART:
            return {
                ...state,
                addedItems: [...state.addedItems, action.data]
            }

        case REMOVE_ITEM:
            let removeItem =state.addedItems.filter(item => item.id !== action.id)

            return{
                ...state,
                addedItems:removeItem,
            }

        case SUB_QUANTITY:

            let subItem = state.addedItems.find(item => item.id === action.id);
            if(subItem.Quantity === 1){
                return {
                    ...state,
                    addedItems: state.addedItems
                }
            }
            subItem.Quantity-=1

            updateQuantity(subItem)

            return {
                ...state,
                addedItems: state.addedItems
            }

        case ADD_QUANTITY:
            let addedItem = state.addedItems.find(item => item.id === action.id);
            addedItem.Quantity+=1

            updateQuantity(addedItem)
           
            return {
                ...state,
                addedItems: state.addedItems
            }
            default: return state
    }

//     if(action.type === 'LOAD_CART'){
        
//         return {
//             ...state,
//             citems: [...state.citems, action.items]
//         }
//     }
   
//     //INSIDE HOME COMPONENT
//     if(action.type === ADD_TO_CART){
//           let addedItem = state.citems[0].find(item=> item.id === action.id)
//           console.log('checking...')
//           console.log(addedItem)
//           //check if the action id exists in the addedItems
//          let existed_item= state.addedItems.find(item=> action.id === item.id)
//          if(existed_item)
//          {
//             addedItem.Quantity += 1 
//              return{
//                 ...state,
//                  total: state.total + addedItem.price 
//                   }
//         }
//          else{
//              debugger
//             addedItem.Quantity = 1;
//             //calculating the total
//             let newTotal = state.total + addedItem.price 
            
//             return{
//                 ...state,
//                 addedItems: [...state.addedItems, addedItem],
//                 total : newTotal
//             }
            
//         }
//     }
//     if(action.type === REMOVE_ITEM){
//         let itemToRemove= state.addedItems.find(item=> action.id === item.id)
//         let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
//         //calculating the total
//         let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
//         console.log(itemToRemove)
//         return{
//             ...state,
//             addedItems: new_items,
//             total: newTotal
//         }
//     }
//     //INSIDE CART COMPONENT
//     if(action.type=== ADD_QUANTITY){
//         let addedItem = state.items.find(item=> item.id === action.id)
//           addedItem.quantity += 1 
//           let newTotal = state.total + addedItem.price
//           return{
//               ...state,
//               total: newTotal
//           }
//     }
//     if(action.type=== SUB_QUANTITY){  
//         let addedItem = state.items.find(item=> item.id === action.id) 
//         //if the qt == 0 then it should be removed
//         if(addedItem.quantity === 1){
//             let new_items = state.addedItems.filter(item=>item.id !== action.id)
//             let newTotal = state.total - addedItem.price
//             return{
//                 ...state,
//                 addedItems: new_items,
//                 total: newTotal
//             }
//         }
//         else {
//             addedItem.quantity -= 1
//             let newTotal = state.total - addedItem.price
//             return{
//                 ...state,
//                 total: newTotal
//             }
//         }
        
//     }

//     if(action.type=== ADD_SHIPPING){
//           return{
//               ...state,
//               total: state.total + 6
//           }
//     }

//     if(action.type=== 'SUB_SHIPPING'){
//         return{
//             ...state,
//             total: state.total - 6
//         }
//   }
    
//   else{
//     return state
//     }
    
 }

export default cartReducer