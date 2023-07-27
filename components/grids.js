
import {useEffect, useState} from "react";
import axios from "axios";
import GridComponent from "../components/grid-project/index"
import pb from "../utils/pb"

export default function Grids() {
  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(0)


  useEffect(() => {
        if (fetching) {

            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
                .then(response => {
                    setPhotos([...photos, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    //кол-во фото на сервере
                    setTotalCount(response.headers['x-total-count'])
                    //setTotalCount(33)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

  useEffect(() => {
        document.addEventListener('scroll', scrollHeandler)

        return function () {
            document.removeEventListener('scroll', scrollHeandler)
        }
    }, [photos.length])

  const scrollHeandler = (e) => {
        //проверка, что мы приближаемся к краю страницы
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && photos.length < totalCount
        ) {
            setFetching(true)
        }
    }

  console.log(photos)

  return (
    <div> <GridComponent array={[...photos]}/></div>
  )
}

