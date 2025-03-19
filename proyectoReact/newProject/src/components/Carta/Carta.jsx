import React, { useState } from "react";
import Product from "../product/Product";
import Carrito from "../Carrito/Carrito.jsx";

function Carta() {
  const products = [
    { id:0, nombre: "Baklava", precio: 25, url: "/images/image-baklava-desktop.jpg", cantidad:0},
    { id:1, nombre: "Brownie", precio: 10, url: "/images/image-brownie-desktop.jpg", cantidad:0},
    { id:2, nombre: "Cake", precio: 5, url: "/images/image-cake-desktop.jpg" , cantidad:0},
    { id:3, nombre: "Creme Brulee", precio: 25, url: "/images/image-creme-brulee-desktop.jpg" , cantidad:0},
    { id:4, nombre: "Macaron", precio: 10, url: "/images/image-macaron-desktop.jpg" , cantidad:0},
    { id:5, nombre: "Meringue", precio: 5, url: "/images/image-meringue-desktop.jpg" , cantidad:0},
    { id:6, nombre: "Panna-Cotta", precio: 25, url: "/images/image-panna-cotta-desktop.jpg" , cantidad:0},
    { id:7, nombre: "Tiramisú", precio: 10, url: "/images/image-tiramisu-desktop.jpg" , cantidad:0},
    { id:8, nombre: "Waffle", precio: 5, url: "/images/image-waffle-desktop.jpg" , cantidad:0}
  ];

  const [carrito,setCarrito] = useState([])

  const addCart = (product) => {

    const existingProduct = carrito.find((newProduct) => newProduct.id === product.id);
    
    if(existingProduct){
      setCarrito((prevCarrito) => 
        prevCarrito.map((p) => 
          p.id === product.id ? {...p, cantidad: p.cantidad+1} : p
      ))
    }else{
      let newProduct = {...product,cantidad:1}
      setCarrito((prevCarrito) =>[...prevCarrito,newProduct])
    }
  }

  const removeCart = (id) => {
    console.log(id)
    setCarrito((prevCarrito) => prevCarrito.filter((p) => p.id !== id));
  }

  const removeCarrito = () => {
    alert("Compra Realizada con exito")
    setCarrito([])
  }

  return (
    <div className=" grid grid-cols-12 ">
        <div className="grid col-span-9 gap-4 p-4 h-full">
        <p className="flex justify-start m-7 text-7xl font-bold text-gray-800 mb-4" >Desserts</p>
            <div className="grid grid-cols-3 pt-35 gap-4">
                {products.map((product) => (
                    <div className="flex justify-center items-center w-full h-3/6 "
                        key={product.id}
                         >
                        <Product
                            id={product.id}
                            nombre={product.nombre}
                            precio={product.precio}
                            image={product.url}
                            cantidad={product.cantidad}
                            addCart={() => addCart(product)}
                        />
                    </div>
                ))}
            </div>
        </div>
        <div className=" flex justify-center col-span-3">
            <Carrito
                carrito={carrito}
                removeCart={removeCart}
                removeCarrito={removeCarrito}
             />
        </div>
    </div>

  );
}

export default Carta;
