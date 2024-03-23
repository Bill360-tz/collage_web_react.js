import React, { PureComponent } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

export class Terms extends PureComponent {
  render() {
    return (
      <div className="flex-c fill">
        <Navbar/>
        <div className="flex-c fill">
            <h3>Tarms and Conditions</h3>
        </div>
      </div>
    )
  }
}

export default Terms