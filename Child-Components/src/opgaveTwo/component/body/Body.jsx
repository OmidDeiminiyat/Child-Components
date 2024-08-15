import style from './Body.module.scss';
export const Body = (props) => {
    return (
        <main className={style.BodyStyle} > 
            <img src={props.image} alt="Beutiful nature" />
        </main>
    )
}