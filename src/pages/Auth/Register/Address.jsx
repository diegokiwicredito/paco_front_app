import React from 'react';
import { Link } from 'react-router-dom';

function Address(props) {
    return ( 
        <div className="py-2 px-12">
            <form className="w-96 grid">
                <div className="grid grid-cols-2 gap-6">
                    <label htmlFor="" className="grid mb-2">
                        <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                    </label>
                    <label htmlFor="" className="grid mb-2">
                        <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <label htmlFor="" className="grid mb-2">
                        <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                    </label>
                    <label htmlFor="" className="grid mb-2">
                        <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                    </label>
                </div>

                <label htmlFor="" className="grid mb-2">
                    <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                </label>
                
                <label htmlFor="" className="grid mb-2">
                    <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                </label>
                
                <div className="grid grid-cols-2 gap-6">
                    <label htmlFor="" className="grid mb-2">
                        <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                    </label>
                    <label htmlFor="" className="grid mb-2">
                        <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                    </label>
                </div>

                <button className="grid place-content-center bg-indigo-600 text-white rounded-xl mt-8">
                    <Link to="/auth/register/fullname" className="p-2">
                        CONTINUAR 1/6
                    </Link>
                </button>
            </form>
        </div>
     );
}

export default Address;