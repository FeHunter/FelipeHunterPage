import { Button } from '../../Components/Buttons/Button/Button';
import { Card } from '../../Components/Card/Card';
import style from './HubPages.module.css';

export function HubPages ({images}){

    const pageStyle = {
        backgroundImage: `url(${images.bk2})`,
    }

    return (
        <div className={style.page} style={pageStyle}>
            <div className={style.aside}>
                <nav className={style.ButtonsArea}>
                    <Button label="Hard Skills" customHeight={'70px'} customWidth={'90%'}/>
                    <Button label="Soft Skills" customHeight={'70px'} customWidth={'90%'}/>
                    <Button label="Web Project" customHeight={'70px'} customWidth={'90%'}/>
                    <Button label="Game Development" customHeight={'70px'} customWidth={'90%'}/>
                </nav>
            </div>
            <div className={style.content}>
                <Card>
                    <div>
                        <h2>Hard Skills</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>REACT NATIVE</li>
                            <li>C-SHARP</li>
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
}