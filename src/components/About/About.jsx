import React from "react";

import "./about.css";
export default function About() {
  return (
    <>
      <div>
        <div className="abt-whole">
          <div className="abt">
            <h2>WHAT WE’RE ALL ABOUT</h2>
            <p>
              We at InfiniteFiesta are a group of seasoned specialists,
              passionate about curating unforgettable experiences that inspire.
              With accomplished event producers and some of the most creative
              minds in the industry, our Event Planning Company delivers on
              every project, from initial concept through the event itself.
            </p>
            <p>
              Since 2000, we have worked with a large number of clients from
              many different backgrounds, tailoring each event to meet their
              specific needs and desires. We love taking care of people, and
              thrive on making your dream event a reality.
            </p>
          </div>
          <div className="aimg">
            <img
              id="img-abt"
              src="https://images.pexels.com/photos/5911454/pexels-photo-5911454.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
        </div>
        <div className="middle">
          <h2>
            <center>WHAT WE DO</center>
          </h2>

          <div className="mid1">
            <img src="https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_SLOT-MACHINE_01.gif" />
            <div className="cont1">
              <h4>CREATE YOUR CELEBRATION</h4>
              <p>asfasdasdasdasdasdasdas</p>
            </div>
          </div>

          <div className="mid2">
            <img src="https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_CHEERS_01.gif" />
            <div className="cont2">
              <h4>ANALYSE YOUR CELEBRATION</h4>
              <p>asfasdasdasdasdasdasdas</p>
            </div>
          </div>

          <div className="mid3">
            <img src="https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_UNDO_01.gif" />

            <div className="cont3">
              <h4>DESIGN YOUR VIEWS</h4>
              <p>asfasdasdasdasdasdasdas</p>
            </div>
          </div>

          <div className="mid4">
            <img src="https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_WALKIE-TALKIE_01.gif" />
            <div className="cont4">
              <h4>PRODUCE YOUR VISIONS</h4>
              <p>asfasdasdasdasdasdasdas</p>
            </div>
          </div>
        </div>

        <div className="abt-container">
          <img
            id="a-img"
            src="https://static.wixstatic.com/media/11062b_6471dd55fbd445939f4cb811bd9eaa14~mv2.jpeg/v1/fill/w_2620,h_880,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_6471dd55fbd445939f4cb811bd9eaa14~mv2.jpeg"
            alt=""
          />
          <div className="a-text">
            <h1>WORKING HOURS</h1>
            <p>
              <i>Contact us Today</i>
            </p>
            <p>M-F: 8am-8pm</p>
          </div>
        </div>
      </div>
    </>
  );
}
