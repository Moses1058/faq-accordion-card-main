import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import illMob from './assets/illustration-woman-online-mobile.svg';
import box from './assets/illustration-box-desktop.svg';
import bgMobile from './assets/bg-pattern-mobile.svg';

import Faq from './Faq';
function App() {

  return (
    <Main>
      <GlobalStyles />
      <MobWoman src={illMob} alt="woman" />
      {/* <img src={bgMobile} alt="" /> */}
      <Faq></Faq>
    </Main>
  )
}


const Main = styled.main`
  position: relative;
  background-color: #FFFFFF;
  box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.497159);
  border-radius: 23px;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: 240px auto;
  background-position: center top 0;
  min-width: 327px;
  min-height: 535px;
  padding: 132px 24px 48px 24px;
`;
const MobWoman = styled.img`
  position: absolute;
  top: -108px;
  width: 237px;
  left: 50%;
  transform: translateX(-50%);
`
export default App;
