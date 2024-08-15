export const Wrapper = (props) => {
    return(
        <div>
            <h1>Child Component</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et accusantium eum beatae optio fuga assumenda provident, delectus suscipit autem perspiciatis eligendi amet impedit voluptas aperiam ab. Odio, quo rerum!</h2>
            {props.children}
        </div>
       
        
    )
}