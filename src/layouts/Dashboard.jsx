import * as React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';

const people = [
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },

    // More people...
]
const activityItems = [
    { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 1, person: people[1], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 1, person: people[2], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 1, person: people[3], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 1, person: people[4], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    // More items...
]

function Dashboard(props) {
    return (
        <div className="dashboard h-screen grid bg-indigo-50">
            <Sidebar />
            <div className="grid p-6 pl-2">
                <div className='grid grid-cols-12 bg-white rounded-xl bg-gradient-to-r from-white to-indigo-50 overflow-hidden'>
                    <div className='col-span-9'>
                        <Outlet />
                    </div>
                    <div className='col-span-3 p-4 bg-white'>
                        <div className="col-span-6 bg-indigo-600 p-8 text-white rounded-lg grid place-content-center mb-6">
                            <h2 className="text-2xl mb-3 font-bold">Tus ahorros en USD</h2>
                            <div className="flex mb-3">
                                <p className="text-3xl mr-auto text-yellow-400 font-extrabold">$450.20</p>
                            </div>
                            <ul className="text-sm">
                                <li>- Cada $5 en ahorros equivale a 1 ticket  para el sorteo</li>
                                <li>- En otras palabras: ¡mientras más ahorras, más tienes chances de ganar!</li>
                                {/* <li>- Tus ahorros son en USD lo que te permite protegerte de la inflación y devaluación de tu dinero</li> */}
                            </ul>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <button className="bg-green-400 text-white py-2 rounded-3xl font-semibold">DEPOSITAR</button>
                            <button className="border-2 border-green-400 text-green-400 py-2 rounded-3xl font-semibold">RETIRAR</button>
                        </div>
                        <div class="relative pt-8 pb-6">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='mb-2 font-semibold'>Lista De Amigos</h4>
                            <ul role="list" className="divide-y divide-gray-200 px-3">
                                {activityItems.map((activityItem) => (
                                    <li key={activityItem.id} className="py-4">
                                        <div className="flex space-x-3">
                                            <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                                                    <p className="text-sm text-gray-500">{activityItem.time}</p>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    Deployed {activityItem.project} ({activityItem.commit} in master) to {activityItem.environment}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;