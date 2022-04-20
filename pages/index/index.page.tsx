import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <style>{`
        * {
          color: red;
        }
        h1 {
          font-size: 50px;
        }
      `}</style>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
