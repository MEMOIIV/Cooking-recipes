import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import NavbarStyle from './Navbar.module.css'

export default function Navbar({ifUserLogin , remove}) {
    const [searchQuery, setSearchQuery] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate()


    function handleInputChange(event){
        setSearchQuery(event.target.value); 
        setErrorMessage('');  // إعادة تعيين رسالة الخطأ عند التغيير
    };

    // التحقق من صحة اسم الطعام
    async function isFoodValid(query) {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        return response.data.meals !== null;  // إذا كانت قاعدة البيانات تحتوي على نتائج
    };

    async function getValue(){
        const isValid = await isFoodValid(searchQuery);
        if (isValid && searchQuery!=null && searchQuery !=='' ) {
            localStorage.setItem('nameFood', searchQuery);  // حفظ اسم الطعام في localStorage
            navigation('/search');  // الانتقال إلى صفحة البحث
            window.location.reload()
        } else {
            setErrorMessage('Please enter a valid food name and Do not leave the input empty.');
            alert("Please enter a valid food name and Do not leave the input empty.")
        }
    };

    function logOut(){
        // remove user data from localStorage + myToken = null
        let userChoice = window.confirm(' Are you sure to logout ')
        if(userChoice){
        remove();
        navigation('/login');
        }else{
            
        }
    };

    function goToAbout(){
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigation("/about")
        },500);
    }
return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <Link className="navbar-brand" to="/home">The <span className='text-success'>Recipe Nest</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {ifUserLogin?<>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" onClick={goToAbout}>About</Link>
            {isLoading == true ? <div
            className=
            " bg-success z-4 vh-100 overflow-hidden d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0 text-white"
        >
            <i className="fa-solid fa-circle-notch fa-spin fa-4x"></i>
        </div>: ""}
        </li>
    </ul>

    </>:   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" onClick={goToAbout}>About</Link>
            {isLoading == true ? <div
            className=
            " bg-success z-4 vh-100 overflow-hidden d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0 text-white"
        >
            <i className="fa-solid fa-circle-notch fa-spin fa-4x"></i>
        </div>: ""}
        </li>
    </ul>}
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {ifUserLogin?<>
    <div className="d-flex mb-2" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleInputChange}  />
        <button className="btn btn-outline-success" type="submit" onClick={getValue}>Search</button>
    </div>
        {/* <div className={navbarCss.error}>
            <span><p style={{ color: 'red'}}>{errorMessage}</p></span>
        </div> */}
        <li className=' nav-item'><button className='btn btn-danger p-0 ms-2  mb-2'><div className="nav-link text-white" aria-current="page" onClick={logOut}>Logout</div></button></li>
        </>:<>
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleInputChange}  />
        <button className="btn btn-outline-success me-2" type="submit" onClick={getValue}>Search</button>
        <li className=' nav-item'><button className='btn btn-info p-0'><Link className="nav-link " aria-current="page" to='/login'>Login</Link></button></li>
        </>}
        
    </ul>
    </div>
</div>
</nav>

    </>
)
}
