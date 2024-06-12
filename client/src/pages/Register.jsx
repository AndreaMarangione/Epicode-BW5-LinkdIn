import React, { useState } from 'react';
import LinkedinLogo from "../components/linkedinlogo/LinkedinLogo";
import MainButton from "../components/mainbutton/MainButton";
import Footer from '../layout/footer/Footer';
import AxiosApi from '../class/axiosApi';
import './css/register.css';

const Register = () => {
    const api = new AxiosApi();
    const [form, setForm] = useState({});
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = async (e) => {
        e.preventDefault();
        const response = await api.post('/register', form);
        console.log(response.data);
    }
    return (
        <>
            <div className={'navbar container px-4'}>
                <div className={'navbar-brand'}>
                    <LinkedinLogo width={135} height={34} />
                </div>
            </div>
            <div className={'register-container d-flex align-items-center flex-column gap-4'}>
                <h1 className={'h3 text-center register-title'}>Make the most of your professional life</h1>
                <form onSubmit={submitForm} className={'signUp-card bg-white rounded-4 px-4 py-2 '}>
                    <label htmlFor={'email'} className={'my-1 fs-6 fw-medium'}>Email</label>
                    <input
                        onChange={handleForm}
                        className="form-control mb-3 w-100"
                        type="email"
                        name="email"
                    />
                    <label htmlFor={'password'} className={'my-1 fs-6 fw-medium'}>Password (6+ characters)</label>
                    <input
                        onChange={handleForm}
                        className="form-control mb-3 w-100"
                        type="password"
                        name="password"
                    />
                    <p className='text-muted text-center privacy-font-size m-0'>
                        By clicking Agree & Join or Continue,
                        you agree to the LinkedIn
                        <span className='linkedin-text-color'> User Agreement, Privacy Policy</span>
                        , and
                        <span className='linkedin-text-color'> Cookie Policy.</span>
                    </p>
                    <MainButton
                        variant={'fill'}
                        className={'w-100 d-flex justify-content-center py-2 fs-5 my-3'}
                        type={'submit'}>
                        Agree & Join
                    </MainButton>
                    <div className='d-flex align-items-center'>
                        <span className='register-raw mt-1'></span>
                        <span className='px-3'>or</span>
                        <span className='register-raw mt-1'></span>
                    </div>
                    <MainButton
                        className={'w-100 d-flex justify-content-center py-2 fs-5 my-3'}>
                        Login With Google
                    </MainButton>
                    <p className='text-center mb-3'>Already on LinkedIn? <span className='linkedin-text-color'>Sign in</span></p>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Register;
