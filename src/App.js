import './App.css';
import Header from './components/header/header';
import Logo from './components/header/logo/logo';
import Button from './components/header/button/button';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Navmobile from './components/header/nav/navmobile'
import Navdesktop from './components/header/nav/navdesktop'

function App() {
  return (
    <div className="App">
      <div className="rectangle_15"></div>
      <Header> 
        <Logo></Logo>
        <Navmobile/>
        <Navdesktop/>
        <Button></Button>
      </Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
