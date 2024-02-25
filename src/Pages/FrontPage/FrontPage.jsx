import style from './FrontPage.module.css';

export function FrontPage ({images}){

    const pageStyle = {
        backgroundImage: `url(${images.bk})`,
    }

    return (
        <div className={style.frontPage} style={pageStyle}>
            <div className={style.leftArea}>
                <h1>Felipe Rodrigues <br/> (Hunter)</h1>
            </div>
            <div className={style.rightArea}>
                <div className={style.aboutArea}>
                    <p>
                        Hello there! You can call me Felipe Hunter and I'm a programmer.
                    </p>
                </div>
            </div>
        </div>
    );
}