import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo1.png';

const Header = () => {
  const handleLogin = () => {
    // Add your login functionality here
    console.log('Login button clicked');
    // Perform login actions
  };
console.log(handleLogin);

  const handleSignUp = () => {
    // Add your sign up functionality here
    console.log('Sign up button clicked');
    // Perform sign up actions
  };

  return (
    <header className='px-24 mb-12 border-b'>
      <div className='mx-auto w-100 h-14 left-0 flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* buttons */}
        <div className='flex items-center gap-6'>
          <Link onClick={handleLogin} className='hover:text-Blue-900'>
            Log in
          </Link>
          <Link
            onClick={handleSignUp}
            className='bg-blue-700 hover:bg-Blue-800 text-white px-4 py-3 rounded-lg transition'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
