import style from './Card.module.css';

export function Card ({children}){
    const images = {
        backgroundImage: `url(https://cdn.pixabay.com/photo/2022/04/04/16/23/technology-7111755_1280.jpg)`,
    }
    return (
        <div className={style.card}>
            {children}
        </div>
    );
}