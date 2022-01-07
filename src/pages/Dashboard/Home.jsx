import React from 'react';
import { Link } from 'react-router-dom';

const people = [
    {
        title: 'Libro: 5 Habitos de la gente altamente efectiva',
        department: 'Optimization',
        role: '5 DE 12',
        status: 'pending',
        email: 'jane.cooper@example.com',
        image:
            '/1.png',
    },
    {
        title: 'Prestamo por $5000 MXN',
        department: 'Optimization',
        role: '12 DE 12',
        status: 'payed',
        email: 'jane.cooper@example.com',
        image:
            '/2.png',
    },
    {
        title: 'Libro: Como endeudarse y no morir en el intento',
        department: 'Optimization',
        role: '0 DE 12',
        status: 'negative',
        email: 'jane.cooper@example.com',
        image:
            '/3.png',
    },
    // More people...
]

function Home(props) {
    return (
        <div className="home grid gap-6 items-start p-5">
            <div className="grid grid-cols-12 gap-4">
                {/* <div className="home__shortcut grid p-6 bg-indigo-600 text-white rounded-lg">
                    <div className="mr-8 mb-6">
                        <h2 className="font-bold text-2xl mb-3">Monitorea tu puntaje <span className="text-yellow-400">gratis</span></h2>
                        <ul className="list-disc list-inside text-sm leading-7">
                            <li>Actualizamos tu puntaje y reporte crediticio mensualmente</li>
                            <li>Evalua el progreso de tu historial crediticio y ve donde puedes mejorarlo</li>
                            <li>Un buen puntaje te ayuda a obtener mejores términos de préstamos y empleos </li>
                            <li>Estamos aliados con el Círculo de Crédito para facilitarte este servicio</li>
                        </ul>
                    </div>
                    <button className="bg-green-400 py-2 px-6 rounded-3xl justify-self-end">COMENZAR</button>
                </div> */}
                <div className="home__shortcut flex place-content-center items-center p-8 bg-indigo-600 text-white rounded-lg col-span-8">
                    <div className="mr-10">
                        <img src="/score.svg" alt="" className='w-60'/>
                    </div>
                    <div className='w-5/12'>
                        <h2 className='text-2xl'>¡Tu Puntaje es Excelente!</h2>
                        <p>Tu puntaje esta por encima del promedio de los mexicanos</p>
                        <button></button>
                    </div>
                </div>
                <div className="home__shortcut bg-white p-6 rounded-lg col-span-4">
                    <div className="mr-8 mb-4">
                        <h2 className="font-bold text-lg text-indigo-600">Cómo funciona tu Cuenta de Crédito</h2>
                        <p>Aprende cómo Kiwi te ayuda a construir tu historial crediticio y los beneficios de tener un buen crédito</p>
                    </div>
                    <Link to="/auth" className="text-yellow-400 underline">Aprende Más</Link>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className="font-bold text-lg">Construye tu <span className="text-yellow-400">crédito</span></h2>
                    <p>Obtén acceso a una línea de crédito revolvente con 0% interés y cero costos</p>
                </div>
                <button className="bg-green-400 py-2 px-6 rounded-3xl">EMPIEZA</button>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            MONTHS
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {people.map((person) => (
                                        <tr key={person.email}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-xl" src={person.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm text-gray-900">{person.title}</div>
                                                        <div className="text-sm text-gray-500">{person.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {person.status == 'negative' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                    Negativo
                                                </span>}
                                                {person.status == 'pending' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    En Curso
                                                </span>}
                                                {person.status == 'payed' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Pagado
                                                </span>}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Ver Detalles
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;