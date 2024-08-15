import {Wrapper} from './component/wrapper/Wrapper';
import { MyImages } from './component/image/image';
import {Cards} from './opgaveTwo/component/Card/card';
import {SecondWrapper} from './opgaveTwo/component/Wrapper/Wrapper';
import {Body} from './opgaveTwo/component/body/Body';
import {Footer} from './opgaveTwo/component/footer/Footer';
import {Header} from './opgaveTwo/component/header/Header';
import NewImage from './assets/test.jpg';

 


function App() {

  return (
    <>
    { /* Opgave 1 <Wrapper>
       <MyImages/>
   </Wrapper> */}
    <SecondWrapper>
        <Cards>
            <Header title={'Welcome!'}/>
           <Body image={NewImage}/>
           <Footer firstF={'Home'} secondF={'Contact us'} thirdF={'About us'}/>
        </Cards>
    </SecondWrapper>

     

    </>
  )
}

export default App
