'use client'

import React, { useState, useEffect, useRef } from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.module.scss";
import Modal from 'react-modal';
import styles from './index.module.scss';

import dynamic from 'next/dynamic';


const testimonials = [
  {
    type: 'double',
    logo: "assets/svg/logo.svg",
    testimonial: '&quotLorem Ipsum is simply dummy text of the printing and typesetting industry.&quot',
    people: [
      {
        id: 'sven',
        name: 'Sven Laure',
        position: 'Head of Marketing Systems & E-Commerce',
        image: "/assets/images/client-profile-pics/sven-stihl-photo.png",
      },
      {
        id: 'vanessa',
        name: 'Vanessa Spall',
        position: 'Analista de E-commerce',
        image: "/assets/images/client-profile-pics/vanessa-stihl.png",
      }
    ],
    video: {
      horizontal: "/assets/videos/depoimentos/sven-vanessa.mp4",
      vertical: "/assets/videos/depoimentos/sven-vanessa.mp4"
    }
  },
  {
    type: 'double',
    logo: "/assets/svg/logo-jb.svg",
    testimonial: '&quotLorem Ipsum is simply dummy text of the printing and typesetting industry.&quot',
    people: [
      {
        id: 'ezequiel',
        name: 'Ezequiel Fisher',
        position: 'Coordenador de TI',
        image: "/assets/images/client-profile-pics/ezequiel-jb-photo.png",
      },
      {
        id: 'djenifer',
        name: 'Djenifer',
        position: 'Coordenadora de E-commerce',
        image: "/assets/images/client-profile-pics/djenifer-jb.png",
      }
    ],
    video: {
      horizontal: "/assets/videos/depoimentos/depoimento-jb.mp4",
      vertical: "/assets/videos/depoimentos/depoimento-jb.mp4"
    }
  },
  {
    type: 'single',
    name: 'Alan Rosanelli',
    position: 'Gerente de Omnicanalidade da Bibi',
    image: "/assets/images/client-profile-pics/alan-bibi-photo.png",
    testimonial: '&quotDe 22 pra 23, <span>a gente cresceu mais de 100%</span> e isso é muito fruto desse trabalho feito a quatro mãos junto com a Wecode.&quot',
    video: {
      horizontal: "/assets/videos/depoimentos/alan-bibi-depoimento.mp4",
      vertical: "/assets/videos/depoimentos/alan-bibi-depoimento.mp4",
    }
  },
  {
    type: 'single',
    name: 'Priscila',
    position: 'Supervisora de E-commerce da Anselmi',
    image: "/assets/images/client-profile-pics/priscila-anselmi-photo.png",
    testimonial: '&quotCom certeza, o que a gente está colhendo hoje no nosso e-commerce é muito <span>fruto do que a Wecode fez pela gente</span>.&quot',
    video: {
      horizontal: "/assets/videos/depoimentos/priscila-anselmi-depoimento.mp4",
      vertical: "/assets/videos/depoimentos/priscila-anselmi-depoimento.mp4",
    }
  },
  {
    type: 'single',
    name: 'Liliam Mantovani',
    position: 'Gerente de Marketing da Keko',
    image: "/assets/images/client-profile-pics/liliam-keko-photo.png",
    testimonial: '&quotUma das coisas que eu mais gosto na Wecode é que eu acho que <span>eu nunca ouvi um não</span>.&quot',
    video: {
      horizontal: "/assets/videos/depoimentos/liliam-keko-depoimento.mp4",
      vertical: "/assets/videos/depoimentos/liliam-keko-depoimento.mp4",
    }
  },
  {
    type: 'single',
    name: 'Felipe Farina',
    position: 'Gerente de E-commerce da Carraro',
    image: "/assets/images/client-profile-pics/felipe-carraro-photo.png",
    testimonial: '&quotEles nos ajudaram bastante no processo, desde o início. E seguem nos ajudando ainda hoje na parte de <span>melhorias e novos recursos</span> para ter, cada vez mais, uma <span>navegação melhor</span> do nosso consumidor.&quot',
    video: {
      horizontal: "/assets/videos/depoimentos/felipe-carraro-horizontal.mp4",
      vertical: "/assets/videos/depoimentos/felipe-carraro-vertical.mp4",
    }
  },
  {
    type: 'single',
    name: 'Giuliano Bettanin',
    position: 'Gestor dos Canais Digitais da InBetta',
    image: "/assets/images/client-profile-pics/giuliano-inbetta.png",
    testimonial: '&quotA gente tem uma atenção especial, consegue conversar com os funcionários, tem uma <span>abertura</span> muito boa. Diria que temos um contato mais recorrente. Eles passam muita segurança no que falam e <span>é um parceiro que a gente pode contar</span>.&quot',
    video: {
      horizontal: "/assets/videos/depoimentos/giuliano-bettanin-horizontal.mp4",
      vertical: "/assets/videos/depoimentos/giuliano-bettanin-vertical.mp4",
    }
  },
  {
    type: 'single',
    name: 'Sven Laure',
    position: 'Head of Marketing Systems & E-Commerce',
    image: "/assets/images/client-profile-pics/sven-stihl-photo.png",
    testimonial: '&quotAtrás da Wecode, há um <span>grande time</span> de pessoas excelentes que, em todos os momentos, com muito entusiasmo, <span>abraçaram esse projeto</span> e deram o máximo para fazer ele acontecer.&quot',
    video: {
      horizontal: "/assets/videos/depoimentos/sven-vanessa-stihl.mp4",
      vertical: "/assets/videos/depoimentos/sven-vanessa-stihl.mp4",
    }
  },
  {
    type: 'single',
    name: 'Ezequiel Fischer',
    position: 'Coordenador de TI',
    image: "/assets/images/client-profile-pics/ezequiel-jb-photo.png",
    testimonial: '&quotA Wecode tem uma preocupação não só com a entrega do projeto, <span>mas com a empresa</span>.&quot',
    video: {
      horizontal: "/assets/videos/depoimentos/ezequiel-jorgebischoff.mp4",
      vertical: "/assets/videos/depoimentos/ezequiel-jorgebischoff.mp4",
    }
  },
];

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export const TestimonialSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  const openModal = (index) => {
    setCurrentVideoIndex(index);
    const videoUrl = isMobile
      ? testimonials[index].video.vertical
      : testimonials[index].video.horizontal;
    setVideoSrc(videoUrl);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    sliderRef.current.slickGoTo(currentVideoIndex);
    setVideoSrc('');
  }

  const handlePrevious = () => {
    const newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : testimonials.length - 1;
    setCurrentVideoIndex(newIndex);
    const videoUrl = isMobile
      ? testimonials[newIndex].video.vertical
      : testimonials[newIndex].video.horizontal;
    setVideoSrc(videoUrl);
  };

  const handleNext = () => {
    const newIndex = (currentVideoIndex + 1) % testimonials.length;
    setCurrentVideoIndex(newIndex);
    const videoUrl = isMobile
      ? testimonials[newIndex].video.vertical
      : testimonials[newIndex].video.horizontal;
    setVideoSrc(videoUrl);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: '20px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1.02,
          centerMode: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className={styles.testimonyMainContainer}>
      <div className={styles.testimonyTitlesContainer}>
        <h2 className={styles.testimonyTitle}>Depoimentos</h2>
        <h3 className={styles.testimonySubtitle}>Quem confia no nosso trabalho e atesta nossa qualidade</h3>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          testimonial.type === 'double' ? (
            <div key={index} className={styles.testimonialSlide}>
              <div className={styles.testimonialSlide}>
                {testimonial.logo && (
                  <div className={styles.testimonialCompanyLogo}>
                    <img src={testimonial.logo} alt="Logo da empresa" className={styles.testimonialLogo} />
                  </div>
                )}
                <div className={styles.testimonialDoublePeople}>
                  <div className={styles.testimonialImagesDouble}>
                    {testimonial.people?.map((person, i) => (
                      <div key={i} className={`testimonialProfile${person.id}`}>
                        <img src={person.image} alt={person.name} className={styles.testimonialPositions} />
                      </div>
                    ))}
                    <div className={styles.testimonialNamesDouble}>
                      {testimonial.people?.reduce<React.ReactNode[]>((acc, person, i) => {
                        if (i > 0) {
                          acc.push(<span key={`e-${i}`} className={styles.testimonialAnd}> e </span>);
                        }
                        acc.push(
                          <h3 key={i} className={`testimonialName testimonial${person.id.toLowerCase()}`}>{person.name}</h3>
                        );
                        return acc;
                      }, [])}

                      <div className={styles.testimonialPositions}>
                        {testimonial.people?.map((person, i) => (
                          <React.Fragment key={i}>
                            <p className={`testimonialPosition testimonial${person.id.toLowerCase()}`}>
                              {person.position}
                            </p>
                            {i === 0 && testimonial.people.length > 1 && <span className={styles.separator}>|</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                <div className={styles.testimonialDescription}>
                  <p
                    className={styles.testimonialDescriptionContent}
                    dangerouslySetInnerHTML={{ __html: testimonial.testimonial }}
                  />
                </div>
                <div className={styles.testimonialVideo}>
                  <button onClick={() => openModal(index)} className={styles.testimonialButtonVideo}>
                    Assistir depoimento <img src="/assets/svg/play.svg" className={styles.testiomonialVideoArrow} />
                  </button>
                </div>
              </div>
            </div>

          ) : (

            <div key={index} className={styles.testimonialSlide}>
              <div className={styles.testimonialContent}>
                <div className={styles.testimonialProfile}>
                  <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />
                  <div className={styles.testimonialNamePosition}>
                    <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                    <p className={styles.testimonialPosition}>{testimonial.position}</p>
                  </div>
                </div>
                <div className={styles.testimonialDesciption}>
                  <p className={styles.testimonialDescriptionContent} dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
                </div>
                <div className={styles.testimonialVideo}>
                  <button onClick={() => openModal(index)} className={styles.testimonialButtonVideo}>
                    Assistir depoimento <img src="/assets/svg/play.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </Slider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Vídeo do Depoimento"
      >
        <div
          className={styles.modalContentInner}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeModal} className={styles.modalCloseButton}><img src="/assets/svg/fechar-modal.svg" alt="" /></button>
          <div className="modal-navigation">
            <button onClick={handlePrevious} className={styles.modalArrowLeft}>
              <img src="/assets/svg/left-arrow.svg" alt="" />
            </button>
            <iframe
              src={videoSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Depoimento em Vídeo"
            ></iframe>
            <button onClick={handleNext} className={styles.modalArrowRight}><img src="/assets/svg/right-arrow.svg" alt="" /></button>
          </div>
        </div>
      </Modal>
    </div>
  );
};


export default TestimonialSlider;