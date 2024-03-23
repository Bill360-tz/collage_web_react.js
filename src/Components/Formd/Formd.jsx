import React, { PureComponent } from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import './Formd.css';

export class Formd extends PureComponent {
  render() {
    return (
      <div data-aos="fade-up" className='grid-2 fill flex-centered formd m-flex pad-20'>
        <div className="flex fill">
            <img  className='fill' src="/reg3.jpg" alt="" />
        </div>
        <div data-aos="zoom-in" className="flex-c flex-centered">
            <h3 className="text-c jjh">Get our registration form</h3>
            <a href='/docs/reg.pdf' className="btn-pri flex disText pad-15 text-c jjk" download={'Raseem College Reg-form'}> <ArrowCircleDownIcon/> Download</a>
        </div>
      </div>
    )
  }
}

export default Formd