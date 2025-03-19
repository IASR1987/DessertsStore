import React from "react";

function Product({id,nombre, precio, image,cantidad, addCart}) {
  const newProduct = {
    id:id,
    nombre:nombre,
    precio:precio,
    image:image,
    cantidad:cantidad};
  return (
    <div className=" rounded-lg flex flex-col p-10">
        <div className="relative flex flex-col items-center">
            <img 
                src={image} 
                alt={nombre} 
                className="rounded-md"
            />
            <button className="p-4 rounded-2xl"
                onClick={() => addCart(newProduct)}
            > Add to Cart</button>
        </div>
        <div className="">
            <h1 className="flex text-2xl text-amber-800">{nombre}</h1>
            <h3 className="flex text-lg font-bold">{nombre}</h3>
            <p className="flex text-gray-700 text-xl">{precio} $</p>
        </div>
    </div>
  );
}

export default Product;
