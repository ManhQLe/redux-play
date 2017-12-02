const Redux = require("redux");
const {createStore,combineReducers} = Redux;

const InitState = {
    "Add":0,"Mult":1
}
const reducer = function(state=InitState,action){    
    console.log("called add ", action)
    switch(action.type){
        case "ADD":
            return state.Add + action.n
        case "SUB":
            return state.Add -action.n
        default:
 
            return state;
    }
}

const reducer2 = function(state=InitState,action){
    switch(action.type){
        case "MULT":
            return  state.Mult * action.n
        case "DIV":            
            return state.Mult * action.n
        default:
        console.log(state)
            return state
    }
}

const reducerX = combineReducers({"Add":reducer,"Mult":reducer2});


const store = createStore(reducerX)

// store.subscribe(()=>{
//     console.log("Called")
// })

store.dispatch({type:"ADD",n:2});

 console.log(store.getState());

