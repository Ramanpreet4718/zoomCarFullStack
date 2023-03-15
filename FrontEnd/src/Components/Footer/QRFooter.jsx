import React from 'react'
import './Footer.css';
import img from './app_store.png';
import img1 from './play_store.png';

export default function QRFooter() {
  return (
    <div>
        <section className="footer-new-logo-qr"><section className="footer-new-logo-qr-logo"><p className="footer-new-logo-qr-logo-text">Never</p> <p className="footer-new-logo-qr-logo-text">Stop</p> <p className="footer-new-logo-qr-logo-text">Living.</p></section> <section className="footer-new-logo-qr-qr"><section className="footer-new-logo-qr-qr-block"><div className="footer-new-logo-qr-qr-block-image"><img src="https://www.zoomcar.com/img/image.png" alt="qr-code"/></div> <div className="footer-new-logo-qr-qr-block-text">
          Scan this QR code to download app.
        </div></section> <section className="footer-new-logo-qr-qr-desc"><div className="footer-new-logo-qr-qr-desc-title">
          DOWNLOAD ZOOMCAR APP
        </div> <div className="footer-new-logo-qr-qr-desc-description">
          We have incredible offers, discounts &amp; much more in our app.
        </div> <div className="footer-new-logo-qr-qr-desc-buttons">
            <div style={{
            width:"120px"
        }}>
                <img src={img} alt="" />
            </div>
            <div style={{
            width:"120px"
        }}>
                <img src='https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png'  alt="" />
            </div>
        </div>
        </section>
        </section>
        </section>
        <p style={{
            color:"#a8a8a8",
            width:"95%",
            margin:"auto",
            marginTop:"20px",
            padding:"20px 0",
            borderTop:"2px solid white"
        }}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2012-2023 © Zoomcar™ Ltd. All rights reserved.</p>
    </div>
  )
}
