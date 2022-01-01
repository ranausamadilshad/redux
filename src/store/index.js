import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true }

const sliceCounter=createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
           state.counter = state.counter + 1;
        },
        decrement(state) {
           state.counter = state.counter - 1;
        },
        increase(state, action) {
            state.counter=state.counter + action.payload
         },
        showToggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})


const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logut(state) {
            state.isAuthenticated = false;
        }
    }
})


// const counterReducer = (state= initialState,action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter:state.showCounter
//         }
//     }
//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter:state.showCounter
            
//         }
//     }
//       if (action.type === "increase") {
//         return {
//             counter : state.counter  + action.amount,
//             showCounter:state.showCounter

//         }
//     }

//     if (action.type === "toggle") {
//         return {
//             showCounter:!state.showCounter,
//             counter : state.counter
//         }
//     }


//     return state
// }



// const store= createStore(counterReducer)

export const counterActions = sliceCounter.actions;
export const authActions = authSlice.actions;

const store = configureStore({
    reducer:{counter:sliceCounter.reducer,auth:authSlice.reducer}
})

export default store;