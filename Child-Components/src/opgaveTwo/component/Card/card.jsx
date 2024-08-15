import {Header} from './../header/Header';
import style from './card.module.scss';
 

export const Cards = (props) => {
    return(
        <section className={style.SectionStyle}>
            {props.children}
        </section>
    )
}