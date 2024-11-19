import { useState , useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import About from './components/About/About';
import Search from './components/Search/Search';




export default function App() {

  function ProtectedRoute(props){
    if(myToken == null){
  // no user
  return<>
    {/* <Navigate to='/login'/> */}
    <>
    <h1>Error not found </h1>
    <h3>You must log in first</h3>
    </>
  </>
    }else{
      // fe user 
      return<>
        {props.children}
      </>
    }
  }

  const [myToken , setMyToken] = useState(null)

  function getLogInToken(){
    if(localStorage.getItem('token')!=null){
      const token = localStorage.getItem('token')
      setMyToken(token)
    };   
  };

  function removeUseData(){
    localStorage.removeItem('token')
    setMyToken(null)
  };

  function checkReload(){
    if(localStorage.getItem('token')!=null && myToken == null){
      getLogInToken();
    };
  };

    useEffect(() => {
      checkReload();
    },[]);

  const router = createBrowserRouter([
    { path :'' , element:<Main ifUserLogin={myToken} remove={removeUseData}/>,children:[
    {path : 'home' , element : <ProtectedRoute> <Home/> </ProtectedRoute>},
    {path : 'about' , element : <ProtectedRoute> <About/> </ProtectedRoute>},
    // {path : 'details' , element : <Details/>},
    {path : 'search' , element : <ProtectedRoute> <Search/>  </ProtectedRoute>},
    {path : 'login' , element : <Login loginTkn={getLogInToken}/>},
    {path : '' , element : <Login loginTkn={getLogInToken}/>},
    {path : 'register' , element : <Register/>},
    {path : '*' , element : <h2> Error</h2>},
  ]}
])
  return <>
  <RouterProvider router={router}/>
  </>
}

