//'use client'
//export default function SliderServises() {
//  const images = [
//    "https://images.unsplash.com/photo-1510327073072-f898a7dbe0c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//    "https://images.unsplash.com/photo-1520961810802-7f0a32de665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1891&q=80",
//    "https://images.unsplash.com/photo-1520962246110-b8e85c98e3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
//    "https://images.unsplash.com/photo-1503389152951-9f343605f61e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1798&q=80",
//    "https://images.unsplash.com/photo-1529594350387-7d2b36e1d109?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
//  ];
//  if (typeof window !== "undefined") {
//    const slides = window?.document?.querySelectorAll(".slide");
//    //add backgroundImage to slides
//    for (var i = 0; i < slides.length; i++) {
//      slides[i].style.backgroundImage = `url(${images[i]})`;
//    }

//    for (const slide of slides) {
//      slide.addEventListener("click", () => {
//        clearActiveClasses();
//        slide.classList.add("active");
//      });
//    }

//    function clearActiveClasses() {
//      slides.forEach((slide) => slide.classList.remove("active"));
//    }
//  }

//  return (
//    <div className="container">
//      <div className="slide">
//        <h3>Flashlights</h3>
//      </div>
//      <div className="slide">
//        <h3>Indonesia</h3>
//      </div>
//      <div className="slide">
//        <h3>Sunset</h3>
//      </div>
//      <div className="slide active">
//        <h3>Mountains</h3>
//      </div>
//      <div className="slide">
//        <h3>City</h3>
//      </div>
//    </div>
//  );
//}
