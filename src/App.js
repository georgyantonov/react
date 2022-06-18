import './App.css';
import Header from './components/header/header';
import Nav from './components/header/nav/nav';
import Logo from './components/header/logo/logo';
import Button from './components/header/button/button';
import Footer from './components/footer/footer';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <div className="rectangle_15"></div>
      <Header> 
        <Logo></Logo>
        <Nav> </Nav>
        <Button></Button>
      </Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
