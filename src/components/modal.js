import ReactDOM from 'react-dom'

import './modal.css'

export default function Modal({children,}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
            textAlign: "center"
            }}> 
        {children}
      </div>
    </div>
  ), document.body) //it will put it at the end of the body
}
