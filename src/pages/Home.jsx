import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import odishatour from "../image/Odisha-tour.jpg";
// import lingarajtemple from "../image/lingaraj.jpg";
// import odishatour1 from "../image/banner1.jpg";
// import odishatour2 from "../image/banner2.jpeg";
// import odishatour3 from "../image/banner3.jpeg";
// import odishatour4 from "../image/banner4.jpeg";
// import odishatour5 from "../image/banner5.jpeg";
// import guideimage from "../image/guide.png";
// import trust from "../image/NicePng_travel-logo-png_3200042.png";
// import travel from "../image/Travel-PNG-Image-HD.png";
// import travelhappy from "../image/clipart4216475.png";
// import Odishapng from "../image/OdishaTourism1.png";
// import Odishatourism from "../image/OdishaTourism.jpg";
// import Odishatourism2 from "../image/glimpses-of-odisha.jpg";
// import puri from "../image/puritemple.jpg";
// import ANUGUL from "../image/ANUGUL.jpg";
// import Balasore from "../image/Balasore.jpg";
// import Boudh from "../image/Boudh.jpg";
// import Balangir from "../image/Balangir.jpg";
// import sambalpur from "../image/Daringbadi.jpg";
// import Chandipur from "../image/Chandipur.jpg";
// import konark from "../image/konark.jpg";
// import bbsr from "../image/bhubaneswar-visit-place.jpg";
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import location from '../image/location.gif';
import review from '../image/Review.gif';
import owner from '../image/owner.gif';
// import doodleimage from '../image/doodles.png';
// import lingaraj from '../image/lingaraj1.jpg';
//import udaya1 from '../image/udaya1.jpg';
import { PulseLoader } from 'react-spinners';

// import LoginModal from './LoginModal';


