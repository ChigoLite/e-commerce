import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    postcode: '',
    state: '',
    open:false
}

const Formslice = createSlice({
    
    name: 'input',
    initialState,
    reducers: {
        HandleChange1: (state, action) => {
            
            state.firstname = action.payload;
          
        },
        HandleChange2: (state, action) => {
            
            state.lastname = action.payload;
          
        },
        HandleChange3: (state, action) => {
            
            state.email = action.payload;
          
        },
        HandleChange4: (state, action) => {
            
            state.number = action.payload;
          
        },
        HandleChange5: (state, action) => {
            
            state.postcode = action.payload;
          
        },
        HandleChange6: (state, action) => {
            
            state.state = action.payload;
          
        },
        Show: (state) => {
            state.open=true
        },

        Hide: (state) => {
            state.open=false
        }
      
    }
})
 export const {HandleChange1,HandleChange2,HandleChange3,HandleChange4,HandleChange5,HandleChange6,Show,Hide}=Formslice.actions
export default Formslice.reducer;