import React from 'react'

export default function Alert({alert}) {
  return (
    <>
      <div className={`alert alert-success alert-dismissible fade ${alert}`} role="alert">
         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         <strong>Success</strong> Text Coppied Successfully.
      </div>
      
    </>
  )
}
