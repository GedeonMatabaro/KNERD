// import React from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import PlaylistComponent from '../../videoplayer/videoplayer';
// import backIcon from "/icons/back.png";
// import nextIcon from "/icons/next.png";

// import CourseCard from "../../Cards/CourseCard/CourseCard";

// import ArrowsComp from "../ArrowComp/ArrowsComp";

// import css from "./CourseCarouselComp.module.css";


// const CourseCarouselComp = ( props) => {
//   const ListPlaylist = [
//     'PLJR1V_NHIKrCkswPMULzQFHpYa57ZFGbs', 
//     'PLfVsf4Bjg79Cu5MYkyJ-u4SyQmMhFeC1C', 
//     'PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR', 
//     'PLSQl0a2vh4HCBmRZHT4JoGFFFRHDqnp2j', 
//     'PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-', 
//     'PLTxsP_8juQ3gEJn9GMggS-o_FBE7-LKnO', 
//     'PLFE2CE09D83EE3E28',
//     'PLFD0EB975BA0CC1E0'
// ];
//   let PlaylistId ="";
//   const { ttl, link = null, linkTxt = "", coursesData } = props;
//   function onVidSelect(id) {
//     // PlaylistId = ListPlaylist[(id-1)];
//     PlaylistId = ListPlaylist[1];
//     console.log("The playlist Id is "+ PlaylistId);
//   }
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 6,
//     initialSlide: 0,
//     lazyLoad: true,
//     nextArrow: <ArrowsComp img={nextIcon} />,
//     prevArrow: <ArrowsComp img={backIcon} />,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className={css.scrollBox}>
//       {ttl ? (
//         <h2 className={css.ttl}>
//           {ttl}
//           <Link className={css.linkTxt} to={link}>
//             {linkTxt}
//           </Link>
//         </h2>
//       ) : null}
//       <Slider {...settings}>
//         {coursesData.map((item) => {
//           return <CourseCard key={item.id} data={item} onClick={(VidId) => onVidSelect(VidId)}/>;
//         })}
//       </Slider>
//       <PlaylistComponent playlistId={PlaylistId} />

//     </div>
//   );
// };

// export default CourseCarouselComp;


import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PlaylistComponent from "../../videoplayer/videoplayer";
import backIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";
import CourseCard from "../../Cards/CourseCard/CourseCard";
import ArrowsComp from "../ArrowComp/ArrowsComp";
import css from "./CourseCarouselComp.module.css";
// import { ListPlaylist } from "../../../fakedata/coursedata";

const CourseCarouselComp = (props) => {
  
  const ListPlaylist = [
    "PLJR1V_NHIKrCkswPMULzQFHpYa57ZFGbs",
    "PLfVsf4Bjg79Cu5MYkyJ-u4SyQmMhFeC1C",
    "PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
    "PLSQl0a2vh4HCBmRZHT4JoGFFFRHDqnp2j",
    "PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-",
    "PLFE2CE09D83EE3E28",
    "PLTxsP_8juQ3gEJn9GMggS-o_FBE7-LKnO",
    "PLFD0EB975BA0CC1E0",
    'PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y',
    'PLBlnK6fEyqRiteqwlMLXYtZ16xXDR7MO0',
    'PLWF9TXck7O_zuU2_BVUTrmGMCXYSYzjku',
    'PL_pbwdIyffsnH3XJb66FDIHh1yHwWC26I',
    'PL43pGnjiVwgTJg7uz8KUGdXRdGKE0W_jN',
    'PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d',
    'PLwqQI-ekEAiOJV42m_nPzPmusgIZ3zpLs',
    'PL83DF21B47327EDFE',
    'PLEAWiihj06OL80BfkpXVh2AQ-AYe04xiU',
    'PLEAWiihj06OI0eRuuTfLoUp432CnoTXWW',
    'PLJlkW8-_IGv5_IzERoeoM1_jg_fp-LAEz',
    'PLOGi5-fAu8bFvyS3XtmQb2B-Mg4N_Eq4U',
    'PLH2l6uzC4UEVY8arV3ExtMVamFxTzMtZ4',
    'PLF6C0319C607DEDC1',
    'PLoROMvodv4rNGcjhuCmfd5rPK8goWlvVO',
    'PLcB3trehXswjMw_Wpxn_8BGAD-vN9DVgw',
    'PLcB3trehXswjEL1qzEvCY82J0tVUQwE0P',
    'PLJih2jDlx9unoEWbo6xondBcFfQST4-IP',
    'PLknl_sdZbsSnsLSsP1HKtORDYWoDJi5jZ',
    'PL8L1h-mVxwOrTbAtjHose8MuuzqkYtp7G'

  ];
  const { ttl, link = null, linkTxt = "", coursesData, ID } = props;
  const [playlistId, setPlaylistId] = useState(ListPlaylist[coursesData[0].id]);
  // const [playlistId, setPlaylistId] = useState('PLknl_sdZbsSnsLSsP1HKtORDYWoDJi5jZ');

  
  useEffect(() => {
    console.log("The playlist ID is now: ", playlistId);
  }, [playlistId]);

  function onVidSelect(id) {
    setPlaylistId(ListPlaylist[id-2]);
    console.log("The playlist ID is now on : ", playlistId);
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    initialSlide: 0,
    lazyLoad: true,
    nextArrow: <ArrowsComp img={nextIcon} />,
    prevArrow: <ArrowsComp img={backIcon} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  };
  return (
    <div className={css.scrollBox}>
      {ttl ? (
        <h2 className={css.ttl}>
          {ttl}
          <Link className={css.linkTxt} to={link}>
            {linkTxt}
          </Link>
        </h2>
      ) : null}
      <Slider {...settings}>
        {coursesData.map((item) => {
          return (
            <CourseCard
              id={item.id+ID}
              data={item}
              onClick={(VidId) => onVidSelect(VidId)}
            />
          );
        })}
      </Slider>
      <PlaylistComponent playlistId={playlistId} ID={ID} />
    </div>
  );
};

export default CourseCarouselComp;

