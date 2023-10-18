import React from "react";
import Header from "../Header/Header";
import "./case-studies.scss";
import CardContent from "./CardContent";
import theOlympian from "./the-olympian.png";
import savingsJar from "./savings-jar.png";
import skhoSkho from "./skho-skho.png";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

// Define responsive settings for different screen sizes
const responsiveSettings = [
  {
    breakpoint: 1225, // Example breakpoint
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 820, // Another breakpoint
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const cardData = [
  {
    imageURL: theOlympian,
    title: "The Olympian",
    paragraph:
      "The only athlete in the world to do her Olympic routine in 2020.",
  },
  {
    imageURL: savingsJar,
    title: "The Savings Jar",
    paragraph: "Grow your savings treasure and grow your dragon.",
  },
  {
    imageURL: skhoSkho,
    title: "Skhokho seMali",
    paragraph:
      "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
  },
  {
    imageURL: theOlympian,
    title: "The Olympian",
    paragraph:
      "The only athlete in the world to do her Olympic routine in 2020.",
  },
  {
    imageURL: savingsJar,
    title: "The Savings Jar",
    paragraph: "Grow your savings treasure and grow your dragon.",
  },
  {
    imageURL: skhoSkho,
    title: "Skhokho seMali",
    paragraph:
      "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
  },
];

const CaseStudies = () => {
  return (
    <section>
      <Header paragraph="Case Studies" heading="" />
      <div className="card-carousel">
        <Slider {...settings} responsive={responsiveSettings}>
          {cardData.map((card, index) => (
            <CardContent key={index} {...card} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaseStudies;
