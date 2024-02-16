import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Footer.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom'

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='footer flex fill pad-10 flex-s-btn'>
        <p className="normal-text flex">Copyright<AlternateEmailIcon sx={{ fontSize: 16 }} />{ new Date().getFullYear()}</p>

        <p className="normal-text">Powered by <Link className='anchor' target={'_blank'} to={`https://jandpconsult.co.tz`}>JandP ICT Consult</Link></p>
      </div>
    )
  }
}

export default Footer