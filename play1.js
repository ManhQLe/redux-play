const Redux = require("redux");
const {createStore,combineReducers} = Redux;

const InitState = {Number:1,Mult:1}
const reducer = function(state=InitState,action){
    switch(action.type){
        case "ADD":
            return { Number: state.Number + action.n}                   
        case "SUB":
            return { Number:state.Number -action.n}
        default:
            return {Number:state.Number};
    }
}

const reducer2 = function(state=InitState,action){
    switch(action.type){
        case "MULT":
            return  { Mult: state.Mult * action.n }
        case "DIV":            
            return { Mult: state.Mult * action.n }
        default:
            return { Mult: state.Mult}
    }
}

const reducerX = combineReducers({Number:reducer,Mult:reducer2});

const store = createStore(reducerX)

store.subscribe(()=>{
    console.log("Called")
})

store.dispatch({type:"ADD",n:2});

console.log(store.getState());

