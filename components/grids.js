"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import GridComponent from "../components/grid-project/index";
import { pb } from "../utils/pb";

export default function Grids({ target }) {
  const [photos, setPhotos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [countPhotoready, setCountPhotoready] = useState(0);

  const [renderedPhoto, setRenderedPhoto] = useState(false);

  let test = [];
  // https://www.npmjs.com/package/react-breakpoints
  // запрос данных для сетки
  useEffect(() => {
    if (!fetching) {
      setRenderedPhoto(true)
    }
  }, [fetching]);

  // TODO переписать как тут https://devtrium.com/posts/async-functions-useeffect
  useEffect(() => {
    if (fetching) {
      // если выбраны все посты
      if (target.id === 0) {
        pb?.collection("projects")
          .getList(currentPage, 10, {
            sorted: -"created",
          })
          .then((res) => {
            console.log("res: ", res.items);
            setPosts(res.items);
            setPhotos([...photos, ...res.items]);
            setTotalCount(res.totalItems);

            setCurrentPage((prevState) => prevState + 1);
          })
          .finally(() => setFetching(false));
      } else {
        // если выбран параметр фильтра
        pb?.collection("projects")
          .getList(currentPage, 10, {
            // TODO есть ошибка с фильтром, что если 2 и более параметра у модели то не выдается
            filter: `listservices.id~'${target.id}'`,
          })
          .then((res) => {
            console.log("res: ", res.items);
            setPosts(res.items);
            setTotalCount(res.totalItems);
            setPhotos([...photos, ...res.items]);
            setCurrentPage((prevState) => prevState + 1);
          })
          .finally(() => setFetching(false));
      }
      console.log("fetching end", posts);
    }
  }, [fetching]);

  // сбрасываем посты и запрашивем новые если поменялся таргет фильтра
  useEffect(() => {
    setRenderedPhoto(false);
    setCountPhotoready(0);
    setCurrentPage(1);
    setPhotos([]);
    setFetching(true);
  }, [target]);

  useEffect(() => {
        document.addEventListener("scroll", scrollHeandler);

    return function () {
      document.removeEventListener("scroll", scrollHeandler);
    };
  }, [photos.length]);

  const scrollHeandler = (e) => {
    //проверка, что мы приближаемся к краю страницы
        if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      photos.length < totalCount
    ) {
      setFetching(true);
    }
  };

 // console.log("photos: ", photos);

  return (
    <>
      {!renderedPhoto && <LoaderElement />}
      {renderedPhoto && (
        <GridComponent
          isFirstPhotoLoaded={setCountPhotoready}
          array={[...photos]}
        />
      )}
      {/* <SuspenseComponent array={[...photos]}></SuspenseComponent>  */}
    </>
    // TODO add Suspense
  );
}

function Plug() {
  // Вот сюда gif с загрузкой
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/3f1693db-8d00-4440-b0f4-54b46ba57620/uc8D8CHXxb.json"
      style={{ height: "100%", backgroundColor: "#F3F5F8" }}
    />
  );
}

function LoaderElement() {
  return (
    <div className="wrapper">
      <div className="net plug">
        <div className="net_first">
          <Plug />
          <Plug />
          <Plug />
        </div>
        {/* <div className="net_second">
        <Plug />
        <Plug />
        <Plug />
        <Plug />
      </div>
      <div className="net_third">
        <Plug />
        <Plug />
        <Plug />
      </div> */}
      </div>
    </div>
  );
}
