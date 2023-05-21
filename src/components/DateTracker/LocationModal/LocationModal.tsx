import { useEffect } from "react";
import classes from "./LocationModal.module.css";
import { Modal } from "@/components/UI/Modal/Modal";
import { TextInput } from "@/components/UI/Input/Text/Text";

type Props = {
  ref: React.RefObject<HTMLDialogElement>;
};

const CountryList = () => {
  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-2">
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
        <li className="bg-gray-200 rounded-[0.3rem] p-2 pl-8 hover:bg-gray-300 cursor-pointer">
          India
        </li>
      </ul>
    </div>
  );
};

const LocationModal = ({ ref }: Props) => {
  let modalRef;
  useEffect(() => {
    modalRef = ref?.current;
  }, []);
  return (
    <Modal ref={modalRef} title="Select a Pick - Up City">
      <TextInput />
      <CountryList />
    </Modal>
  );
};

export { LocationModal, LocationModal as default };
