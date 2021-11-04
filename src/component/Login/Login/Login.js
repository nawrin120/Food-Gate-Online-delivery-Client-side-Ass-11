import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home';
    const {
        error,
        setError,
        setIsLoading,
        signUsingGoogle, } = useAuth();

    const handleLogIn = () => {
        signUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(eror => {
                const errormessage = error.message;
                setError(errormessage)
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <div className='login-contailer'>
                <h2 className='login-title pt-5'>Enjoy Food <span>GeaT</span></h2>
                <img className='login-logo my-5' src="images/lg.png" alt="" />
                <button className='log-ggl' onClick={handleLogIn}><img className='google' src="https://i.ibb.co/JcYqDsN/ggll.png" alt="" /> Login With Google</button>


            </div>
        </div>
    );
};

export default Login;