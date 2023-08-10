import useMediaQuery from "../../utils/useMediaQuery";
import BlockGrid from "./blockGrid";
// import getPhotoUrl from "../../utils/getPhotourl";
export default function GridComponent({ isFirstPhotoLoaded, array }) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  if (array.length < 1) {
    return;
  }

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
          <BlockGrid project={photo}></BlockGrid>
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
        {second.length > 1 && <div className="net_second">{second}</div>}
        {third.length > 1 && <div className="net_third">{third}</div>}
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
            <BlockGrid project={photo}></BlockGrid>
          </div>
        );
      })}
    </div>
  ) : (
    <div id="wrapper" className="wrapper">
      {net.map((item) => item)}
    </div>
  );
}
