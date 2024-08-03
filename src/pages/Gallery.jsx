import React, { useState, useEffect } from "react";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
// import gallary1 from '../image/Gallrey1.jpg'
// import gallary2 from '../image/Gallery2.jpg'
// import gallary3 from '../image/Gallery3.jpg'
// import gallary4 from '../image/Gallery4.jpg'
// import gallary5 from '../image/Gallery5.jpg'
// import gallary6 from '../image/Gallery6.jpg'
// import gallary7 from '../image/Gallery7.jpg'
// import gallary8 from '../image/Gallery8.jpg'
// import gallary9 from '../image/Gallery9.webp'
// import gallary10 from '../image/Gallery10.jpg'
// import gallary11 from '../image/Gallery11.jpg'
// import gallary12 from '../image/Gallery12.jpg'
// import gallary13 from '../image/Gallery13.jpg'
// import gallary14 from '../image/Gallery14.jpg'
// import gallary15 from '../image/Gallery15.jpg'
// import gallary16 from '../image/Gallery16.jpg'
// import gallary17 from '../image/Gallery17.jpg'
// import k1 from '../image/k1.jpg'
// import k2 from '../image/k2.jpg'
// import k3 from '../image/k3.jpg'
// import k4 from '../image/k4.jpg'
// import k5 from '../image/k5.jpg'
// import k6 from '../image/k6.jpg'
// import k7 from '../image/k7.jpg'
// import k8 from '../image/k8.jpg'
// import k9 from '../image/k9.jpg'
// import galle13 from '../image/galle13.jpg'
//import logo from '../image/gallerylogo.png';
// image import 
//import image from '../image/puritemple.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { PulseLoader } from "react-spinners";
// import ParticleCanvas from "../component/ParticleCanvas";

