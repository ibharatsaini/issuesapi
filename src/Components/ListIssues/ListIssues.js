import React from 'react'
import { useSelector } from 'react-redux'
import {TbCircleDot} from 'react-icons/tb'
import {AiOutlineCheck} from 'react-icons/ai'
import RepoName from '../RepoName'
import '../styles/listissues.css'
import usePagination from '../usePagination'
import Issue from './Issue'
import Loader from '../Loader'

function ListIssues() {
    const {issues , closedIssues,loading} = useSelector(state=>state.issue)

    //custom hook for pagination
    const [filter,changeOpen,next,previous]  = usePagination()

  return (
    <main>
        <RepoName name={`iTwinUi`} account={`iTwin`} />

        <div className='heading-section'>
            <span> 
                <TbCircleDot /> 
                Issues
            </span>
        </div>

        <section className='issues-section'>
           <div className='title issueRow'>
                <div 
                    onClick={changeOpen} 
                    className='openClose'
                >
                    <TbCircleDot />
                    <span>
                        Open
                    </span>
                </div>
                <div 
                    onClick={changeOpen} 
                    className='openClose'
                >
                    <AiOutlineCheck />
                    <span >
                        Closed
                    </span>
                </div>
           </div>
           { 
             loading ? <Loader />  :
                  filter.open ? 
                  issues.slice(filter.current*20 - 20,filter.current * 20).map(el=>(<Issue issue={el} />)) : 
                  closedIssues.slice(filter.current*20 - 20,filter.current * 20).map(el=>(<Issue issue={el} />))
           }
        </section>
        <div id='pagination'>
            <div 
              onClick={previous} 
              className='prev'
            >
                Previous
            </div>
            {
                <span className='page'>
                        {filter.current}
                </span>
            }
            <div 
                onClick={next} 
                className='next'>
                    Next
            </div>
        </div>

    </main>
  )
}

export default ListIssues