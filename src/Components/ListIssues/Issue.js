import React from 'react'
import { TbCircleDot } from 'react-icons/tb'


function Issue({issue}) {
    const {number,title,labels,user} = issue
  
  return (
    <div className='issueRow'>
        
        <TbCircleDot color={`green`} className='icons' /> 

        <div className='issueInfo'>

            <div className='issueTitle'>

                <h4>{title}</h4> 

                <div className='labelDiv'>
                     {
                        labels.length >0  &&
                        labels.map(el => (
                                                        <div className='label'>{el.name}</div>
                                            )
                                        )
                    }
                </div>
            </div>
            <div className='misc'>
                #{number} opened by {user.login}
            </div>
        </div>
    </div>
  )
}

export default Issue