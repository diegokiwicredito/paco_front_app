import React, { useState, cloneElement, createElement } from 'react';
import { Link } from 'react-router-dom'
import { ShoppingBagIcon, FireIcon, CashIcon, AdjustmentsIcon, HomeIcon } from '@heroicons/react/outline'

function Sidebar(props) {

    const [items] = useState([
        {
            label: 'Construye Crédito',
            icon: HomeIcon,
            path: '/dashboard/home',
            status: 'active'
        },
        {
            label: 'Ahorra en USD',
            icon: FireIcon,
            path: '/dashboard/savings',
            status: 'active'
        },
        {
            label: 'Mejorar Mi Puntaje',
            icon: ShoppingBagIcon,
            path: '/dashboard/score',
            status: 'active'
        },
        {
            label: 'Avance de Nómina',
            icon: CashIcon,
            path: '#',
            status: 'soon'
        },
        {
            label: 'Cuenta',
            icon: AdjustmentsIcon,
            path: '/dashboard/account',
            status: 'active'
        }
    ])

    return (
        <div className="grid content-start justify-start h-full w-80 p-5">
            <Link to="/" className="grid place-content-center py-8 mb-6">
                <figure>
                    <svg className="w-40" viewBox="0 0 113 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.0851 31.5854C70.5286 31.5854 67.0135 30.6052 64.5398 28.645C62.0664 26.6847 60.8296 23.8347 60.8296 20.0948C60.8296 17.8028 61.3992 15.7821 62.5382 14.0328C63.6774 12.2836 65.3211 10.9264 67.4691 9.96134C69.6498 8.99623 72.2211 8.51367 75.1827 8.51367C77.4284 8.51367 79.3163 8.70972 80.8459 9.1018C82.4081 9.49384 83.7913 10.097 84.9956 10.9114C85.3536 11.1225 85.5326 11.3939 85.5326 11.7257C85.5326 11.9669 85.4024 12.2836 85.1419 12.6756L83.1403 15.8875C82.9125 16.31 82.6359 16.5211 82.3105 16.5211C82.1151 16.5211 81.8058 16.4004 81.3829 16.1591C80.504 15.6465 79.6743 15.2693 78.893 15.0281C78.1444 14.7868 77.2006 14.6662 76.0616 14.6662C74.4341 14.6662 73.1161 15.1487 72.1071 16.1139C71.1306 17.0788 70.6424 18.4058 70.6424 20.0948C70.6424 21.814 71.1468 23.1409 72.1558 24.0757C73.1649 24.9805 74.5481 25.4329 76.3055 25.4329C77.3469 25.4329 78.291 25.2973 79.1373 25.0257C79.9835 24.7545 80.8459 24.3775 81.7247 23.8949C82.1803 23.6535 82.5057 23.5329 82.7012 23.5329C82.9939 23.5329 83.2543 23.744 83.4821 24.1664L85.679 27.6497C85.8418 27.9512 85.9232 28.1926 85.9232 28.3734C85.9232 28.645 85.7277 28.9012 85.3374 29.1426C83.9704 29.957 82.4731 30.56 80.8459 30.9522C79.251 31.3744 77.3308 31.5854 75.0851 31.5854Z" fill="#F6C74E" />
                        <path d="M2.53867 30.7625C1.59487 30.7625 0.927649 30.5814 0.537011 30.2197C0.179005 29.8577 0 29.2846 0 28.5005V2.3072C0 1.52305 0.19516 0.950019 0.585799 0.588125C0.976437 0.196052 1.62718 0 2.53867 0H14.4995C19.056 0 22.4083 0.889718 24.5567 2.6691C26.7047 4.4485 27.7787 7.10251 27.7787 10.6311C27.7787 14.1296 26.7047 16.7685 24.5567 18.5479C22.4409 20.2973 19.0887 21.1719 14.4995 21.1719H9.86164V28.5005C9.86164 29.2846 9.66648 29.8577 9.27584 30.2197C8.8852 30.5814 8.21797 30.7625 7.27417 30.7625H2.53867ZM13.7186 14.6122C15.053 14.6122 16.0783 14.2804 16.7943 13.6169C17.5426 12.9534 17.9171 11.9581 17.9171 10.6311C17.9171 9.27396 17.5426 8.26364 16.7943 7.60013C16.0783 6.93664 15.053 6.60487 13.7186 6.60487H9.86164V14.6122H13.7186Z" fill="#F6C74E" />
                        <path d="M39.308 31.4409C36.2488 31.4409 33.7916 30.5361 31.9363 28.7268C30.1136 26.8869 29.2025 24.3084 29.2025 20.9907C29.2025 18.4574 29.8209 16.2406 31.0574 14.3407C32.3269 12.4407 34.1008 10.9779 36.379 9.95253C38.6899 8.89694 41.3423 8.36914 44.3366 8.36914C46.8103 8.36914 48.991 8.62549 50.8786 9.1382C52.7988 9.62075 54.5562 10.3295 56.1511 11.2644V29.36C56.1511 29.9331 56.0374 30.31 55.8092 30.4909C55.5815 30.672 55.1259 30.7624 54.4425 30.7624H49.4627C49.1047 30.7624 48.8281 30.7172 48.633 30.6265C48.4375 30.5061 48.275 30.325 48.1448 30.0837L47.5099 28.7268C46.5661 29.6615 45.4271 30.3403 44.0926 30.7624C42.7908 31.2148 41.196 31.4409 39.308 31.4409ZM42.9698 25.2884C44.239 25.2884 45.2316 25.0018 45.9476 24.4291C46.6636 23.856 47.0216 23.0416 47.0216 21.9859V14.9288C46.4035 14.6574 45.6222 14.5216 44.6784 14.5216C42.9534 14.5216 41.5701 15.0796 40.5287 16.1954C39.5197 17.3113 39.0153 18.8796 39.0153 20.9003C39.0153 23.8258 40.3333 25.2884 42.9698 25.2884Z" fill="#F6C74E" />
                        <ellipse cx="100.397" cy="20.2568" rx="11.7582" ry="11.7431" fill="#F6C74E" />
                        <ellipse cx="100.413" cy="20.2566" rx="5.01272" ry="5.28441" fill="white" />
                    </svg>
                </figure>
            </Link>
            <ul className='mb-36'>
                {items.map(item => {
                    return (<li className="">
                        <Link to={item.path} className="flex px-8 py-4">
                            <div className="pr-4">
                                {createElement(item.icon, { className: 'w-6 h-6 text-indigo-700' })}
                            </div>
                            <div>
                                <p>{item.label}</p>
                                {item.status == 'soon' && <p className="absolute text-xs text-yellow-400 font-semibold">¡Proximamente!</p>}
                            </div>
                        </Link>
                    </li>)
                })}
            </ul>
            <div className='flex flex-col items-center bg-gradient-to-b from-indigo-600 to-green-400 text-white rounded-lg px-6 pb-8 mx-auto w-full'>
                <img src="/dollar-front-color.png" alt="" className='relative -top-16 w-36 -mb-16'/>
                <p className='text-center font-semibold mb-6'>Entre mas amigos invites mas posibilidades tienes de ganar</p>
                <button className='bg-white text-indigo-600 font-semibold py-2 px-10 rounded-lg'>
                    Invita ahora
                </button>
            </div>
        </div>
    );
}

export default Sidebar;