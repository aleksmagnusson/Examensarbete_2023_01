import React from 'react';
import './Footer.css';

import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

function Footer() {

    const year = new Date('January 12, 2023 12:25:00');

    year.setFullYear(2023);

    return (
        <div>
            <container className="Fcontainer">
                <div className='divS1'>
                    <a href="skincare">SKINCARE</a>
                    <a href="makeup">MAKEUP</a>
                    <a href="synactif">SYNACTIF</a>
                </div>
                <div className='divS2'>
                    <h2>NEWS</h2>
                    <a href="about">ABOUT CLÉ DE PEAU BEAUTÈ</a>
                    <a href="channel">CLÉ DE PEAU BEAUTÈ CHANNEL</a>
                    <a href="VMUA">VIRITUAL MAKEUP</a>
                </div>
                <div className='divS3'>
                    <h2>COMPANY</h2>
                    <a href="ToU">TERMS OF USE</a>
                    <a href="policy">PRIVACY POLICY</a>
                    <a href="cookies">COOKIE SETTINGS</a>
                </div>
            </container>
            <container className="socialIcons">
                <h3>SELECT COUNTRY OR REGION</h3>
                <div>
                    <FiInstagram href='#' />
                    <FiFacebook href='#' />
                    <FiYoutube href='#' />
                </div>
            </container>
            <div>
                <hr />
                <h3> © 2023 Shiseido Co., Ltd. All rights reserved.</h3>
            </div>
        </div>
    )
}

export default Footer