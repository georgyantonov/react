import './style.css';


function Header({ children }) {

  return (
    <header className="header">
      <div className='header __container'>
      { children } 
      </div>   
    </header>
  );
}

export default Header;