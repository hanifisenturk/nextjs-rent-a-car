import Image from "next/image";
import { Card } from "@/components/UI/Card/Card";
import classes from "./Payment.module.css";
import { TextInput } from "@/components/UI/Input/Text/Text";

const CheckoutStep = () => {
  return (
    <section>
      <Card className="bg-[#F6F7F9] rounded-[0.625rem] py-4 px-8 ">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center w-full">
            <input
              className={classes.radio}
              type="radio"
              name="paymentType"
              id="creditCard"
              value={"creditCard"}
            />
            <label
              htmlFor="creditCard"
              className="pl-2 font-semibold w-full cursor-pointer"
            >
              Credit Card
            </label>
          </div>
          <Image
            src="/mastercard.png"
            alt="Mastercard"
            width={32}
            height={20}
            quality={100}
          />
        </div>
        <div className="flex gap-8 justify-between mb-6">
          <div className="basis-1/2">
            <label
              className="mb-2 block font-semibold text-secondary-default"
              htmlFor="#"
            >
              Card Number
            </label>
            <TextInput placeholder="Card number" className="!bg-white" />
          </div>
          <div className="basis-1/2">
            <label
              className="mb-2 block font-semibold text-secondary-default"
              htmlFor="#"
            >
              Expiration Date
            </label>
            <TextInput placeholder="MM/YY" className="!bg-white" />
          </div>
        </div>
        <div className="flex gap-8 justify-between">
          <div className="basis-1/2">
            <label
              className="mb-2 block font-semibold text-secondary-default"
              htmlFor="#"
            >
              Card Holder
            </label>
            <TextInput placeholder="Card holder" className="!bg-white" />
          </div>
          <div className="basis-1/2">
            <label
              className="mb-2 block font-semibold text-secondary-default"
              htmlFor="#"
            >
              CVC
            </label>
            <TextInput placeholder="CVC" className="!bg-white" />
          </div>
        </div>
      </Card>
      <Card className="bg-[#F6F7F9] rounded-[0.625rem] py-4 px-8 flex items-center mt-3">
        <input
          className={classes.radio}
          type="radio"
          name="paymentType"
          id="paypal"
          value={"paypal"}
        />
        <label htmlFor="paypal" className="pl-2 font-semibold">
          Paypal
        </label>
      </Card>
      <Card className="bg-[#F6F7F9] rounded-[0.625rem] py-4 px-8 flex items-center mt-3">
        <input
          className={classes.radio}
          type="radio"
          name="paymentType"
          id="bitcoin"
          value={"bitcoin"}
        />
        <label htmlFor="bitcoin" className="pl-2 font-semibold">
          Bitcoin
        </label>
      </Card>
    </section>
  );
};

export { CheckoutStep, CheckoutStep as default };
