import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PortalExample from '../Modal/PortalExample';



function Carrito({carrito, removeCart, removeCarrito}){
    let newCarrito=[...carrito];
    const [cantidadTotal,setCantidad] = useState(0)
    const [totalCompra, setTotal] = useState(0)
    useEffect(()=>{ 
        const total = carrito.reduce((acc,product) => acc + product.cantidad*product.precio,0)
        setTotal(total);
    },[carrito]);

    useEffect(() => {
        const total = carrito.reduce((acc, product) => acc + product.cantidad, 0);
        setCantidad(total);
    }, [carrito]);

    useEffect(()=>{ 
        const total = carrito.reduce((acc,product) => acc + product.cantidad*product.precio,0)
        setTotal(total);
    },[carrito]);

    console.log("new carrito"+newCarrito)
    return <div className="border-2 border-gray-500 flex flex-col justify-center w-full h-fit bg-white rounded-3xl">
        <p className="flex justify-start text-3xl text-amber-700 p-4 font-extrabold">Your Cart ({cantidadTotal}) </p>
        <div className="flex w-full justify-center items-center flex-col p-4">
        {carrito.length === 0 ? (
                <>
                    <img 
                        src="/images/illustration-empty-cart.svg" 
                        alt="Empty Cart" 
                        className="w-48 h-48 items-center"
                    />
                    <p className="text-xl text-amber-800 font-bold">your added items will appear here</p>
                </>
            ) : (
                <>
                    {newCarrito.map((product) => (
                        <div className=" p-4 w-full" key={product.id}>
                            <div className="grid grid-cols-2 w-full">
                                <div className="flex flex-col">
                                    <p className="flex justify-start text-2xl font-bold text-amber-800">{product.nombre}</p>
                                    <p className="flex justify-start text-2xl font-bold">{product.cantidad}x ${product.precio}  {product.cantidad*product.precio}</p>
                                </div>
                                <div className="flex justify-end items-center">
                                <FontAwesomeIcon 
                                    icon={faTimes} className="w-5 h-5" 
                                    onClick={()=>removeCart(product.id)}/>
                                </div>
                            </div>
                            <hr className="mt-1.5"></hr>
                        </div>
                    ))}
                    <p className="p-4 text-3xl">TOTAL COMPRA:            {totalCompra}</p>
                    <div className="bg-amber-800 rounded-2xl p-4 w-3/4 text-zinc-100 font-bold">
                            <PortalExample
                            carrito={carrito}
                            totalCompra={totalCompra}
                            removeCarrito={removeCarrito} />
                    </div>
                </>
            )}
        </div>
    </div>;
}

export default Carrito;