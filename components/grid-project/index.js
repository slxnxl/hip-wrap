import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import useMediaQuery from "../../utils/useMediaQuery";
import BlockGrid from "./blockGrid";
import { LayoutGroup, motion, AnimatePresence, animate } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import MotionModal from "./tesModal";
// import getPhotoUrl from "../../utils/getPhotourl";
export default function GridComponent({ isFirstPhotoLoaded, array }) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [indexAnimate, setIndexAnimate] = useState(false);
  const [openProject, setOpenProject] = useState();
  
  const handleClose = useCallback(() => {
    setIndexAnimate(false);
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    console.log("indexAnimate", indexAnimate);
    console.log("net: ", net);
    setOpenProject(net.find((item) => item.id === indexAnimate));
    console.log("openProject", openProject);
    onOpen();
  }, [indexAnimate]);

  useEffect(() => {
    if (isOpen !== true) {
      setIndexAnimate(false);
    }
  }, [isOpen]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  //массив с 3мя рядами сетки
  let net = [];
  //1 ряд
  let first = [];
  //2й ряд
  let second = [];
  //3й ряд
  let third = [];

  // берем по 10 элементов из передаваемого массива и добавляем их в сетку, разделяя на 3 ряд/блока (по 3/4/3 элемента)

  for (let currentPage = 0; currentPage < array.length / 10; currentPage++) {
    const updatedArray = array
      .slice([currentPage * 10], [currentPage * 10 + 10])
      .map((item) => item);

    updatedArray.map((photo, index) => {
      // TODO улучшить функцию генерации url
      // const linkUmg = getPhotoUrl(photo)
      let item = (
        <div className="cell" key={index}>
          <BlockGrid
            project={photo}
            onOpen={onOpen}
            setIndexAnimate={setIndexAnimate}
            indexAnimate={indexAnimate}
          ></BlockGrid>
        </div>
      );

      if (index < 11) {
        if (index < 3) {
          first.push(item);
        }
        if (index > 2 && index < 7) {
          second.push(item);
        }

        if (index > 6) {
          third.push(item);
        }
      }
    });

    const foo = (
      <div className="net" key={currentPage}>
        <div className="net_first">{first}</div>
        {second.length > 0 && <div className="net_second">{second}</div>}
        {third.length > 0 && <div className="net_third">{third}</div>}
      </div>
    );

    net = [...net, foo];

    first = [];
    second = [];
    third = [];
  }

  return isMobile ? (
    <div className="wrapper">
      {array.map((photo, index) => {
        return (
          <div className="cell" key={index}>
            <BlockGrid isPhotoLoaded={123} project={photo}></BlockGrid>
          </div>
        );
      })}
    </div>
  ) : (
    <>
    <div id="wrapper" className="wrapper">
       {net.map((item) => item)}
    </div>
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay/>
    <ModalContent className="modal">
        <ModalHeader>
        </ModalHeader>
        <ModalCloseButton className="modal_close"/>
        <ModalBody>
        <Image
                          //layout="fill"
                          width="500px"
                          height="500px"
                          //onLoadingComplete={(e) => setLoad(true)}
                          objectFit="cover"
                          quality={100}
                          alt={"alt"}
                          priority
                          //fill={'true'}
                          // loading="lazy"
                          src={
                            "https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg"
                          }
                        ></Image>
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='purple' mr={3} onClick={onClose} className="modal_footer-btn">
                Отправить
            </Button>
        </ModalFooter>
    </ModalContent>
</Modal>
</>
    //<LayoutGroup>
    //  <div id="wrapper" className="wrapper">
    //    {net.map((item) => item)}
    //    <AnimatePresence>
    //      {indexAnimate !== false && (
    //          <Box as={motion.div}  className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} w="500px"
    //          h="500px" key="modal">
    //                  <Box
    //                  className="modal-content"
    //                    as={motion.div}
    //                    layoutId={`${indexAnimate}`}
    //                    w="500px"
    //          h="500px"
    //                  >
    //                    <Image
    //                      //layout="fill"
    //                      width="500px"
    //                      height="500px"
    //                      //onLoadingComplete={(e) => setLoad(true)}
    //                      objectFit="cover"
    //                      quality={100}
    //                      alt={"alt"}
    //                      priority
    //                      //fill={'true'}
    //                      // loading="lazy"
    //                      src={
    //                        "https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg"
    //                      }
    //                    ></Image>
    //                  </Box>
    //          </Box>
    //      )}
    //    </AnimatePresence>
    //  </div>
    //</LayoutGroup>
  );
}
