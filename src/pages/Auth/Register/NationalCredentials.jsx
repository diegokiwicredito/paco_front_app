import React from 'react';
import { Link } from 'react-router-dom';

function NationalCredentials(props) {
    return ( 
        <div className="py-2 px-12">
            <form className="w-96 grid">
                <label htmlFor="" className="grid mb-2">
                    <span>Numero De Celular</span>
                    <input type="text" placeholder="000 0000 000" className="border rounded p-2" />
                </label>

                <button className="grid place-content-center bg-indigo-600 text-white rounded-xl mt-8">
                    <Link to="/auth/register/finish" className="p-2">
                        CONTINUAR 6/6
                    </Link>
                </button>
            </form>
        </div>
     );
}

export default NationalCredentials;