import React, { useEffect } from 'react';
import { useLocation } from "react-router"
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/solid'

const steps = [
  {
    name: 'Correo Electronico & Contraseña',
    description: 'Vitae sed mi luctus laoreet.',
    href: '/auth/register',
    status: 'complete'
  },
  {
    name: 'Nombre Completo',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '/auth/register/fullname',
    status: 'complete',
  },
  {
    name: 'Fecha De Nacimiento',
    description: 'Penatibus eu quis ante.',
    href: '/auth/register/datebirth',
    status: 'complete'
  },
  {
    name: 'Numero De Celular ',
    description: 'Faucibus nec enim leo et.',
    href: '/auth/register/phonenumber',
    status: 'upcoming'
  },
  {
    name: 'Dirección',
    description: 'Iusto et officia maiores porro ad non quas.',
    href: '/auth/register/address',
    status: 'upcoming'
  },
  {
    name: 'CURP',
    description: 'Iusto et officia maiores porro ad non quas.',
    href: '/auth/register/nationalcredentials',
    status: 'upcoming'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Steps = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.href === location.pathname ? (
              <>


                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                ) : null}

                <Link to={step.href} className="relative flex items-start group" aria-current="step">
                  <span className="h-9 flex items-center" aria-hidden="true">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                      <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </Link>
                {children && <div className="p-8 ml-4">
                  {children}
                </div>}
              </>
            ) : step.status === 'complete' ? (
              <>




                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
                ) : null}
                <Link to={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </Link>


              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                ) : null}
                <Link to={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center" aria-hidden="true">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </Link>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Steps;