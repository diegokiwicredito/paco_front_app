import React from 'react';
import { Link } from 'react-router-dom';

function EmailPassword(props) {
    return (
        <div className="py-2 px-12">
            <form className="w-96 grid">
                <label htmlFor="" className="grid mb-2">
                    <input type="text" placeholder="Correo Electrónico" className="border rounded p-2" />
                </label>
                <label htmlFor="" className="grid mb-2">
                    <input type="password" placeholder="Contraseña" className="border rounded p-2" />
                    <span className="text-sm mt-2">Tu contraseña debe ser mínimo 8 caracteres y 1 número</span>
                </label>
                <label htmlFor="" className="mt-4">
                    <input type="checkbox" />
                    <span className="ml-3">I leido y acepto los Términos de Uso, Política de Privacidad y Consentimiento de Firma Electrónica.</span>
                </label>

                <button className="grid place-content-center bg-indigo-600 text-white rounded-xl mt-8">
                    <Link to="/auth/register/fullname" className="p-2">
                        CONTINUAR 1/6
                    </Link>
                </button>
            </form>
        </div>
    );
}

export default EmailPassword;