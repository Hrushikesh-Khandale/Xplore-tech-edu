import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Logo = () => {
  return (
    <div>
         <Link className="logo" to="/">
            Xplore
          </Link>
        
    </div>
  )
}

export default Logo