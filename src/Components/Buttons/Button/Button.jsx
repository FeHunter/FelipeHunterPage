import style from './Button.module.css';

export function Button ({label, onClick, customWidth, customHeight}){
    const customStyle = {
        width: customWidth,
        height: customHeight,
    }
    return <button onClick={onClick} className={style.button} style={customStyle}>{label}</button>;
}