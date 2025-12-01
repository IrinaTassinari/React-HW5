import style from "./Footer.module.css";
import AppleIcon from '../../assets/icons/apple-store.svg'
import GoogleIcon from '../../assets/icons/google-app.svg'
import XIcon from '../../assets/icons/x-app.svg'
import AppleIconHover from '../../assets/icons/apple-store-hover.svg'
import GoogleIconHover from '../../assets/icons/google-app-hover.svg'
import XIconHover from '../../assets/icons/x-app-hover.svg'


function Footer() {
    function iconHover(){
        
    }

  return (
    <div className={style.icons_wrapper}>
      <div className={style.icons_frame}>
        <a href="#"><img onMouseOver={iconHover} className={style.icon} src={AppleIcon} alt="apple-store" /> </a>
        <a href="#"><img onMouseOver={iconHover} className={style.icon} src={GoogleIcon} alt="google-app" /></a>
        <a href="#"><img onMouseOver={iconHover} className={style.icon} src={XIcon} alt="x-app" /></a>
      </div>
    </div>
  );
}
export default Footer;
