import {gadgets} from '../../assets'
import { createSlice } from '@reduxjs/toolkit'
const initialState =
{
    goods: gadgets,
    total: 0,
    current: 1,
    bags: [],
    modal: false,
    submenu: false,
    // newcate: ['All', ...new Set(gadgets.map(item => item.category))],
    search: ''
}
        

const Slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        Addtochart: (state, action) => {
            const id = action.payload;
            const selected = state.bags.find((item) => item.id === id)
            let unselected = state.goods.find((prod) => prod.id === id)
           
            if (selected) {
            return   {...state, modal:false,submenu:true }
            }
            else { 
                
                state.bags = [...state.bags, { ...unselected }];
                state.modal = true;
                  const bag = state.bags.find(item => item.id === id)
            bag.amount=bag.amount + 1
                
                }
        },
    
        Closetoogle: (state) => {
            state.modal=false
        },
        Closesub: (state,) => {
            state.submenu=false
        },
        Increase: (state,action) => { 
            const id =action.payload
            const bag = state.bags.find(item => item.id === id)
            bag.amount=bag.amount + 1
        },
        Decrease: (state,action) => { 
            const id =action.payload
            const bag = state.bags.find(item => item.id === id)
            bag.amount=bag.amount - 1
        },
        Remove: (state, action) => {
            const id = action.payload
            const rem = state.bags.filter(item => item.id !== id)
            state.bags=rem
        },
        Summation: (state) => {
            let totalitem = 0
            let currentitem = 0
            state.bags.forEach(num => {
                currentitem += num.amount
                totalitem += currentitem * num.price
            });
            state.current = currentitem;
            state.total = totalitem;
        },
        // Filter: (state, category) => {
        // if (category.payload==='All') {
        //     state.goods = gadgets
        //     return;
        // }
        //     const newdata= gadgets.filter(newd=>newd.category===category.payload)
        //     state.goods = newdata;
        // },
        Change: (state, action)=> {
    state.search= action.payload
        }
    }
})
export const {Addtochart,Closetoogle,Closesub,Increase,Decrease,Remove,Summation,Change}=Slice.actions
export default Slice.reducer;