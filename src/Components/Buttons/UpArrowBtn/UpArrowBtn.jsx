import style from './UpArrowBtn.module.css';

export function UpArrowBtn (){
    return (
        <div className={style.bottom}>
            <span className={style.moreBtn}>
                <i class="fa-solid fa-chevron-up"></i>
            </span>
        </div>
    );
}