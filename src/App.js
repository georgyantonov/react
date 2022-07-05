import './App.scss';
import Header from './components/header/header';
import Logo from './components/header/logo/logo';
import Button from './components/header/button/button';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Navmobile from './components/header/nav/navmobile'
import Navdesktop from './components/header/nav/navdesktop'


function App() {
  const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors){
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const id = anchor.getAttribute('href')
        document.querySelector('' +id).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    },
);
};
  return (
    <div className="App">
      <div className="rectangle_15"></div>
      <Header> 
        <Logo></Logo>
        <Navmobile />
        <Navdesktop/>
        <Button></Button>
      </Header>
      <Main>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
