import React, { useState } from 'react';
import { AccesData } from './access-data';
import { Confirmation } from './confirmation';
import { Login } from './login';
import { PersonalData } from './personal-data';

export function Form() {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        name: '',
        lastname: '',
        birthDate: 0,
        gender: '',
        email: '',
        newsletter: false,
        userName: '',
        password: '',
        confirmPassword: '',
        accountType: '',
    });
    const formTitles = [
        'Personal data',
        'Acces data',
        'Confirmation',
        'Log in',
    ];

    const pageDisplay = () => {
        if (page === 0) {
            return (
                <PersonalData
                    formData={data}
                    setFormData={setData}
                ></PersonalData>
            );
        } else if (page === 1) {
            return (
                <AccesData formData={data} setFormData={setData}></AccesData>
            );
        } else if (page === 2) {
            return <Confirmation></Confirmation>;
        } else if (page === 3) {
            return <Login></Login>;
        }
    };
    return (
        <div className="form">
            <div className="form-container">
                <div>
                    <h1>{formTitles[page]}</h1>
                </div>
                <div className="main">{pageDisplay()}</div>
                <div className="buttons">
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        disabled={page === formTitles.length - 1}
                        onClick={() => {
                            setPage((currentPage) => currentPage + 1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
