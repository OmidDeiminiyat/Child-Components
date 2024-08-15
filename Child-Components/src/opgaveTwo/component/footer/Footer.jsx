import style from './Footer.module.scss';
export const Footer = (props) => {
    return(
        <footer className={style.footerStyle}>
            <ul>
                <li>{props.firstF}</li>
                <li>{props.secondF}</li>
                <li>{props.thirdF}</li>
            </ul>
        </footer>
    )
}