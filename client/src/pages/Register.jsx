import React from 'react';
import LinkedinLogo from "../components/linkedinlogo/LinkedinLogo";
import MainButton from "../components/mainbutton/MainButton";

const Register = () => {
    return (
        <div className={''}>
            <div className={'navbar container-fluid px-4'}>
                <div className={'navbar-brand'}>
                    <LinkedinLogo width={102} height={26}/>
                </div>
            </div>

            <div className={'d-flex justify-content-center align-items-center min-vh-100 flex-column gap-4'}>

                <h1 className={'h3'}>Ottieni il massimo dalla tua vita professionale</h1>
                <div className={'signUp-card bg-white rounded-4 px-4 py-2 '}>
                    <label htmlFor={'email'} className={'mt-2 fs-6 fw-medium'}>Email</label>
                    <input
                        className="form-control mb-3 w-100"
                        type="email"
                        name="email"
                    />

                    <label htmlFor={'password'} className={'mt-2 fs-6 fw-medium'}>Password (almeno 6 caratteri)</label>
                    <input
                        className="form-control mb-3 w-100"
                        type="email"
                        name="email"
                    />

                    <MainButton variant={'fill'} className={'w-100 d-flex justify-content-center py-2 fs-5'}>Accetta e iscriviti</MainButton>
                </div>

            </div>
        </div>
    );
};

export default Register;
