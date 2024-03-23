import React, { PureComponent } from 'react'
import Contact from '../../Components/Contact/Contact'
import Formd from '../../Components/Formd/Formd';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export class Contacts extends PureComponent {
  render() {
    return (
      <div>
        <Navbar/>
        <Contact/>
        <Formd/>
        <Footer/>
      </div>
    )
  }
}

export default Contacts