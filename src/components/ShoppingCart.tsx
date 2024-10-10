
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { CartItem } from "./CartItem";
import { useAppContext } from "../context/AppContext";

export const ShoppingCart = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { state } = useAppContext()
  return (
    <div className="flex flex-col gap-2">
      <Button onPress={onOpen} isIconOnly variant="faded">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </Button>
      <Modal
        isOpen={isOpen}
        placement="top"
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">Carrito de compras</ModalHeader>
              {
                state.cartItems.length != 0 &&
                <>
                  <ModalBody>
                    {
                      state.cartItems.map((cartItem) => (
                        <CartItem key={cartItem.name} {...cartItem} />
                      ))
                    }
                  </ModalBody>
                  <ModalFooter className="flex-col pt-0 gap-0">
                    <div className="flex justify-between font-light text-md">
                      <span>Productos:</span>
                      <span>{state.totalItems}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-xl mb-6">
                      <span>Total:</span>
                      <span>{state.totalPrice} PEN</span>
                    </div>
                    <Button color="primary" onPress={onClose} className="w-full">
                      Comprar
                    </Button>
                  </ModalFooter>
                </>
              }
              {
                state.cartItems.length == 0 &&
                <ModalBody>
                  <span className="w-full text-center mb-3">Su carrito está vacío</span>
                </ModalBody>
              }
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
