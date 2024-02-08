import { FC } from "react";

type Props = { children: React.ReactNode };

const ModalWrapper: FC<Props> = ({ children }) => {
  console.log("rendering");
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-stone-50 bg-opacity-40 fixed top-0 left-0 z-10">
      {children}
    </div>
  );
};

export default ModalWrapper;
