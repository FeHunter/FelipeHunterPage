import { Button } from '../../Components/Buttons/Button/Button';
import style from './HubPages.module.css';

export function HubPages ({images}){

    const pageStyle = {
        backgroundImage: `url(${images.bk})`,
    }

    return (
        <div className={style.page} style={pageStyle}>
            <div className={style.aside}>
                <nav className={style.ButtonsArea}>
                    <Button label="Hard Skills" />
                </nav>
            </div>
            <div className={style.content}>
                content
            </div>
        </div>
    );
}