import Banner from '@/Components/Banner'
import BigDeal from '@/Components/BigDeal'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import NewArrival from '@/Components/NewArrival'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <NewArrival></NewArrival>
      <Banner></Banner>
      <BigDeal />
      
    </div>
  )
}

export default Home