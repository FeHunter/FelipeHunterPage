import { UpArrowBtn } from '../../Components/Buttons/UpArrowBtn/UpArrowBtn';
import style from './HardSkillPage.module.css';

export function HardSkillPage ({images}){

    const pageStyle = {
        backgroundImage: `url(${images.bk})`,
    }

    return (
        <div className={style.page} style={pageStyle}>
            <div className={style.content}>
                <div className={style.skillsContent}>
                    <p>Hard Skills</p>
                </div>
            </div>
            <div className={style.bottom}>
                <UpArrowBtn />
            </div>
        </div>
    );
}