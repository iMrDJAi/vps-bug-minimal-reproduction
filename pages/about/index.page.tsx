import React from 'react'
import './index.css'

export { Page }

function Page() {
  return (
    <>
      <style>{`
        * {
          color: red !important;
        }
        h1 {
          font-size: 50px;
        }
      `}</style>
      <h1>About</h1>
      <p>A <s>green</s> red page.</p>
    </>
  )
}
