'use client';
import { Suspense, useEffect, useState } from "react";
import GridComponent from "../components/grid-project/index";
import { pb } from "../utils/pb";
import { Skeleton } from "@chakra-ui/react";
import dynamic from "next/dynamic";

export default function Grids({ isRenderPhoto, target }) {
  const [photos, setPhotos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [countPhotoready, setCountPhotoready] = useState(0);
  let test = [];
  // https://www.npmjs.com/package/react-breakpoints
  // запрос данных для сетки
  useEffect(() => {
    if (countPhotoready > 3 || countPhotoready < totalCount %10) { 
    // мб прописать на то, чтобы все картинки были loaded
    // костыль для лоудера
    // setTimeout(() => {
      console.log("timout ", countPhotoready, totalCount %10)
      isRenderPhoto(true)
    // }, 3500)
    }
  }, [countPhotoready])

  //   const SuspenseComponent = dynamic(
  //   () => import("../components/grid-project/index"),
  //   { loading: () => <Skeleton height='200px' />,
  //     ssr: false,
  //    }
  // );
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
      // старая заглушка, потом убрать
      // axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
      //     .then(response => {
      //         setPhotos([...photos, ...response.data])
      //         setCurrentPage(prevState => prevState + 1)
      //         //кол-во фото на сервере
      //         setTotalCount(response.headers['x-total-count'])
      //         //setTotalCount(33)
      //     })
      //     .catch((e) => console.log("error fetching data for grid: ", e))
      //     .finally(() => setFetching(false))
      console.log("fetching end", posts);
    }
  }, [fetching]);


  // сбрасываем посты и запрашивем новые если поменялся таргет фильтра
  useEffect(() => {
    setCountPhotoready(0)
    isRenderPhoto(false);
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

  console.log("photos: ", photos);

  return (
    // здесь запрос что первое фото сделано и можно отображать
<GridComponent isFirstPhotoLoaded={setCountPhotoready} array={[...photos]} />
// <SuspenseComponent array={[...photos]}></SuspenseComponent> 
    // TODO add Suspense
  );
}
