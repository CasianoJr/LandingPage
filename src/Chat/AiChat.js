import React, {useEffect, useState} from 'react'

export default function AiChat() {
    const [showChat, setShowChat] = useState(true)

    useEffect(() => {
        if (showChat){
            setTimeout(()=>{
                setShowChat(false)
            }, 6000)
        }
    }, [showChat])
    return (
        <div className="ai-chat">
            {showChat &&
            <span className="ai-text">Hello! How can we help you find your perfect cadidate today. </span> 
            }
            <i onMouseEnter={()=> setShowChat(true)}
                className="fas fa-comment-dots"></i>
        </div>
    )
}
