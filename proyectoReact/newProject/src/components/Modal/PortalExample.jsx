import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';

export default function PortalExample({carrito,totalCompra,removeCarrito}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="text-2xl" onClick={() => setShowModal(true)}>
        Confirm Order
      </button>
      {showModal && createPortal(
        <ModalContent 
          carrito={carrito}
          totalCompra={totalCompra}
          removeCarrito={removeCarrito}
          onClose={() => setShowModal(false)} />,
          document.body
      )}
    </>
  );
}

