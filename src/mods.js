import React from "react";
import Illus1 from "./static/illus1.png";
import Illus2 from "./static/illus2.png";
import Illus3 from "./static/illus3.png";
import Testi1 from "./static/testi1.png";
import "./css/mods.css";

export function LowMod() {
  return <div></div>;
}

export function CustMod() {
  return (
    <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="col-lg">
        <img src={Testi1} id="testimonial" />
      </div>
      <div
        className="col"
        style={{ display: "flex", flexWrap: "wrap", textAlign: "left" }}
      >
        <br />
        <br />
        <br />
        <div className="container" id="testi-1" style={{ margin: "150px 0px" }}>
          <svg
            width="48"
            height="34"
            viewBox="0 0 48 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0627 2C11.5733 2 0.0978081 14.851 2.27431 24.5279C4.23196 33.2319 11.7364 32.5492 14.9992 31.1839C16.9568 30.3306 20.6764 26.7807 19.8933 21.4559C18.9145 14.8 13.5309 13.264 11.0838 13.776"
              stroke="#AAB318"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M38.0627 2C37.5733 2 26.0978 14.851 28.2743 24.5279C30.232 33.2319 37.7364 32.5492 40.9992 31.1839C42.9568 30.3306 46.6764 26.7807 45.8933 21.4559C44.9145 14.8 39.5309 13.264 37.0838 13.776"
              stroke="#AAB318"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>

          {/* <img src={Testi2} id="carousel1" /> */}
          <br />
          <div className="customer-testimony">
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "36px",
                letterSpacing: "0.4px",
              }}
            >
              I’m very satisfied. I never thought that I would get such good
              response within 15 days. I just promoted the video for 10 to 20
              days, spend less cost and reached 80000 to 90000 people. I got
              many enquirers everyday online and customers came to my showroom
              during this pandemic. Happy Jewells gave me your reference. They
              told me that I should try. It’s is not costly. I found the videos
              to be helpful. I got customers when I run an Ad on Facebook.
            </span>
          </div>
          <br />
          <div>
            <span className="testi-author">Vrutik Gandhi</span>
            <br />
            <span className="testi-author-designation">Jewellery</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Feature1() {
  return (
    <div className="row" id="res-center">
      <div className="col-sm mx-2">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="res-center"
        >
          <rect width="50" height="50" rx="20" fill="#AAB318" />
          <path
            d="M12 21.1872V25.7389C12 25.9971 12.2605 26.2102 12.5768 26.2102H13.8235V20.7095H12.5768C12.2605 20.7095 12 20.9225 12 21.1872Z"
            fill="white"
          />
          <path
            d="M13.8242 19.7341C13.8242 19.2603 14.295 18.8777 14.8762 18.8777H17.2927H23.2808V28.3342H14.8122C14.6263 28.316 14.5856 28.3099 14.4519 28.2613C14.0799 28.1277 13.8242 27.824 13.8242 27.4779V19.7341Z"
            fill="white"
          />
          <path
            d="M18.2741 38.8224L14.6841 27.9043H18.5002L22.5151 38.1451C22.7722 38.801 22.2886 39.5101 21.5841 39.5101H19.224C18.7921 39.5101 18.409 39.2327 18.2741 38.8224Z"
            fill="white"
          />
          <path
            d="M35.4004 20.6599V27.16C36.8792 26.8568 38.0004 25.5173 38.0004 23.9099C38.0004 22.3026 36.8792 20.9631 35.4004 20.6599Z"
            fill="white"
          />
          <path
            d="M35.3502 13.5173C35.3603 13.5108 35.3703 13.5042 35.3854 13.5173C35.3954 13.5304 35.3954 13.5369 35.4004 13.55V33.6197C35.4004 33.6328 35.4004 33.6393 35.3854 33.6524C35.3653 33.6655 35.3603 33.6589 35.3502 33.6524C31.5328 30.8675 27.3994 28.8505 23.0503 28.3341V21.6348V18.8776C24.4307 18.5682 27.2732 17.4977 27.6003 17.4098C30.2004 16.7598 33.2895 15.0192 35.3502 13.5173Z"
            fill="white"
          />
          <path
            d="M20.7017 21.2202V13.9558C20.7017 13.14 21.6258 12.6675 22.2871 13.1451L27.3163 16.7773C27.869 17.1764 27.869 17.9995 27.3163 18.3986L22.2872 22.0308C21.6258 22.5085 20.7017 22.0359 20.7017 21.2202Z"
            fill="white"
            stroke="#AAB318"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>
        <br />
        <br />
        <span className="heading" style={{ margin: "16px 0px" }}>
          Low cost animated videos for your business
        </span>
        <br />
        <br />
        <span className="" id="res-center">
          Using animated videos helps improve the reach and engagement for your
          social media ads.
        </span>

        <br />
        <br />
        <br />

        {/* <img src={Comment} style={{ width: "100%" }} /> */}

        <div className="testi-box">
          <svg
            width="49"
            height="26"
            viewBox="0 0 49 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="testi-mark"
          >
            <rect width="49" height="26" fill="white" />
            <path
              d="M16.9461 4.45459C16.6569 4.45459 9.87598 12.1652 11.1621 17.9713C12.3189 23.1937 16.7533 22.7841 18.6813 21.9649C19.8381 21.4529 22.0361 19.323 21.5733 16.1282C20.9949 12.1346 17.8137 11.213 16.3677 11.5202"
              stroke="#AAB318"
              stroke-width="1.6"
              stroke-linecap="round"
            />
            <path
              d="M32.3094 4.45459C32.0202 4.45459 25.2393 12.1652 26.5254 17.9713C27.6822 23.1937 32.1166 22.7841 34.0446 21.9649C35.2014 21.4529 37.3993 19.323 36.9366 16.1282C36.3582 12.1346 33.177 11.213 31.731 11.5202"
              stroke="#AAB318"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>

          <div className="testi-comment">
            Made videos for public awareness purpose. This is working! Pricewise
            it’s good. My plan is to make videos every week so that I keep my
            page active.
            <div className="testi-comment-author my-3">
              Shiva,{" "}
              <span style={{ margin: "0%", opacity: "0.6" }}>Doctor</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <img src={Illus1} style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export function Feature2() {
  return (
    <div
      className="row"
      id="res-center"
      style={{ display: "flex", flexWrap: "wrap-reverse" }}
    >
      <div className="col mx-2">
        <img src={Illus2} style={{ width: "100%" }} />
      </div>

      <div className="col-sm">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="50" rx="20" fill="#2D8B7A" />
          <path
            d="M37.4664 13.0023C32.3911 12.9113 26.6029 15.5644 22.9392 19.6802C19.4379 19.7463 16.0287 21.1817 13.5187 23.6919C13.3724 23.836 13.3204 24.0516 13.3843 24.2466C13.4493 24.4427 13.6183 24.5846 13.822 24.6138L17.9971 25.2119L17.4814 25.7893C17.2897 26.0038 17.2994 26.3299 17.5031 26.5336L24.4656 33.4964C24.5706 33.6015 24.7093 33.6546 24.8491 33.6546C24.978 33.6546 25.1069 33.6091 25.2098 33.517L25.7872 33.0013L26.3852 37.1766C26.4144 37.3803 26.5748 37.5298 26.7687 37.5948C26.8185 37.611 26.8705 37.6186 26.9236 37.6186C27.0774 37.6186 27.2345 37.5515 27.3428 37.4442C29.8182 34.9687 31.2536 31.5593 31.3197 28.0579C35.4395 24.3863 38.1143 18.6 37.9962 13.531C37.9886 13.2428 37.7557 13.0099 37.4664 13.0023ZM32.4745 22.3539C31.9469 22.8815 31.2536 23.1459 30.5592 23.1459C29.8648 23.1459 29.1715 22.8815 28.6439 22.3539C27.5888 21.2976 27.5888 19.5794 28.6439 18.5231C29.7001 17.4668 31.4183 17.4668 32.4745 18.5231C33.5307 19.5794 33.5307 21.2987 32.4745 22.3539Z"
            fill="white"
          />
          <path
            d="M14.951 31.3135C13.7919 32.4727 12.2005 37.7098 12.0228 38.3024C11.9654 38.493 12.0185 38.7 12.1582 38.8408C12.2622 38.9448 12.3998 39.0001 12.5417 39.0001C12.5937 39.0001 12.6457 38.9925 12.6977 38.9773C13.2903 38.7996 18.527 37.2082 19.6862 36.0489C20.9916 34.7435 20.9916 32.619 19.6862 31.3135C18.3797 30.0081 16.2564 30.0092 14.951 31.3135Z"
            fill="white"
          />
        </svg>

        <br />
        <br />

        <span className="heading">Unbeatable Turnaround</span>
        <br />
        <br />
        <span>
          Videos at Kalpkriti are made in a record time. Our process is
          seamlessly fast. Get your video in just a few days.
        </span>
        <br />
        <br />
        <br />
        <div className="testi-box">
          <svg
            width="49"
            height="26"
            viewBox="0 0 49 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="testi-mark"
          >
            <rect width="49" height="26" fill="white" />
            <path
              d="M16.9461 4.45459C16.6569 4.45459 9.87598 12.1652 11.1621 17.9713C12.3189 23.1937 16.7533 22.7841 18.6813 21.9649C19.8381 21.4529 22.0361 19.323 21.5733 16.1282C20.9949 12.1346 17.8137 11.213 16.3677 11.5202"
              stroke="#AAB318"
              stroke-width="1.6"
              stroke-linecap="round"
            />
            <path
              d="M32.3094 4.45459C32.0202 4.45459 25.2393 12.1652 26.5254 17.9713C27.6822 23.1937 32.1166 22.7841 34.0446 21.9649C35.2014 21.4529 37.3993 19.323 36.9366 16.1282C36.3582 12.1346 33.177 11.213 31.731 11.5202"
              stroke="#AAB318"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>

          <div className="testi-comment">
            Making third video from you, now. The videos are as per our needs.
            Our initial thought was to just communicate to our customers in a
            better way. Really liked the time spent during the process. The
            operations team is good.
            <div className="testi-comment-author my-3">
              Pradeep Sen,{" "}
              <span style={{ margin: "0%", opacity: "0.6" }}>
                Mahaveer Jain Jewellers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Feature3() {
  return (
    <div className="row" id="res-center">
      <div className="col-sm">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="50" rx="20" fill="#776850" />
          <path
            d="M16.8533 17.8879H15.9653C13.7562 17.8879 11.9653 19.6788 11.9653 21.8879V33.6699V35.9826C11.9653 37.6339 13.8533 38.5737 15.1709 37.5784L19.2746 34.4783C19.969 33.9537 20.8155 33.6699 21.6857 33.6699H29.1464C31.3555 33.6699 33.1464 31.879 33.1464 29.6699V29.5167"
            stroke="white"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M38.0342 14V31.7792C38.0342 32.6684 36.9607 33.1153 36.3297 32.4889L33.2059 29.3879C33.0186 29.2019 32.7654 29.0976 32.5014 29.0976H17.8531C17.3009 29.0976 16.8531 28.6499 16.8531 28.0976V14C16.8531 13.4477 17.3009 13 17.8531 13H37.0342C37.5865 13 38.0342 13.4477 38.0342 14Z"
            fill="white"
          />
          <path
            d="M33.1459 18.7026H21.7407"
            stroke="#0048D5"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M28.258 23.3623H21.7407"
            stroke="#0048D5"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>
        <br />
        <br />
        <span className="heading">Effective Communication</span>
        <br />
        <span>
          Our support and dashboard features leaves no room for any
          communication gap. It keeps you updated at each stage.
        </span>
        <br />
        <br />
        <br />

        <div className="testi-box">
          <svg
            width="49"
            height="26"
            viewBox="0 0 49 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="testi-mark"
          >
            <rect width="49" height="26" fill="white" />
            <path
              d="M16.9461 4.45459C16.6569 4.45459 9.87598 12.1652 11.1621 17.9713C12.3189 23.1937 16.7533 22.7841 18.6813 21.9649C19.8381 21.4529 22.0361 19.323 21.5733 16.1282C20.9949 12.1346 17.8137 11.213 16.3677 11.5202"
              stroke="#AAB318"
              stroke-width="1.6"
              stroke-linecap="round"
            />
            <path
              d="M32.3094 4.45459C32.0202 4.45459 25.2393 12.1652 26.5254 17.9713C27.6822 23.1937 32.1166 22.7841 34.0446 21.9649C35.2014 21.4529 37.3993 19.323 36.9366 16.1282C36.3582 12.1346 33.177 11.213 31.731 11.5202"
              stroke="#AAB318"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>

          <div className="testi-comment">
            Thank you for making my video. I am happy. Did a good job. The
            writer gave good suggestions.
            <div className="testi-comment-author my-3">
              Shilpi Maheshwari,{" "}
              <span style={{ margin: "0%", opacity: "0.6" }}>
                Handicraft Business Owner
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm">
        <img src={Illus3} style={{ width: "100%" }} />
      </div>
    </div>
  );
}
