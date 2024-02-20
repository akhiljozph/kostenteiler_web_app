import { Link, Outlet } from 'react-router-dom';
import './App.scss';

function App() {

  return (
    <div className='kostlr-wrapper'>
      <button>
        <Link to={'/login'}>Login</Link>
      </button>
      <button>
        <Link to={'/registration'}>Registration</Link>
      </button>
      <Outlet />
    </div>
  )
}

export default App
