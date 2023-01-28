export const LOADING_ISSUE = 'LOADING_ISSUE'
export const   ERROR_ISSUE = 'ERROR_ISSUE'
export const  UPDATE_ISSUE = 'UPDATE_ISSUE'
export const UPDATE_CLOSE_ISSUE = 'UPDATE_CLOSE_ISSUE'

export const fetchIssue =  (open=true,page=1) => async(dispatch) => {
    try{
        dispatch(loadingIssue())

        let state = open ? 'open' : 'closed'
        //fetching issues
        const issue = await ( await fetch(`https://api.github.com/repos/iTwin/iTwinUI/issues?state=${state}&per_page=${20}&page=${page}` , {
            method:"GET",
            headers:{
                "Authorization": `Bearer ${'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'}`  //Bearer Token used to avoid API Rate Limiting
            }
        })).json()

        if(open){
            //updating open issues
            return dispatch(updateIssue(issue))
        }
        //updating closed issues
        return dispatch(updateCloseIssue(issue))
    }catch(e){
        dispatch(errorIssue())
    }
}

export const loadingIssue = ()=>{
    return {
        type: LOADING_ISSUE
    }
}

export const updateIssue = (data)=>{
    return {
        type: UPDATE_ISSUE,
        payload: data
    }
}

export const errorIssue = ()=>{
    return {
        type: ERROR_ISSUE
    }
}


export const updateCloseIssue = (data)=>{
    return {
        type: UPDATE_CLOSE_ISSUE,
        payload: data
    }
}