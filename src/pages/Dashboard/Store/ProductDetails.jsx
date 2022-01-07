import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { CurrencyDollarIcon, GlobeIcon, DotsHorizontalIcon } from '@heroicons/react/outline'

const product = {
  name: '10 meses de historial de pago',
  price: '$200',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Store', href: '/dashboard/store' },
  ],
  images: [
    {
      id: 1,
      imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/81vGuq6qAkL.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    }
  ],
  description: `
    <p>Cómo Administrar tu Dinero: Descubre cómo administrar tus finanzas personales</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
}
const policies = [
  { name: 'International delivery', icon: GlobeIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  return (
    <div className="p-5 overflow-auto">
      <div className="bg-white pt-6 pb-16 rounded-lg sm:pb-24">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol role="list" className="flex items-center space-x-4">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-4 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-6 lg:col-span-7">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                <p className="text-xl font-medium text-gray-900">{product.price}</p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      See all {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
                {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className="lg:col-span-2 lg:row-span-2 rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <form>
                <button
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900 mb-2">Tus Pagos:</h2>
                <ul className="prose prose-sm text-gray-500">
                  <li className="flex border-b p-3">
                    <p>Pagas <span className="text-green-600 font-bold">$20 USD</span> el <span className="text-black font-bold">11 de Noviembre de 2021</span></p>
                    <p className="ml-auto">$180 USD</p>
                  </li>
                  <li className="flex border-b p-3">
                    <p>Pagas <span className="text-green-600 font-bold">$20 USD</span> el <span className="text-black font-bold">11 de Diciembre de 2021</span></p>
                    <p className="ml-auto">$160 USD</p>
                  </li>
                  <li className="flex border-b p-3">
                    <p>Pagas <span className="text-green-600 font-bold">$20 USD</span> el <span className="text-black font-bold">11 de Enero de 2022</span></p>
                    <p className="ml-auto">$140 USD</p>
                  </li>
                  <li className="flex border-b p-3">
                    <DotsHorizontalIcon className="w-6 h-6 m-auto"/>
                  </li>
                  <li className="flex border-b p-3">
                    <p>Pagas <span className="text-green-600 font-bold">$20 USD</span> el <span className="text-black font-bold">11 de Agosto de 2022</span></p>
                    <p className="ml-auto">$0 USD</p>
                  </li>
                </ul>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div key={policy.name} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                      <dt>
                        <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}