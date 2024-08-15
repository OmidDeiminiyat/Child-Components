import style from './Header.module.scss';
export const Header = (props) => {
    return (
        <div className={style.headerStyle}>
            <h1>{props.title}</h1>
        </div>
    )
}