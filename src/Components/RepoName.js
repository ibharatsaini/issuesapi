import React from 'react'
import {GoRepo} from 'react-icons/go'
import "./styles/reponame.css"

function RepoName({account,name}) {
    // const [issues,setIssues]= useState(null)
    
      
  return (
    <div id="reponame">

        <GoRepo className="repoIcon" />

        <span className='name'>
            {account}
            <insert>/</insert>
            {name}
        </span>

        <span className='public'>
            Public
        </span>

    </div>
  )
}

export default RepoName