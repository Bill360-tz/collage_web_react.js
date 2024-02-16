import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export class Landing extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='landing flex-c fill'>
        <div className="grid-2 fill ">
          <div className="flex-c fill flex-centered textBox1 pad-20 ">
            <h1 className="theme-text collageName w-600">RASEEM COLLEGE</h1>
            <h3 className='collageName2 theme-text-c w-600'>AND INTERNATIONAL LANGUAGES</h3>
            <h3 className="pompiere-regular">“Your Passport to Global Communication”</h3>
            <div className="flex width-50 flex-centered">
              <div className ="btn-pri-o pad-10 theme-text-c bg-w rad-7 w-600 flex"> GET IN TOUCH <Link target='new' to="https://wa.me//+255745801564" className='btn-pri'><WhatsAppIcon/></Link> <Link to="mail:jamesjojo461@gnail.com" className="btn-pri"><MailOutlineIcon/></Link> </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing