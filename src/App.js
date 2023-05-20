import React, { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import { supabase } from './config/supabaseClient'
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Checks if there's a logged-in user.
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    // Listen for changes in the authentication state.
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const login = async() => {
    await supabase.auth.signIn({
      provider: 'github',
    });
  };

  return (
    <div className='max-w-[1440px] mx-auto bg-white'> 
      <Header />
      {user ? (
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/property/:id' element={<PropertyDetails />}/>
        </Routes>
      ) : (
        <div>
          <button onClick={login}>Login with Github</button>
        </div>
      )}
      <Footer />
    </div>

  );
};

export default App;
