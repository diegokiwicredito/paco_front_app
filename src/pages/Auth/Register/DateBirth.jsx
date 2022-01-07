import React from 'react';
import { Link } from 'react-router-dom';

function DateBirth(props) {
    return (
        <div className="py-2 px-12">
            <form className="w-96 grid">
                <label htmlFor="" className="grid mb-2">
                    <span>Fecha de nacimiento</span>
                    <input type="text" placeholder="DD/MM/YYYY" className="border rounded p-2" />
                </label>

                <button className="grid place-content-center bg-indigo-600 text-white rounded-xl mt-8">
                    <Link to="/auth/register/phonenumber" className="p-2">
                        CONTINUAR 3/6
                    </Link>
                </button>
            </form>
        </div>
    );
}

export default DateBirth;