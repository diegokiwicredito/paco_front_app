import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'

function Savings(props) {
    return (
        <div className="p-5 grid grid-cols-11 place-content-start gap-5">
            <div className="col-span-5 bg-indigo-600 p-10 text-white rounded-lg grid place-content-center text-center">
                <h2 className="text-3xl mb-4 font-semibold">PREMIO ACUMULADO</h2>
                <p className="text-6xl text-yellow-400 mb-4 font-extrabold">$52,020</p>
                <p className="text-2xl mb-5 font-semibold">EL PRÓXIMO SORTEO CIERRA EN</p>
                <div className="grid grid-cols-4 gap-5">
                    <div className="flex flex-wrap justify-center">
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl mr-2">0</div>
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl">0</div>
                        <p className="w-full mt-2 text-yellow-400 font-bold text-sm">DÍA</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl mr-2">0</div>
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl">2</div>
                        <p className="w-full mt-2 text-yellow-400 font-bold text-sm">HR</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl mr-2">1</div>
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl">5</div>
                        <p className="w-full mt-2 text-yellow-400 font-bold text-sm">MIN</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl mr-2">3</div>
                        <div className="bg-white w-10 h-16 text-green-400 rounded-lg shadow-lg grid place-content-center font-bold text-2xl">0</div>
                        <p className="w-full mt-2 text-yellow-400 font-bold text-sm">SEG</p>
                    </div>
                </div>
            </div>
            <div className="col-span-6 bg-white pt-5 pb-8 px-8 rounded-lg">
                <div className="flex mb-6">
                    <p>RONDA 35</p>
                    <div className="flex ml-auto">
                        <ArrowLeftIcon className="w-5 h-5 mr-4"/>
                        <ArrowRightIcon className="w-5 h-5"/>
                    </div>
                </div>
                <h2 className="text-3xl text-center font-bold text-indigo-600">SORTEO ANTERIOR</h2>
                <p className="mb-4 text-center">Dic 1, 2021, 8:00 PM</p>
                <div className="grid grid-cols-6 text-white font-bold text-shadow mb-5">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 grid place-content-center rounded-full text-3xl">2</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 grid place-content-center rounded-full text-3xl">1</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 grid place-content-center rounded-full text-3xl">9</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 grid place-content-center rounded-full text-3xl">7</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 grid place-content-center rounded-full text-3xl">4</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 grid place-content-center rounded-full text-3xl">1</div>
                </div>
                <p className="text-sm text-center mb-5">¡Combina los números en el mismo orden debajo y gana premios!</p>
                <div className="grid grid-cols-3 gap-1 justify-between text-sm font-semibold">
                    <div>
                        <p className="text-indigo-600">Combina primeros 2</p>
                        <p>$1,452 premio c/u</p>
                        <p className="text-indigo-600 font-normal text-xs">634 ganadores</p>
                    </div>
                    <div>
                        <p className="text-indigo-600">Combina primeros 4</p>
                        <p>$6,652 premio c/u</p>
                        <p className="text-indigo-600 font-normal text-xs">55 ganadores</p>
                    </div>
                    <div>
                        <p className="text-indigo-600">Combina todos en desorden</p>
                        <p>$22,149 premio c/u</p>
                        <p className="text-indigo-600 font-normal text-xs">1 ganadores</p>
                    </div>
                    <div>
                        <p className="text-indigo-600">Combina todos los 6</p>
                        <p>$88,374 premio c/u</p>
                        <p className="text-indigo-600 font-normal text-xs">0 ganadores</p>
                    </div>
                </div>
            </div>
            <div className="col-span-5 bg-yellow-300 grid place-content-center text-center p-10 rounded-lg">
                <h2 className="text-2xl font-bold text-indigo-500 mb-4">Usted Tiene</h2>
                <div className="bg-white rounded-md shadow-lg mb-5 p-2 justify-self-center">
                    <p className="text-2xl font-extrabold text-green-400">0 Tickets</p>
                </div>
                <Link to="/auth" className="text-sm underline font-semibold text-gray-700">¿Como funciona y cuando puedo ganar en el sorteo?</Link>
            </div>
            <div className="col-span-6 bg-indigo-600 p-8 text-white rounded-lg grid place-content-center">
                <h2 className="text-2xl mb-3 font-bold">Tus ahorros en USD</h2>
                <div className="flex mb-3">
                    <p className="text-3xl mr-auto text-yellow-400 font-extrabold">$450.20</p>
                    <button className="mr-2 bg-green-400 px-5 py-1 rounded-3xl font-semibold">DEPOSITAR</button>
                    <button className="border-2 border-green-400 px-5 py-1 rounded-3xl font-semibold">RETIRAR</button>
                </div>
                <ul className="text-sm">
                    <li>- Cada $5 en ahorros equivale a 1 ticket  para el sorteo</li>
                    <li>- En otras palabras: ¡mientras más ahorras, más tienes chances de ganar!</li>
                    <li>- Tus ahorros son en USD lo que te permite protegerte de la inflación y devaluación de tu dinero</li>
                </ul>
            </div>
        </div>
    );
}

export default Savings;