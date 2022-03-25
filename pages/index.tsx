import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TryButton from '../src/components/TryButton'
import Auntie from '../src/components/Auntie'

const Home: NextPage = () => {
  return (
    <>
      <Auntie />
      {/* <TryButton /> */}
    </>
  )
}

export default Home
