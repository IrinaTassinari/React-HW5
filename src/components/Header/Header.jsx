import style from './Header.module.css';
import SpotifyIcon from '../../assets/icons/spotify-icon.svg'

function Header(){
    return(
        <div className={style.Header}>
            <img className={style.img_header} src={SpotifyIcon} alt="spotify" />
        </div>
    )
}
export default Header;