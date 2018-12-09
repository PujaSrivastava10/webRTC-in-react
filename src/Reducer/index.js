import {CHANGE_BUTTON_COLOUR} from "../Constants"

const buttonReducer=(state={color:"primary", text : "play"}, action)=>{
    let data;
    switch(action.type){
     
    case CHANGE_BUTTON_COLOUR :
        data=Object.assign({},state, {color : action.color } , {text : action.text})
        return data;
    
    default:
        return state;
    }
}

    
export default buttonReducer