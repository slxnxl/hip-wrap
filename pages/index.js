import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grids from "../components/grids";
import FilterButton from "../components/filterButton";
import React, { Suspense } from "react";
import { CarThree } from "../components/threeDCar";
import { Box, Skeleton } from "@chakra-ui/react";
import Footer from "../components/footer";
import Car from "../components/newCar";
import { pb } from "../utils/pb";

export default function Home(props) {
  const [target, setTarget] = React.useState(0);
  console.log("target ", target);
  console.log("data index: ", props.posts.data[target].name);
  const [renderedPhoto, setRenderedPhoto] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>HIPWRAP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <main>
        <Box w="100%" h="50vh">
          <Suspense fallback={null}>
            {/* <CarThree></CarThree> */}
            {/*<Car/>*/}
          </Suspense>
        </Box>
        <Skeleton height='20px' isLoaded={renderedPhoto} />
        <FilterButton func={setTarget} data={props.posts.data}></FilterButton>
        {/* <Skeleton isLoaded={renderedPhoto} fadeDuration={4} startColor='pink.500' endColor='orange.500'  height='100px'> */}
        <Grids isRenderedPhoto={setRenderedPhoto} target={props.posts.data[target]}></Grids>
        {/* </Skeleton> */}
      </main>
      <Footer />
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
  );
}

// запрос данных категорий для фильтра
export async function getStaticProps() {
  try {
    const getRecords = await pb?.collection("services").getFullList({
      sort: "-created",
    });
    // TODO по идее можно переделать без JSON
    const data = JSON.parse(JSON.stringify(getRecords))
    data.unshift({ id: 0, name: "все" })
    return {
      props: {
        // TODO упростить представление потом
        posts: { data },
      }, // will be passed to the page component as props
    };
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
}
