import style from './Main.module.css';

function Main(){
    return(
        <div className={style.text_content}>
            <h1 className={style.main_h1}>LIFE IS WASTED ON THE LIVING</h1>
            <div className={style.h4_together}>
                <h4 className={style.main_h4}>Sign in</h4>
                <h4 className={style.main_h4}>with</h4>
            </div>
          
        </div>
    )
}
export default Main;