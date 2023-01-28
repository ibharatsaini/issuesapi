import React,{useState , useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIssue } from './reduxStore/actions/issues.actions'

//custom hook for pagination
function usePagination() {

    const [ total , setTotal ] = useState(120)
    const {issues,closedIssues} = useSelector(state=>state.issue)
    const [filter,setFilter] = useState({current:1,open:true})
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchIssue(filter.open,filter.current))
    },[])

    
    //function for open and close issues toggle
    function changeOpen(){
        
        setFilter(prev=>({
            ...prev,
            open:!prev.open,
            current:1
        }))

        if(filter.open){
            setTotal(200)
        }else{
            setTotal(120)
        }

        dispatch(fetchIssue(!filter.open,1))  
    }
    
    //function to change current
    
    

    function next(){

        if( filter.current < total/20 ){
            setFilter((prev)=>({...prev , current:prev.current+1}))
        }

        if((  filter.current*20 < 
            (filter.open ? issues.length : closedIssues.length) )
            ||
            (filter.current == (total/20))
        ) return 
        
        dispatch(fetchIssue( filter.open, filter.current+1 ))
    }

    function previous(){
        if(filter.current == 1) return
        setFilter((prev)=>({...prev,current:prev.current-1}))
    }
    


  return [filter , changeOpen, next, previous]
}

export default usePagination