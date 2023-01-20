import React from 'react'

const Chat = () => {
  return (
    <div className="Chat">
      <div className="Mess left">
        <i>
          {/* icon of people messaging */}<a href="http://example.com" class="round-buttonn"></a>
        </i>
        {/* message */} <span></span>
      </div>
      <div className="Mess right">
        <i>
        <a href="http://example.com" class="round-buttonn"></a>
        </i>
        <span></span>
      </div>
    </div>
  )
}

export default Chat