const Home = () => {

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);





  // card  convert to background image
  const activate = (e) => {
    const sliderss = document.querySelector(".sliderss");
    const item1s = document.querySelectorAll(".item1");
    if (e.target.matches(".next")) sliderss.append(item1s[0]);
    if (e.target.matches(".prev")) sliderss.prepend(item1s[item1s.length - 1]);
  };


  // 


  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };





  // card slider

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };



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




  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
        <>
          {/* <LoginModal/> */}
          <>
            <button
              className={showButton ? "show" : ""}
              onClick={scrollToTop}
              id="button"
            >
            </button>
            {/* <section className="banner">
          <div className="banner-text-item">
            <div className="banner-heading">
              <h1>Explore The Beauty Of Odisha</h1>
            </div>
            <form className="form">
              <input
                type="text"
                list="mylist"
                placeholder="Where would you like to go?"
              />
              <datalist id="mylist">
                <option>London</option>
                <option>Canada</option>
                <option>Monaco</option>
                <option>France</option>
                <option>Japan</option>
                <option>Switzerland</option>
                <option>Seoul</option>
              </datalist>
              <input type="date" className="date" />
              <Link to="#" className="book">
                book
              </Link>
            </form>
          </div>
        </section> */}

            <div>
              <section id='carousel1'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={3000}>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={"https://upload.wikimedia.org/wikipedia/commons/c/ce/Falnir_skylines_viewed_from_Kankanady.jpg"} className="d-block w-100" style={{ height: '85vh', opacity: '999' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Kudlaa</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={"https://mediaim.expedia.com/destination/2/5c9ffef76cfa894a49e935b5b586f2f9.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={"https://live.staticflickr.com/2882/12136051855_d7850f4317_b.jpg"} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={"https://www.earthtrip.in/gallery/cityImage/1460111408_Puttur.jpg"} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={"https://www.trawell.in/admin/images/upload/547012373Moodabidri_Main.jpg"} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDoaVQsRAP_OOwHMvdYyDNdT-2prKfKj2A&s"} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
              </section>
            </div>

            <section id='carousel2' style={{ paddingTop: '40px' }}>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={3000}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ4rnG5JAavQwdKUQJjDEQy9yf9825_KFxQ&s" className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJi3dy9n5uIeKt6vBvqg1KkW6SaU0pfpYgA&s" className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-5bqRP0Stp0UvcXPiN8Q2vJCNH2d_oyPAA&s" className="d-block w-100" style={{ height: '28vh' }} alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRpwV3UNDNkPadgT82H1UZpJrWo9znM3kOA&s" className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQgSBnc8xRfZCNa6vaqrZJxsx06_BTiVmAQ&s" className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhvmA4KzIpL_kiEbe752xFek63Kwpz02UDg&s" className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </section>
          </>

          <>
            <div className="section-head text-center p-t80" >
              <h3 className='h3style' data-title="Travel With Us">Travel With Us</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container responiveheading" style={{ backgroundColor: '#fff' }}>
              <h3 class="head3 spacing secondary-color text-center text-uppercase p-t80"  >
                Travel With Us
              </h3>
              {/* <h2 class=" head2 spacing secondary-color text-center text-uppercase" style={{top:'150px', position:'relative' }} >
            Visit The Best Places Ever
          </h2> */}
            </div>
            <section className="py-4 services" style={{ backgroundColor: '#fff' }}>
              <div className="container">
                {/* <h1>Tourism</h1> */}
                <div className="">
                  <Slider {...settings1}>
                    <div className="m-1">
                      <div className="service-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq49GJfL-ntFhT9_cEyZytYO4tS-q4RnJPyg&s" alt='section2' />
                        {/* <h2>8000+ Our Local Guides</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2cdia1UBy2paWj4LqT4Pv95hrLzpUtuzGA&s" style={{ width: "120px" }} alt='section2' />
                        {/* <h2>100% Trusted Tour Agency</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSpF-ATKbyHD9niu7UfZj-5C1Job4b5HE5Q&s" style={{ width: "140px" }} alt='section2' />
                        {/* <h2>28+ Years of Travel Experience</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_L-PDb0bth_NwdEIgsm8u12pBoycRVwONA&s" alt='section2' />
                        {/* <h2>98% Our Travelers are Happy</h2> */}
                      </div>
                    </div>
                    
                    {/* <div className="m-1">
                  <div className="partner-list">
                    <img
                      src={homePage?.imagepath + items.image}
                      className="img-fluid"
                    />
                  </div>
                </div> */}
                  </Slider>


                </div>
              </div>
            </section>

          </>

          {/* card section */}

          <>
            <div className="section-head text-center p-t80">
              <h3 className='h3style' data-title=" Tourist Places">Top 8 Places</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container-fluid responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Top 8 Places
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Tourist Places
              </h2>
            </div>

            <main className="page-contents">
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Sahasralingeshwar Temple</h2>
                  <p className="copy">

                  </p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Puttur</h2>
                  
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Adyar Falls</h2>
                 
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Kudroli</h2>
                  
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Udupi</h2>
                 
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Pilikula</h2>
                 
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title"> Uppinangady</h2>
                 
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title"> Moodabidri</h2>
                  
                  <button className="btn">Trip Now</button>
                </div>
              </div>
            </main>
          </>
          <>
            {/* <section className="team-section1 bg-grey bd-bottom circle5 p-t80 shape padding">
              <div className="container">
                <Slide direction='down'>
                  <div className="section-heading text-center mb-40">
                    <h2>Meet Our Volunteers</h2>
                    <span className="heading-border" />
                    <p>Help today because tomorrow you may be the one who <br /> needs more helping!</p>
                  </div>
                </Slide>
                <div className="team-wrapper row">
                  <div className="col-lg-6 sm-padding">
                    <Slide direction='left'>
                      <div className="team-wrap row">
                        <div className="col-md-6">

                          <div className="team-details">
                            <img className='sideimg1' src={ANUGUL} alt="team" />
                            <div className="hover">
                              <h3>Jonathan Smith <span>Communicator</span></h3>
                            </div>
                          </div>

                        </div>
                        <div className="col-md-6">

                          <div className="team-details">
                            <img className='sideimg2' src={Balasore} alt="team" />
                            <div className="hover">
                              <h3>Angelina Rose <span>Certified Reader</span></h3>
                            </div>
                          </div>

                        </div>
                        <div className="col-md-6" >

                          <div className="team-details">
                            <img className='sideimg3' src={Boudh} alt="team" />
                            <div className="hover">
                              <h3>Taylor Swift <span>Event Creator</span></h3>
                            </div>
                          </div>

                        </div>
                        <div className="col-md-6">

                          <div className="team-details">
                            <img className='sideimg4' src={Balangir} alt="team" />
                            <div className="hover">
                              <h3>Michel Brown <span>Internet Specialist</span></h3>
                            </div>
                          </div>

                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div className="col-lg-6 sm-padding">
                    <Slide direction='right'>
                      <div className="team-content">
                        <h2>Become a Volunteer?</h2>
                        <h3 className='section5h3'>Join your hand with us for a better life and beautiful future.</h3>
                        <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can
                          make in the lives of the poor, the abused and the helpless.</p>
                        <ul className="check-list">
                          <li><i className="fa fa-check" />We are friendly to each other.</li>
                          <li><i className="fa fa-check" />If you join with us,We will give you free training.</li>
                          <li><i className="fa fa-check" />Its an opportunity to help poor children.</li>
                          <li><i className="fa fa-check" />No goal requirements.</li>
                          <li><i className="fa fa-check" />Joining is tottaly free. We dont need any money from you.
                          </li>
                        </ul>
                        <Link to="#" className="custom-btn btn-9 default-btn">Join With Us</Link>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </section>

          </>
          <> */}
            <div className="section-head text-center p-t80" style={{ paddingBottom: '30px' }}>
              <h3 className='h3style' data-title=" Most Demanded Places">Have A Glance</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container p-t80 responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Most Demanded Places
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Have A Glance
              </h2>
            </div>
            <div className="container first-section">
              <main className="section1">
                <ul className="sliderss">
                  <li className="item1 firstimg">
                    <div className="content1">
                      <h2 className="title"> Pilikula</h2>
                      <p className="description">
                        {" "}
                        Pilikula Nisargadhama is a popular eco-tourism and bio-diversity cultural park located in Mangalore, Karnataka, India. This integrated tourist destination spans over 400 acres and is known for its commitment to the conservation of flora and fauna, education and promotion of local culture.
                        {" "}
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  {/* Repeat the rest of the list items similarly */}
                  <li className="item1 fourthimg">
                    <div className="content1">
                      <h2 className="title"> Ullala Beach</h2>
                      <p className="description">
                        {" "}
                        <p> Ullal Beach is situated on the southwestern seaboard of the Indian sub-continent, adjacent to Ullal town, 10 km south of the city of Mangalore, Karnataka, India. Attractions are its picturesque stretch of Coconut trees, fishermen's lane, the ruined fort of Abbakka Devi and 16th century Jain temples. A resort is also situated nearby.[1]

The Dargah of Sayed Mohammed Shereful Madani, who is said to have come to Ullal from Madina 400 years ago, is a famous dargah located nearby</p>
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 thirdimg">
                    <div className="content1">
                      <h2 className="title">Mahalingeshwar Temple</h2>
                      <p className="description">
                        {" "}
                        Puttur Shree Mahalingeshwara Temple is a 12th-century temple, located in Puttur, Dakshina Kannada in the Indian state of Karnataka. Lord Shiva (popularly known as Puttur Mahalingeshwara) is the main deity.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 secondimg">
                    <div className="content1">
                      <h2 className="title">Adyar Hills</h2>
                      <p className="description">
                        These are the locations where religion, art, and rock-cut building abound. A pleasant location to take your family is the two hills, which rise sharply from the coastal plain and are divided by a highway around six kilometers west of Bhubaneswar.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 fivthimg">
                    <div className="content1">
                      <h2 className="title"> Gadaikal</h2>
                      <p className="description">
                      Jamalabad Fort is an old hilltop fortification in Killoor road, Belthangady, Dakshina Kannada District, Karnataka, India. It is located in the Kudremukh range of hills, 8 km north of Beltangady town and 65 km from the city of Mangalore. It is also referred locally as "Jamalabad Fort" or "Gadaikallu".

                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 sixthimg">
                    <div className="content1">
                      <h2 className="title">Shri Dharmastala Manjunatheshwara Temple</h2>
                      <p className="description">
                        {" "}
                        Dharmasthala is famous for its spirituality, history, and natural convergence, and holds a unique place in the hearts of all who visit. Its rich heritage, unwavering devotion at Sri Manjunatha Temple, and the fusion of cultures make it a gem in the crown of Karnataka.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                </ul>
                <nav className="navstyle">
                  <button className="custom-btn1 prev" onClick={activate}>
                    &#8249;
                  </button>
                  <button className="custom-btn1 next" onClick={activate}>
                    &#8250;
                  </button>
                </nav>
              </main>
            </div>
          </>

          <>


            {/* <section id="slideshow" >
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow">
                          <img src={Balasore} /></figure>
                        <figure class="shadow">
                          <img src={Chandipur} /></figure>
                        <figure class="shadow">
                          <img src={Boudh} /></figure>
                        <figure class="shadow">
                          <img src={sambalpur} /></figure>
                        <figure class="shadow">
                          <img src={puri} />
                          </figure>
                        <figure class="shadow">
                          <img src={Balangir} /></figure>
                        <figure class="shadow">
                          <img src={ANUGUL} /></figure>
                        <figure class="shadow">
                          <img src={konark} /></figure>
                        <figure class="shadow">
                          <img src={bbsr} /></figure>
                    </div>
                </div>
                
            </section> */}

            <div className="section-head text-center p-t80 " style={{ paddingBottom: '30px' }} >
              <h3 className='h3style' data-title=" Our Customer in Odisha"> Our Customer in Kudla</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div className="container p-t80 responiveheading" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
              {/* <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Art& Architectures of
              </h3> */}
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Our Customer in Kudla
              </h2>
            </div>
            <div className="container gap-5 " style={{ display: 'flex', position: 'absolute', zIndex: '5', height: '78vh', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="section-content doodle">
                <div className="newsletter-section text-center text-white">
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', width: '95vw', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='left'>
                        <div className="counter-box">
                          <img src={location} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt='section2' />
                          <div className="counting counter text-black fs-1 fw-bold  " data-count={30}>30</div>
                          <p className='text-black fs-5'>Locations</p>
                        </div>
                      </Slide>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='down'>
                        <div className="counter-box">
                          <img src={review} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt='section2' />
                          <div className="counting counter text-black fs-1 fw-bold" data-count={1400}>14000</div>
                          <h5 className='text-black'>Reviews</h5>
                        </div>
                      </Slide>
                    </div>

                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='right'>
                        <div className="counter-box">
                          <img src={owner} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt='section2' />
                          <div className="counting counter text-black fs-1 fw-bold" data-count={40000}>40,000</div>
                          <h5 className='text-black'>Visiters</h5>
                        </div>
                      </Slide>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="doodle">
              <css-doodle style={{ position: 'absolute', display: 'flex', alignItems: 'center', }} >
                <style dangerouslySetInnerHTML={{ __html: "\n  --color: #51eaea, #fffde1, #ff9d76, #FB3569;\n\n  @grid: 30x1 / 100% 78vh / #270f34; \n  \n  :container {\n    perspective: 30vmin;\n    --deg: @p(-180deg, 180deg);\n  }\n  \n  :after, :before {\n    content: '';\n    background: @p(--color); \n    @place: @r(100%) @r(100%);\n    @size: @r(6px);\n    @shape: heart;\n  }\n\n  @place: center;\n  @size: 18vmin; \n\n  box-shadow: @m2(0 0 50px @p(--color));\n  background: @m100(\n    radial-gradient(@p(--color) 50%, transparent 0) \n    @r(-20%, 120%) @r(-20%, 100%) / 1px 1px\n    no-repeat\n  );\n\n  will-change: transform, opacity;\n  animation: scale-up 26s linear infinite;\n  animation-delay: calc(-12s / @I * @i);\n\n  @keyframes scale-up {\n    0%, 95.01%, 100% {\n      transform: translateZ(0) rotate(0);\n      opacity: 0;\n    }\n    10% { \n      opacity: 1; \n    }\n    95% {\n      transform: \n        translateZ(35vmin) rotateZ(var(--deg));\n    }\n  }\n" }} />
              </css-doodle>
            </div>

            <div className='doodleimage'>

              {/* <div class="row" >
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


          
                  <div className="card  counter-box1">
                    <Slide direction='left'>
                      <img src={location} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold  " data-count={180}>180</div>
                        <p className='text-black fs-5'>Locations</p>
                      </div>
                    </Slide>
                  </div>


                </div>
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                  <div className="card  counter-box1">
                    <Slide direction='down'>
                      <img src={review} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={1400}>14000</div>
                        <h5 className='text-black'>Reviews</h5>
                      </div>
                    </Slide>
                  </div>


                </div>

                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                 
                  <div className="card  counter-box1">
                    <Slide direction='right'>
                      <img src={owner} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={40000}>40,000</div>
                        <h5 className='text-black'>Visiters</h5>
                      </div>
                    </Slide>
                  </div>


                </div>
              </div> */}

              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-90 " style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='left'>
                      <img src={location} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='right'>
                        <div className="counting counter text-black fs-1 fw-bold  text-center " data-count={30}>30</div>
                        <p className='text-black fs-5  text-center'>Locations</p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 " style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='right'>
                      <img src={review} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='left'>
                        <div className="counting counter text-black  text-center fs-1 fw-bold" data-count={1400}>14000</div>
                        <h5 className='text-black  text-center'>Reviews</h5>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90" style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='left'>
                      <img src={owner} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='right'>
                        <div className="counting counter text-black  text-center fs-1 fw-bold" data-count={40000}>40,000</div>
                        <h5 className='text-black text-center'>Visiters</h5>
                      </Slide>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </>
          <>
            <div className="section-head text-center  paddingchange">
              <h1 className='h3style' data-title="Most Loveble Places In Odisha">Most Loveble Places In Kudla</h1>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div className="container responiveheading  paddingchange" >
              <h2 class=" head2 spacing secondary-color text-center text-uppercase " style={{ paddingTop: "50px" }}>
                Most Loveble Places In Kudla
              </h2>
            </div>
            <div className='container'>
              <ul className="tabitem" id='tabitm'>
                <li className={activeTab === 0 ? 'actives' : ''} onClick={() => handleTabClick(0)} data-id="0">Polali Temple</li>
                <li className={activeTab === 1 ? 'actives' : ''} onClick={() => handleTabClick(1)} data-id="1">Kudroli Temple </li>
                <li className={activeTab === 2 ? 'actives' : ''} onClick={() => handleTabClick(2)} data-id="2">Gadaikal</li>
                <li className={activeTab === 3 ? 'actives' : ''} onClick={() => handleTabClick(3)} data-id="3">Adyar Falls</li>
              </ul>
              <ul className="tabitemresponsive" id='tabitmresponsive'>
                <Slide direction='left'>
                  <li className={activeTab === 0 ? 'actives' : ''} onClick={() => handleTabClick(0)} data-id="0">Polali</li>
                  <li className={activeTab === 1 ? 'actives' : ''} onClick={() => handleTabClick(1)} data-id="1">Kudroli </li>
                </Slide>
                <Slide direction='right'>
                  <li className={activeTab === 2 ? 'actives' : ''} onClick={() => handleTabClick(2)} data-id="2">Gadaikal</li>
                  <li className={activeTab === 3 ? 'actives' : ''} onClick={() => handleTabClick(3)} data-id="3">Adyar</li>
                </Slide>
              </ul>
            </div>
            <div className='container'>
              <div className="contentstyle">
                <div className={`box ${activeTab === 0 ? 'show' : 'hide'}`} data-content="0">
                  <div class="row">
                    <div class="col-md-6"><img src={"https://mangaloretourism.in/images/places-to-visit/header/polali-rajarajeshwari-temple-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg"} alt="" /></div>
                    <div class="col-md-6">   <div>
                      <h3>Polali Temple</h3>
                      <p>
                      Polali Rajarajeshwari Temple is a temple located in Polali, Dakshina Kannada district in Karnataka. The primary deity of the temple is Shri Rajarajeshwari. The temple was constructed in the 8th century AD by King Suratha and has been developed by many dynasties which ruled over the region. The idol of Sri Rajarajeshwari, another name/form of the divine Goddess Sri Lalita Tripurasundari, is completely moulded from clay with special medicinal properties. </p>
                      {/* <h3>HISTORY</h3>
                      <p>The temple was rebuilt by the King of the Eastern Ganga dynasty, Anantavarman Chodaganga, in the 10th century CE, as described by the Kendupatna copper-plate inscription of his descendant, Narasimhadeva II.
                        Its name is mentioned, conforming to the deity worshipped, as Srikshetra, Purusottama Dhāma, Purusottama Kshetra, Purusottama Puri and Jagannath Puri. Puri, however, is the popular usage. It is also known by the geographical features of its location as Shankhakshetra (the layout of the town is in the form of a conch shell), Neelāchala ("Blue mountain" a terminology used to name a very large sand lagoon over which the temple was built but this name is not in vogue), Neelāchalakshetra, Neelādri.
                      </p> */}
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 1 ? 'show' : 'hide'}`} data-content="1">
                  <div class="row">
                    <div class="col-md-6"> <img className='lin' src={"https://mangaloretourism.in/images/places-to-visit/header/kudroli-gokarnath-temple-gokarnanatheshwara-temple-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg"} alt="" /></div>
                    <div class="col-md-6"><div className='ll'>
                      <h3>Kudroli Temple</h3>
                      <p>
                      Kudroli was earlier Known as Kudre-halli where Tippu Sultan, the ruler of Mysore, army used to have Horses stables and grazing land, is one of the oldest and well-known localities of Mangalore City located on the Western Coastal belt of Karnataka, India . Since it is the oldest locality pre-dominated by Muslim inhabitants it has become an Islamic learning center of the city which also hosts various religious functions and the festivities. It is also a historic place as the ruler, Tippu Sultan has his fort just a couple of kilometers away known as Sultan Battery. Kudroli is also famous for Gokarnatheshwara Temple. </p>
                      {/* <h3>HISTORY</h3>
                      <p>The temple in its present form dates back to the last decade of the eleventh century. There is evidence that part of the temple was built during the sixth century CE as mentioned in some of the seventh century Sanskrit texts.[6] Fergusson believes that the temple might have been initiated by Lalat Indu Keshari who reigned from 615 to 657 CE. </p>
                      */}
                     <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 2 ? 'show' : 'hide'}`} data-content="2">
                  <div class="row">
                    <div class="col-md-6"><img src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6Fb29A8q7XcvQtrPsb69Wgj5upn7wjQp0g&s"
                    } alt="" /></div>
                    <div class="col-md-6">  <div>
                      <h3>Gadaikal</h3>
                      <p>
                      Gadaikallu, located in Belthangady taluk is one of the admired trekking locations in the district as it not only provides the trekker a wonderful climbing experience onto the hill but also exposes one to the nature’s boundless beauty. Gadaikallu is ...

</p>
                      {/* <h3>HISTORY</h3>
                      <p>The site at Udayagiri Caves was the patronage of Chandragupta II, who is widely accepted by scholars to have ruled the Gupta Empire in central India between c. 380-414 CE. The Udayagiri Caves were created in final decades of the 4th-century, and consecrated in 401 CE. This is based on three inscriptions.</p> */}

                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 3 ? 'show' : 'hide'}`} data-content="3">
                  <div class="row">
                    <div class="col-md-6"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmdN7ib4x2oEzBYzui7uWy1NkxR73ZvcOww&s"} alt="" /></div>
                    <div class="col-md-6"> <div>
                      <h3>Adyar Falls</h3>
                      <p>
                      Adyar is situated on the north bank of the Netravati River approximately 10km to the east of central Mangalore.

Adyar is north-west of the Pavoor Uliya island, which it is connected to via a footbridge. The footbridge is closed during monsoon season. Other local sites of interest include the Adyar Falls, a series of waterfalls </p>
                      {/* <h3>HISTORY</h3>
                      <p>
                        Konark, also referred to in Indian texts by the name Kainapara, was a significant trading port by the early centuries of the common era. The current Konark temple dates to the 13th century, though evidence suggests that a sun temple was built in the Konark area by at least the 9th century.
                      </p> */}
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default Home;