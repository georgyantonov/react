import './style.scss';


function Header({ children }) {

  return (
    <header className="header">
      <div className='header_wrapper'>
      { children } 
      </div>   
    </header>
  );
}

export default Header;