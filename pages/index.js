import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grids from "../components/grids";
import FilterButton from "../components/filterButton";
import React, {Suspense} from "react";
import {CarThree} from "../components/threeDCar";
import {Box} from "@chakra-ui/react";
import Footer from "../components/footer";

export default function Home() {

  const [target, setTarget] = React.useState(0);
  console.log("target ", target);

  return (

    <div className={styles.container}>
      <Head>
        <title>HIPWRAP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <main>
        {/*  TODO место под 3d тачку*/}
          <Box w='100%' h='50vh'> <Suspense fallback={null}><CarThree></CarThree></Suspense></Box>
        <FilterButton setTarget={setTarget}></FilterButton>
        <Grids target={target}></Grids>
      </main>
        <Footer/>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create by slxnxl
        </a>
      </footer>
    </div>

  )
}
