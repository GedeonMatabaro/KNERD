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
  const [playlistId, setPlaylistId] = useState("PLJR1V_NHIKrCkswPMULzQFHpYa57ZFGbs");
  const ListPlaylist = [
    "PLJR1V_NHIKrCkswPMULzQFHpYa57ZFGbs",
    "PLfVsf4Bjg79Cu5MYkyJ-u4SyQmMhFeC1C",
    "PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
    "PLSQl0a2vh4HCBmRZHT4JoGFFFRHDqnp2j",
    "PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-",
    "PLTxsP_8juQ3gEJn9GMggS-o_FBE7-LKnO",
    "PLFE2CE09D83EE3E28",
    "PLFD0EB975BA0CC1E0",
  ];
  

  const { ttl, link = null, linkTxt = "", coursesData, ID } = props;
  useEffect(() => {
    console.log("The playlist ID is now: ", playlistId);
  }, [playlistId]);

  function onVidSelect(id) {
    setPlaylistId(ListPlaylist[id-2]);
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
              id={item.id}
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

