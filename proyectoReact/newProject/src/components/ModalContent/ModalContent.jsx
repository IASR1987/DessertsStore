export default function ModalContent({ onClose, carrito,totalCompra,removeCarrito }) {
  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-25 z-50">
      <div className="bg-amber-100 w-2/5 h-auto border-2 border-b-gray-900 rounded-2xl flex flex-col">
        <h1 className="text-6xl font-bold p-6 text-emerald-900">Order Confirmed</h1>
        {carrito.map((product) => (
                                <div className="bg-amber-100  w-4/5 rounded-3xl flex mx-auto " key={product.id}>
                                    <div className="grid grid-cols-6 w-full  bg-amber-50 p-8 border-2 border-amber-200 rounded-2xl">
                                          <div className="col-span-1">
                                            <img src={product.url}/>
                                          </div>
                                          <div className="col-span-4 ml-6">
                                            <p className="flex justify-start text-3xl font-bold">{product.nombre}</p>
                                            <div className="flex flex-row space-x-8">
                                              <span className="flex justify-start text-3xl font-bold text-amber-800">{product.cantidad}x</span>
                                              <span className="flex justify-start text-3xl font-bold text-gray-600">@${product.precio}</span>
                                            </div>
                                          </div>
                                          <div className="col-span-1 text-5xl flex justify-center items-center font-bold">
                                            <p> ${product.precio*product.cantidad} </p>
                                          </div>
                                    </div>
                                </div>
                            ))}
        <div className="w-4/5 bg-amber-50 p-8 border-2 border-amber-200 rounded-2xl mx-auto flex justify-between items-center font-bold ">
          <p className="text-4xl">Order Total</p>
          <p className="text-6xl"> ${totalCompra.toFixed(2)} </p> 
        </div>
        <button className="flex mx-auto justify-center p-3 mb-6 border-2 border-amber-500 bg-amber-200 text-2xl text-gray-600 font-extrabold w-2/5 rounded-2xl" onClick={() => { onClose(); removeCarrito(); }}>Buy Now</button>
      </div>
    </div>
  );
}

