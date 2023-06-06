import React from "react";
import { Link } from "react-router-dom";

import TAG1 from "../../../utils/Tags/TAG1/TAG1";
import Button1 from "../../../utils/Buttons/Button1/Button1";
import CircleButton from "../../../utils/Buttons/CircleButton/CircleButton";

import css from "./CourseCard.module.css";

import heartIcon from "/icons/heart.png";
const CourseCard = (props) => {
  const {
    path = "/",
    img = "",
    ttl = "",
    authDet = "",
    prc = 0,
    oldprc = 0,
    stars = {},
    noOfRats = 0,
    updatedDate = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "long",
    }).format(new Date()),
    courseDuration = 1000000,
    level = "Beginner Level",
    crsSubtxt = "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
  } = props?.data;
  const { key, data, onClick } = props;
  const extraCss = props.extraCss;

  let totalRating = (
    (1 * stars?.a + 2 * stars?.b + 3 * stars?.c + 4 * stars?.d + 5 * stars?.e) /
      stars?.a +
    stars?.b +
    stars?.c +
    stars?.d +
    stars?.e
  ).toFixed(2);

  let duration = new Date(courseDuration * 1000);
  let hours = duration.getUTCHours();
  let minutes = duration.getUTCMinutes();

  let durationInHrs =
    hours?.toString().padStart(2, "0") +
    "." +
    minutes?.toString().padStart(1, "0");

  let addToCartHandler = () => {
    alert("Added to cart");
  };
  let addToWishListHandler = () => {
    alert("Added to wish list");
  };

  return (
    <>
      <div className={css.outerDiv} id={props.id} style={extraCss} onClick={() => onClick(props.data.id + 1)}>
        <Link className={css.innerDiv} to={path}>
          <div className={css.imgBox}>
            <img src={img} alt="course thumbnail" className={css.courseImg} />
          </div>
          <div className={css.cardBdy}>
            <div className={css.ttl}>{ttl}</div>
            <div className={css.authDet}>{authDet}</div>
            <div className={css.stats}>
              <div className={css.rat1}>{totalRating}</div>
              <div className={css.rat2}>{totalRating}</div>
              <div className={css.noOfRats}>({noOfRats})</div>
            </div>
      
          </div>
        </Link>
        <div className={css.hovCard}>
          <div className={css.innerBox}>
            <div className={css.ttl}>{ttl}</div>
            <div className={css.shrtDet}>
              <div className={css.tags}>
                <TAG1 />
              </div>
              <div className={css.lstUpdt}>
                Updated <b>{updatedDate}</b>
              </div>
            </div>
            <div className={css.crseDet}>
              <div className={css.crseDetInerS}>
                {durationInHrs} total hours
              </div>
              <div className={css.crseDetInerM}>{level}</div>
              <div className={css.crseDetInerE}>Subtitles</div>
            </div>
            <div className={css.crsSubtxt}>{crsSubtxt}</div>
            <div className={css.btns}>
              <Button1
                onClick={addToCartHandler}
                txt="Add to cart"
                color="#fff"
                bck="#a435f0"
                hovBck="#8710d8"
                extraCss={{ width: "100%", border: "none" }}
              />
              <CircleButton onClick={addToWishListHandler} img={heartIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
