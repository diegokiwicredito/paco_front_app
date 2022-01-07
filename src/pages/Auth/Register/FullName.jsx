import React from 'react';
import { Link } from 'react-router-dom';

function FullName(props) {
  return (
    <div className="py-2 px-12">
      <form className="w-96 grid">
        <label htmlFor="" className="grid mb-2">
          <input type="text" placeholder="Primer Nombre" className="border rounded p-2" />
        </label>
        <label htmlFor="" className="grid mb-2">
          <input type="text" placeholder="Segundo Nombre" className="border rounded p-2" />
        </label>
        <label htmlFor="" className="grid mb-2">
          <input type="text" placeholder="Primer Apellido" className="border rounded p-2" />
        </label>
        <label htmlFor="" className="grid mb-2">
          <input type="text" placeholder="Segunda Apellido" className="border rounded p-2" />
        </label>

        <button className="grid place-content-center bg-indigo-600 text-white rounded-xl mt-8">
          <Link to="/auth/register/datebirth" className="p-2">
            CONTINUAR 2/6
          </Link>
        </button>
      </form>
    </div>
  );
}

export default FullName;