import style from "./Footer.module.css";
import AppleIcon from '../../assets/icons/apple-store.svg'
import GoogleIcon from '../../assets/icons/google-app.svg'
import XIcon from '../../assets/icons/x-app.svg'
import AppleIconHover from '../../assets/icons/apple-store-hover.svg'
import GoogleIconHover from '../../assets/icons/google-app-hover.svg'
import XIconHover from '../../assets/icons/x-app-hover.svg'
import { useState } from "react";


function Footer() {

  const [apple,setApple] = useState(AppleIcon)
  const [google,setGoogle] = useState(GoogleIcon)
  const [x,setX] = useState(XIcon)

    function iconHover(setter,hoverSrc){
        setter(hoverSrc)
    }
    function iconLeave(setter,defaultSrc){
      setter(defaultSrc)
    }

  return (
    <div className={style.icons_wrapper}>
      <div className={style.icons_frame}>
        <a href="#"><img  className={style.icon} src={apple} alt="apple-store" onMouseOver={() => iconHover(setApple, AppleIconHover)}  onMouseOut={() => iconLeave(setApple, AppleIcon)} /> </a>
        <a href="#"><img className={style.icon} src={google} alt="google-app"  onMouseOver={() => iconHover(setGoogle, GoogleIconHover)} onMouseOut={() => iconLeave(setGoogle, GoogleIcon)}/></a>
        <a href="#"><img className={style.icon} src={x} alt="x-app"  onMouseOver={() => iconHover(setX, XIconHover)} onMouseOut={() => iconLeave(setX, XIcon)} /></a>
      </div>
    </div>
  );
}
export default Footer;