const Gallery = () => {




  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000); 
  }, []);



  return (
    <div>
         {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
      <>
      <>


      <button
      className={showButton ? "show" : ""}
      onClick={scrollToTop}
      id="button"
    >
    </button>

 <div className="linearbackground" id="galleryherosection">
  <div className="container " >
  <div className="hero p-t40">
  <Slide direction='left'>
  <h1 className="heading">The View Of Incrediable<br />Kudla</h1>
</Slide>
  <div className="grid__container">
    <div className="grid__item one" />
    <div className="grid__item two" />
    <div className="grid__item three" />
    <div className="grid__item four" />
    <div className="grid__item five" />
    <div className="grid__item six" />
    <div className="grid__item seven" />
    <div className="grid__item eight" />
    <div className="grid__item nine" />
    <div className="grid__item ten" />
    <div className="grid__item eleven" />
    <div className="grid__item twelve" />
  </div>
</div>
</div>
</div>

<section className="banner1 linearbackground1">
          <div className="banner-text-item">
            <Slide direction='down'>
            <div className="banner-heading ">
            <h1>The View of Incrediable Kudla</h1>
            </div>
            </Slide>
            <Slide direction='up'>
            <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <div className="col-md-6 " id="lordjagannatheyes" style={{textAlign:'end'}}>
                  <img className="gallery-item1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfG_Ui6GHU7t136kk_UyJ_vc3i9J0JXkwEQ&s" alt='gallery'></img>
                </div>
                <div className="col-md-6" id="lordjagannatheyes" style={{textAlign:'start'}}>
                <img className="gallery-item2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6biWRc3G_P7t5wnnjEVT96kT9S-KeKv_SD6I1OetZA&s" alt='gallery'></img>
                </div>
               </div>
              </Slide>
          </div>
        </section>
             
 

      </>
        <>
      <div className="section-wrapper p-t80">
          <div className="container">
            <h1 className="head2 text-center">Tourism Photo of Kudla</h1>
            <div className="gallery-container" id="gallery-container">
              <LightGallery
                speed={200}
                plugins={[ lgThumbnail, lgZoom, lgShare, lgRotate, lgVideo, lgAutoplay, ]} >
                
                    <a
                      
                      data-lg-size="1400-1400"
                     className="gallery-item  "
                      data-src="https://www.holidify.com/images/bgImages/MANGALORE.jpg"
                      data-sub-html="<h4>Deomali</h4>"
                    >
                      <img
                         className="img-fluid"
                        src="https://www.holidify.com/images/bgImages/MANGALORE.jpg"
                        alt='gallery'
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjtBd4oLxi01unkG_IwYGRYD1jRyQGEYz1A&s"
                      data-sub-html="<h4>Konark</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjtBd4oLxi01unkG_IwYGRYD1jRyQGEYz1A&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl08wQ0ZinGkG7VXXr6tfzy2HZfZF5EkeI7A&s"
                      data-sub-html="<h4>Budha</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl08wQ0ZinGkG7VXXr6tfzy2HZfZF5EkeI7A&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_BeTswFO2q5ITAYkbKXPPXgJXBwEIPBCng&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_BeTswFO2q5ITAYkbKXPPXgJXBwEIPBCng&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CD3Ty9TqMJOPwqwhZ19hX9iFySZGG4LIsg&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CD3Ty9TqMJOPwqwhZ19hX9iFySZGG4LIsg&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V8jg0w1qhRMycNcDhyA4LOS_EQnTI5XMJg&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V8jg0w1qhRMycNcDhyA4LOS_EQnTI5XMJg&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAMUkGTn2Zajl-m3zLKwJ9dQSF84_P-fg0Q&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAMUkGTn2Zajl-m3zLKwJ9dQSF84_P-fg0Q&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoF-RR5VuPHe7FLNW1h2rvaElJy5yymTdCQ&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoF-RR5VuPHe7FLNW1h2rvaElJy5yymTdCQ&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCl86zHv9l6MDKQ5JEcIN1kWj-qgJLnuySw&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCl86zHv9l6MDKQ5JEcIN1kWj-qgJLnuySw&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa147AjTRY2kLPR0IAODPdrtlKAaMlBvZqUw&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa147AjTRY2kLPR0IAODPdrtlKAaMlBvZqUw&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRm6zRkcf1UPypevORCuncrOw-yDmUuDopg&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRm6zRkcf1UPypevORCuncrOw-yDmUuDopg&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PbxeE5HsuhOgg1C5cFvHPrvgnojGtm5rhA&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PbxeE5HsuhOgg1C5cFvHPrvgnojGtm5rhA&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUpOEeMNe02J0NOLkZho4lLWysdYBWzoqDg&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUpOEeMNe02J0NOLkZho4lLWysdYBWzoqDg&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdGFgt_ZX1ixaXJmr7pJ9IeBsVcaqKmHk5A&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdGFgt_ZX1ixaXJmr7pJ9IeBsVcaqKmHk5A&s"
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Jezx0d0Slpc0f-DUOTxJEkMDzRJFhxA4Ag&s"
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Jezx0d0Slpc0f-DUOTxJEkMDzRJFhxA4Ag&s"
                        alt=""
                      />
                    </a>

              </LightGallery>
            </div>
          </div>
         </div>
      </>
      <>
      <div className='container-fluid'>
              <div
                className="section-full p-t80 p-b80 bg-gray section8"
                id="services"
              >
                {/* <div className="container"> */}
                {/* TITLE START*/}
                
                <div className="section-head text-center p-t80  ">
              <h3 className='h3' data-title="BEAUTY">MOST POPULAR PHOTO'S OF 2K24</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
                {/* TITLE END*/}
                <div className="section-content " id="header" style={{position:'sticky'}}>
                  <div className="row justify-content-center ">
                    <div classname="swiper-wrapper d-flex align-items-center">
                      <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        loop={true}
                        // centeredSlides={true}
                        slidesPerView={"4"}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        // pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                        autoplay={{
                          // Add autoplay configuration
                          delay: 1000, // Delay in milliseconds
                          disableOnInteraction: false, // Autoplay continues even when the user interacts with it
                        }}
                        speed={1000} // Set the speed in milliseconds
                      >
                        
                        <SwiperSlide>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlHe1Vel0SJ3ato5AX2x0PwNGcXPYq6Fyfw&s" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            City
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBHNfwJ8-N0gUpZNdk59DMlmiLeiCsL8JVQ&s" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           Someshwar beach
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://mangaloretourism.in/images/places-to-visit/header/polali-rajarajeshwari-temple-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                          Polali Temple
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRut4x-BUTQuZoPca7j1q11hfmWeUSAgUiSOA&s" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           Panambur Beach 
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0dqJec4WKgNgrhJ_oMfjlLigm4yEIXcotQ&s" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Gadaikal
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwfhAwSOS3nv0u3SGAXvs8joqeHFL3VVkoA&s" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                        >
                           Adyar Falls
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTFB2J3Z9DyFDgi6an7YOuBya7evDZ2pLIg&s" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           Adyar Hills
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-talLfZqdDUzAbn0p_CPrOFW46Kd7IPZ2g&s" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Adyar Garden
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Dasara_Navaratri_decorations_Kudroli_Temple_Mangalore_Karnataka.jpg" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                          Kudroli Temple
                          </h5>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                          <img src="https://assets.cntraveller.in/photos/60ba11b91fa22668f0259cb1/4:3/w_1600,h_1200,c_limit/Mangalore-food-spread-at-new-taj-mahal-cafe.jpg" height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Famolus Food
                          </h5>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                </div>
              </div>
    </>
    </>
  )}
    </div>
  )
}

export default Gallery