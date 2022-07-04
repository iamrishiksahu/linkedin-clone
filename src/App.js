import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {

  useEffect( () => {
    props.getUserAuth();

  }, [])

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={
              <>
                <Header />
                <Home />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </>


  );
}

const mapStateToProps = (props) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);