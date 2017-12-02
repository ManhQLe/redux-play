const Redux = require("redux");
const {createStore} = Redux;

const InitState = {
    "Add":0,"Mult":1
}
const reducer = function(state,action){    

    switch(action.type){
        case "ADD":
            return state.Add + action.n
        case "SUB":
            return state.Add -action.n
        default: 
            return state.Add;
    }
}

const reducer2 = function(state,action){
    switch(action.type){
        case "MULT":
            return  state.Mult * action.n
        case "DIV":            
            return state.Mult * action.n
        default:
            return state.Mult
    }
}


const cusReducer = (all)=>{        
    return (state = InitState,action)=>{
        let newState = Object.assign({},state);
        const keys = Object.keys(all);
        
        for(const key of keys)
        {
            console.log(key)
            newState[key] = all[key](state,action)
        }
        return newState;
    }
}

const store = createStore(cusReducer({
    "Add":reducer,
    "Mult":reducer2
}))

// store.subscribe(()=>{
//     console.log("Called")
// })
console.log(store.getState());
store.dispatch({type:"ADD",n:2});

 console.log(store.getState());