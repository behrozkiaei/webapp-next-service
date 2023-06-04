import React from 'react'
interface TitleDescInterface{
    title:string,
    desc1 :string,
    desc2?:string
}

const  TitleDesc: React.FC<TitleDescInterface> = ({title,desc1,desc2=null})=> {
  return (
    <div className="d-flex justify-start flex-column align-start title"  style={{width:"80%"}}>
                      <h2>{title}</h2>
                      <p className="mid_gray--text mt-1" >{desc1}
                      </p>
                      {desc2 &&
                      <p className="mid_gray--text mt-1" >{desc2}</p>
                      
                      }
                    </div>
  )
}
export default  TitleDesc;