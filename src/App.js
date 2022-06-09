import './App.css';
import Header from './components/header/header';
import Nav from './components/header/nav/nav';
import Logo from './components/header/logo/logo';
import Button from './components/header/button/button';

function App() {
  return (
    <div className="App">
      <Header> 
        <Logo></Logo>
        <Nav> </Nav>
        <Button></Button>
      </Header>
    </div>
  );
}

export default App;
