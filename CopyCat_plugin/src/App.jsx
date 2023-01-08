import * as React from "react";
import "./App.css";
import pictureSection1 from "./assets/pictureSection1.svg";
import menuBtn from "./assets/menuBtn.svg";
import cpbLogo01 from "./assets/cpbLogo01.png";
import pictureSection from "./assets/pictureSection.svg";
import fsi1 from "./assets/fsi1.svg";
import PopUp from "./components/PopUp";
import ButtonX from "./components/ButtonX";
import Search from "./components/Search";
const App = () => {
  const propsData = {
    search: {
      search: "SEARCH",
    },
    popUp: {
      textCloseBtn: {
        weHavePlacesAvail:
          "WE HAVE PLACES AVAILABLE RIGHT NOW FOR CL\xc8 DE PEAU BEAUT\xc8's E-LEARNING. RESERVE YOUR PLACE NOW!",
      },
    },
    learnMore: {
      learnMore: "LEARN MORE",
    },
    skinCellScienceBu: {
      learnMore: "BEHIND THE HANDCRAFT",
    },
    skinCellScienceBu1: {
      learnMore: "SKIN CELL SCIENCE",
    },
    learnMore1: {
      learnMore: "LEARN MORE",
    },
  };
  return (
    <div className="front-desktop-landin">
      <div className="flex-container">
        <div className="navbar">
          <img className="menu-btn" src={menuBtn} />
          <span className="menu">MENU</span>
          <Search className="search-instance-1" {...propsData.search} />
          <img className="cpb-logo-01" src={cpbLogo01} />
        </div>
        <PopUp className="pop-up-instance-1" {...propsData.popUp} />
      </div>
      <div className="flex-container-1">
        <span className="sunshine-lotion-vita">Sunshine Lotion Vitamine-D</span>
        <ButtonX className="learn-more-instance-1" {...propsData.learnMore} />
      </div>
      <span className="gives-maximum-potent">
        GIVES MAXIMUM POTENTIAL RICHES THE SKIN.
      </span>
      <span className="from-natural-craftsm">
        From natural craftsmanship to quality products:
      </span>
      <span className="the-companys-develop">
        The company&#39;s development in sustainable production - Latest from
        Clé de peau Beauté
      </span>
      <img className="picture-section" src={pictureSection} />
      <div className="flex-container-2">
        <ButtonX
          className="skin-cell-science-bu-instance"
          {...propsData.skinCellScienceBu}
        />
        <ButtonX
          className="skin-cell-science-bu-1-instance"
          {...propsData.skinCellScienceBu1}
        />
      </div>
      <div className="flex-container-3">
        <img className="picture-section-1" src={pictureSection1} />
        <div className="flex-container-4">
          <span className="latest-from-cpb">LATEST FROM CPB:</span>
          <span className="we-have-places-avail">
            WE HAVE PLACES AVAILABLE RIGHT NOW FOR CLÈ DE PEAU BEAUTÈ&#39;s
            E-LEARNING. RESERVE YOUR PLACE NOW! LEARN TOGETHER ABOUT OUR
            SUSTAINABILITY
          </span>
          <ButtonX
            className="learn-more-1-instance"
            {...propsData.learnMore1}
          />
        </div>
      </div>
      <div className="flex-container-5">
        <span className="skincare">SKINCARE</span>
        <span className="news">NEWS</span>
        <span className="company">COMPANY</span>
      </div>
      <div className="flex-container-6">
        <span className="makeup">MAKEUP</span>
        <span className="about-cl-de-peau-bea">ABOUT CLÉ DE PEAU BEAUTÉ</span>
        <span className="terms-of-use">TERMS OF USE</span>
      </div>
      <div className="flex-container-7">
        <span className="synactif">SYNACTIF</span>
        <span className="cl-de-peau-beaut-cha">CLÉ DE PEAU BEAUTÉ CHANNEL</span>
        <span className="privacy-policy">PRIVACY POLICY</span>
      </div>
      <div className="flex-container-8">
        <span className="viritual-makeup">VIRITUAL MAKEUP</span>
        <span className="cookie-settings">COOKIE SETTINGS</span>
      </div>
      <div className="flex-container-9">
        <span className="select-country-or-re">SELECT COUNTRY OR REGION</span>
        <img className="fsi-1" src={fsi1} />
      </div>
      <hr className="line-1" />
      <span className="c-2022-shiseido-co-l">
        (c) 2022 Shiseido Co., Ltd. All rights reserved.
      </span>
      <hr className="line-2" />
    </div>
  );
};
export default App;
