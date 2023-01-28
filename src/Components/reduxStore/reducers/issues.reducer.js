import { UPDATE_ISSUE, ERROR_ISSUE , LOADING_ISSUE, UPDATE_CLOSE_ISSUE } from "../actions/issues.actions"
const initialState={
    issues  : [],
    closedIssues :[],  
    loading : false,
    error   : false
}

export const issueRedcuer = (state=initialState,actions)=>{
        switch(actions.type){
            case LOADING_ISSUE:
                return {
                    ...state,
                    loading: true,
                    error:false
                }
            case UPDATE_ISSUE:

                return {
                    ...state,
                    loading:false,
                    error:false,
                    issues: [ 
                              ...state.issues,
                              ...actions.payload
                            ]  
                }
            case UPDATE_CLOSE_ISSUE:

                return {
                    ...state,
                    loading:false,
                    error:false,
                    closedIssues: [
                                        ...state.closedIssues,
                                        ...actions.payload
                                  ]
                }
            case ERROR_ISSUE:
                return {
                    ...state,
                    error: true
                }
            
            default :
                return state
        }
}
