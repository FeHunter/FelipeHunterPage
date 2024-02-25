import style from './Button.module.css';

export function Button ({label, onClick}){
    return <button onClick={onClick} className={style.button}>{label}</button>;
}