import React from 'react'
import Map from '../components/contact/Map'
import Forminfo from '../components/contact/Forminfo'
import Heder from '../components/about/Heder'

const contact = () => {
  return (
    <div>
      <Heder title={"Contact Us"} />
      <Forminfo/>
      <Map/>
    </div>
  )
}

export default contact