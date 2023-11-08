import { Modal } from "@mantine/core";
import { ReactNode } from "react";

interface ModalMantineProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
const ModalMantine = ({
  children,
  open,
  onClose,
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal.Root opened={open} onClose={onClose} size={"auto"}>
      {children}
    </Modal.Root>
  );
};

const ModalContent = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <>
      <Modal.Overlay />
      <Modal.Content className="p-4">
        <div className="flex justify-between items-center">
          <Modal.Title className="text-xl">{title}</Modal.Title>
          <Modal.CloseButton />
        </div>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </>
  );
};

ModalMantine.Content = ModalContent;
ModalMantine.Close = Modal.CloseButton;

export default ModalMantine;
