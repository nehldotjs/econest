import React from "react";
import "../styles/Hero.css";
import Nav from "./Nav";
import { IoMail } from "react-icons/io5";
import greenpeace from "../Assets/GREENPEACE.png";
function HeroSection() {
  return (
    <div className="heroSectionWrapper">
      <div className="hero-contentWrapper">
        <Nav />
        <div className="hero-writeUp">
          <h2>
            Built for the Planet. <br /> Eco-Driven Design.
          </h2>
          <p>
            A weekly dive into the intersection of creativity, technology, and
            nature — re-imagining how we live, work, and connect.
          </p>{" "}
          <div className="hero-newsLetter-emailInput">
            <IoMail />
            <input type="email" placeholder="Enter your Email " />
            <button>Sign up for free</button>
          </div>
        </div>

        <div className="hero-footerSection">
          <p>
            From the heart of Nigeria, a weekly dose of ideas and tools for
            designing with purpose — at the intersection of tech, creativity,
            and climate action.
          </p>

          <div className="sponsors">
            <div className="bbc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                fill="#FFF"
                viewBox="0 0 1024 384">
                <path d="M64 64v256h256V64zm178.5 180.7c-4.4 6.2-10.6 10.9-18.7 14.3s-17.8 5-29.2 5h-57.4V120h54c15.9 0 28.3 3.2 37 9.6s13.1 15.5 13.1 27.5c0 6.8-1.6 12.8-4.7 17.8s-7.8 9-13.9 12c8.5 2.8 15 7.3 19.5 13.4s6.8 13.5 6.8 22.3c.1 8.5-2.1 15.9-6.5 22.1m-36.6-70.4q6-4.95 6-13.8c0-11.4-7.8-17.1-23.3-17.1h-22.1v35.8h22.1c7.6 0 13.3-1.6 17.3-4.9m-13.6 27.5h-25.8v38.9H192c8.7 0 15.5-1.6 20.2-4.9s7-8 7-14.2c-.1-13.3-9-19.8-26.9-19.8M384 64v256h256V64zm178.5 180.7c-4.4 6.2-10.6 10.9-18.7 14.3s-17.8 5-29.2 5h-57.4V120h54c15.9 0 28.3 3.2 37 9.6s13.1 15.5 13.1 27.5c0 6.8-1.6 12.8-4.7 17.8s-7.8 9-13.9 12c8.5 2.8 15 7.3 19.5 13.4s6.8 13.5 6.8 22.3c.1 8.5-2.1 15.9-6.5 22.1m-36.6-70.4q6-4.95 6-13.8c0-11.4-7.8-17.1-23.3-17.1h-22.1v35.8h22.1c7.6 0 13.3-1.6 17.3-4.9m-13.6 27.5h-25.8v38.9H512c8.7 0 15.5-1.6 20.2-4.9s7-8 7-14.2c-.1-13.3-9-19.8-26.9-19.8M704 320h256V64H704zm183.9-65.1q-9 4.95-20.7 7.8c-7.9 1.9-16.1 2.9-24.8 2.9-11.5 0-21.9-1.7-31.1-5-9.2-3.4-17-8.2-23.4-14.5s-11.2-14-14.6-23.2q-5.1-13.65-5.1-30.9c0-11.2 1.8-21.3 5.3-30.3s8.6-16.7 15.2-23.2c6.6-6.4 14.6-11.4 23.9-14.8q13.95-5.1 31.2-5.1c8 0 15.5.8 22.7 2.5q10.65 2.4 19.8 7.2v28c-5.6-3.7-11.6-6.5-18.1-8.4s-13.3-2.9-20.5-2.9c-9.9 0-18.3 1.8-25.3 5.5s-12.3 9-16.1 16c-3.7 7-5.6 15.5-5.6 25.5s1.8 18.5 5.4 25.6c3.6 7 8.8 12.4 15.6 16.1s15.1 5.5 24.9 5.5c14.9 0 28.7-3.9 41.3-11.6z"></path>
              </svg>
              <h3>EARTH</h3>
            </div>
            <img src={greenpeace} alt="" className="logo" />
            <div className="notion">
              {" "}
              <img
                className="logoNotion"
                src="https://img.icons8.com/?size=100&id=Z0oLQ5Vhqee3&format=png&color=FFFFFF"
                alt=""
              />
              <h3>notion</h3>
            </div>
          </div>
        </div>
      </div>

      {/* _________________________________________________ */}

      <div className="hero-backgroundImgWrapper">
        <div className="overlay"></div>
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/1423601/pexels-photo-1423601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Scenic view of green rice fields and distant hills"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
