import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
    {
        name: '10 meses de historial de pago',
        price: 200,
        description: 'Mitos y Realidades de las Tarjetas de Crédito',
        thunmbanil_url: ''
    },
    {
        name: '6 meses de historial de pago',
        price: 120,
        description: 'Reparación de Crédito: La guía definitiva para mejorar su calificación crediticia',
        thunmbanil_url: ''
    },
    {
        name: '8 meses de historial de pago',
        price: 120,
        description: 'Finanzas Personales: Cómo administrar tu dinero y lograr una jubilación anticipada',
        thunmbanil_url: ''
    },
    {
        name: '6 meses de historial de pago',
        price: 150,
        description: 'Presupuestar Ahorrar e Invertir: La trinidad divina de las finanzas personales',
        thunmbanil_url: ''
    },
    {
        name: '10 meses de historial de pago',
        price: 200,
        description: 'Cómo Administrar tu Dinero: Descubre cómo administrar tus finanzas personales',
        thunmbanil_url: ''
    },
    {
        name: '6 meses de historial de pago',
        price: 120,
        description: 'The Unbanking of America: How the New Middle Class Survives',
        thunmbanil_url: ''
    },
]

function ProductList(props) {
    return (
        <div className="p-8">
            <p className="mb-2 font-bold text-lg text-purple-600">Selecciona un artículo</p>
            <p className="mb-8">
                Debe realizar una compra para abrir su cuenta de crédito Kiwi. Los montos de compra varían, pero cada artículo solo le costará $20 al mes.
                Haga clic en un artículo para ver los detalles y proceder con el pago.
            </p>
            <div className="grid grid-cols-2 gap-6">
                {PRODUCTS.map(product => (<Link to="/dashboard/store/product" className="flex items-start p-4 bg-white rounded-lg">
                    <img src="/1.png" alt="" className="mr-4"/>
                    <div>
                        <h3 className="text-purple-600 font-bold">{ product.name }</h3>
                        <p>{ product.description }</p>
                        <p className="text-xl font-bold">{ product.price }</p>
                    </div>
                </Link>))}
            </div>
        </div>
    );
}

export default ProductList;