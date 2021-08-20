import React from 'react'

const Template = ({templates, setMeme}) => {
    return (
        <div>
            {templates.map((ele, idx)=>(
                <div key = {ele.id} className = "template" onClick = {()=>{
                    setMeme(ele);
                }} >
                    <div className = "image" style={{backgroundImage : `url(${ele.url})`}} ></div>
                </div>
            ))}
        </div>
    )
}

export default Template
