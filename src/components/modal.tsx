import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function Modal({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-4">
        <div className="flex justify-between items-center">
          <Dialog.Title className="text-xl">{title}</Dialog.Title>
          <Dialog.Close className="text-gray-400 hover:text-gray-500">
            <AiOutlineClose />
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Close = Dialog.Close;
