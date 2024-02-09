import { useAtom } from "jotai";
import { FC } from "react";
import { modalAtom } from "../../atoms/modalAtom/modalAtom";

const ModalWrapper: FC = () => {
  const [modalContent, setModalContent] = useAtom(modalAtom);

  if (!modalContent) return null;
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-stone-50 bg-opacity-40 fixed top-0 left-0 z-10">
      <button
        onClick={() => setModalContent(null)}
        className="fixed top-0 right-0 text-3xl"
      >
        X
      </button>
      {modalContent}
    </div>
  );
};

export default ModalWrapper;
