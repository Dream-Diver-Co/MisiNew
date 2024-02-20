import Head from 'next/head'
import React from 'react'
import Heder from '../components/about/Heder'
import ScrollToTop from '../components/scrolling/ScrollToTop'
import ServiesText from '../components/service/ServiesText'
import SpecialEventd from '../components/service/SpecialEventd'

const service = () => {
  return (
    <div>
      <Head>
        <title>Services | Misi Nueropsy</title>
        <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heder title={"Services"} image={"serviceHeader"}/>
      <ScrollToTop/>
      <ServiesText/>
      <SpecialEventd/>
    </div>
  )
}

export default service