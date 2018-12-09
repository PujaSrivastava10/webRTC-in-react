import {CHANGE_BUTTON_COLOUR} from "../Constants";

export const changeButtonColour=(color , text)=>{
    return{
        type:CHANGE_BUTTON_COLOUR,
        color:color,
        text:text
    }
}