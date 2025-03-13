import { Activity } from "../types"

export type ActivityActions =
    {type: 'save-activity', payload: { newActivity : Activity } }

type  ActivityState = {
    activities: Activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const  activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
    ) => {
    
    if(action.type === "save-activity"){
        

        return {
            ...state,/// copia del state para no perder info anterior
            activities: [...state.activities, action.payload.newActivity] ///[rescatar actividades previas, manda a llamar el payload]
        }
    } 
    return state   
}