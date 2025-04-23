import React, { useEffect } from "react";
import "../styles/body.css";

import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import { FaLeaf } from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

function Body() {
  const cardData = [
    {
      id: 1,
      title: "Sustainability",
      imgUrl:
        "https://images.pexels.com/photos/7242744/pexels-photo-7242744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Mar 2025",
      header: "Green digital products",
      desc: "Simple ways companies are reducing the environmental impact of their websites and apps."
    },
    {
      id: 2,
      title: "Guide",
      imgUrl:
        "https://images.pexels.com/photos/219835/pexels-photo-219835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Apr 2025",
      header: "Nature inspired UI design",
      desc: "How natural patterns are creating more intuitive and user - friendly interfaces across digital products."
    },
    {
      id: 1,
      title: "color theory",
      imgUrl:
        "https://images.pexels.com/photos/18069363/pexels-photo-18069363/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-help-understand-ecosystems-and-identify-species-it-was-created-by-nidia-dias-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Feb 2025",
      header: "Earth tones in design",
      desc: "Using natural color patterns to create calming digital experiences that improve user wellbeing."
    }
  ];

  const goalCardData = [
    {
      id: 1,
      icon: <IoIosColorPalette />,
      header: "Design Systems & Strategies",
      desc: "Explore innovative tools, frameworks, and design methods that drive both productivity and eco-conscious solutions."
    },
    { 
      id: 2,
      icon: <IoIosColorPalette />,
      header: "Resource & Community Network",
      desc: "Gain access to a handpicked network of resources, communities, and events centered around sustainable design practices."
    },
    {
      id: 3,
      icon: <FaLeaf />,
      header: "Green Tools & Sustainable Assets",
      desc: "Uncover eco-friendly design tools and assets that support environmentally responsible creative workflows."
    },
    {
      id: 4,
      icon: <LiaMoneyBillWaveSolid />,
      header: "Sustainability in Action",
      desc: "Discover real-life examples of top brands embedding sustainability into their design processes and products."
    }
  ];

  const testimonialCards = [
    {
      id: 1,
      rating: 5,
      comment:
        "this newsletter had completely transformed how i approach design projects. i now consider environmental impact in every decision i make",
      name: "Marcus johnson",
      occupation: "product designer at greenTech"
    },
    {
      id: 2,
      rating: 5,
      comment:
        "nigeria newsletter has completely changed how i approach sustainable design, the biomimicry techniques i learned have become core to my creative process",
      name: "sophia rodriguez",
      occupation: "ux designer earth wise design studio"
    },
    {
      id: 3,
      rating: 5,
      comment:
        "as a developer focused on reducing digital carbon footprints, the eco-tech insights from econest have been invaluable. their frameworks helped us cut our site's emission 40%",
      name: "daniel kim",
      occupation: "frontend developer, sustain tech solutions"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: true // animation should happen only once
    });
  }, []);

  return (
    <div className="bodyWrapper">
      <div className="insight" >
        <div className="insight-article">
          <div className="article1">
            <p className="insight-header">Latest insight</p>

            <h1>Sustainable Articles</h1>
            <p className="insight-text">
              Practical articles to help you create environmentally conscious
              designs.
            </p>
          </div>
          <div className="article2">
            <button type="button"> 
              View all articles <GoArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="cardWrapper">
        {cardData.map((x) => {
          const { id, title, imgUrl, date, header, desc } = x;
          return (
            <div className="card" id={id}>
              <div className="card-imageWrapper">
                <div className="card-title">
                  <p>{title}</p>
                </div>
                <img loading="lazy" src={imgUrl} alt="" />
              </div>
              <div className="card-date">
                <HiMiniCalendarDateRange />
                <p>{date}</p>
              </div>
              <div className=" card-header">{header}</div>
              <div className="card-desc">{desc}</div>

              <a href="#">
                Read more <GoArrowRight />
              </a>
            </div>
          );
        })}
      </div>

      <div className="insight">
        <div className="insight-article">
          <div className="article1">
            <p className="insight-header">Our Goals</p>

            <h1>Design with purpose</h1>
            <p className="insight-text">
              our new letter provides the knowledge, tools, and inspiration you
              need to create designs that look good and do good for the planet.
            </p>
          </div>
        </div>
      </div>

      <div className="goals-cardWrapper">
        {goalCardData.map((x) => {
          const { id, icon, header, desc } = x;
          return (
            <div className="goal-card" key={id}>
              <div className="goalCard-iconWrapper">{icon}</div>
              <div className="goalCard-descWrapper">
                <h3>{header}</h3> <p>{desc} </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="insight">
        <div className="insight-article">
          <div className="article1">
            <p className="insight-header">testimonials</p>

            <h1>what our readers say</h1>
            <p className="insight-text">
              join thousands of designers who are creating more sustainable,
              planet-friendly work.
            </p>
          </div>
        </div>
      </div>

      <div className="testimonialWrapper">
        {testimonialCards.map((x) => {
          const { id, comment, name, occupation, rating } = x;
          return (
            <div className="t-cards" key={id}>
              <div className="t-ratings">
                {[...Array(rating)].map((index) => {
                  return (
                    <label key={index}>
                      <FaStar
                        size={15}
                        className="cursor-pointer transition-colors duration-200"
                        color={"green"}
                      />
                    </label>
                  );
                })}
              </div>
              <div className="t-comments">{comment}</div>
              <div className="t-userInfoWrapper">
                <h3 className="t-userName">{name}</h3>
                <p className="userOccupation">{occupation}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="joinWrapper">
        <div className="join-backgroundImage">
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/1423601/pexels-photo-1423601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="join-contentWrapper">
          <h2>join us - free, once a week</h2>
          <p>
            join thousands of designers who are creating more sustainable planet
            friendly work
          </p>
          <div className="join-inputWrapper">
            <MdMail className="mailIcon" />
            <input type="text" placeholder="Enter your email" />
            <button>
              <p>subscribe now</p>
              <GoArrowRight className="arrowIcon" />
            </button>
          </div>
          <div className="spam">
            <p>
              <span>
                <GoArrowRight />
              </span>
              No spam. Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
