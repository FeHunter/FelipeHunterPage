import { Button } from '../../Components/Buttons/Button/Button';
import { Card } from '../../Components/Card/Card';
import style from './HubPages.module.css';

export function HubPages ({images}){

    const pageStyle = {
        backgroundImage: `url(${images.bk})`,
    }

    return (
        <div className={style.page} style={pageStyle}>
            <div className={style.aside}>
                <nav className={style.ButtonsArea}>
                    <Button label="Hard Skills" customHeight={'70px'} customWidth={'100%'}/>
                    <Button label="Soft Skills" customHeight={'70px'} customWidth={'90%'}/>
                    <Button label="Web Project" customHeight={'70px'} customWidth={'90%'}/>
                    <Button label="Game Development" customHeight={'70px'} customWidth={'90%'}/>
                </nav>
            </div>
            <div className={style.content}>
                <Card>
                    Content
                </Card>
            </div>
        </div>
    );
}