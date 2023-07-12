import Image from "next/image";
import { Card } from "@/components/UI/Card/Card";
import { TextInput } from "@/components/UI/Input/Text/Text";
import { Radio } from "@/components/UI/Input/Radio/Radio";

const CheckoutStep = () => {
  return (
    <section>
      <Card className="bg-[#F6F7F9] rounded-[0.625rem] py-4 px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <Radio label="Credit Card" />
          <Image
            src="/mastercard.png"
            alt="Mastercard"
            width={32}
            height={20}
            quality={100}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between mb-6">
          <div className="basis-1/2">
            <TextInput
              label="Card Number"
              placeholder="Card number"
              className="!bg-white"
            />
          </div>
          <div className="basis-1/2">
            <TextInput
              label="Expiration Date"
              placeholder="MM/YY"
              className="!bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="basis-1/2">
            <TextInput
              label="Card Holder"
              placeholder="Card holder"
              className="!bg-white"
            />
          </div>
          <div className="basis-1/2">
            <TextInput label="CVC" placeholder="CVC" className="!bg-white" />
          </div>
        </div>
      </Card>
      <Card className="bg-[#F6F7F9] rounded-[0.625rem] py-4 px-8 flex items-center mt-3">
        <Radio label="Paypal" />
      </Card>
      <Card className="bg-[#F6F7F9] rounded-[0.625rem] py-4 px-8 flex items-center mt-3">
        <Radio label="Bitcoin" />
      </Card>
    </section>
  );
};

export { CheckoutStep, CheckoutStep as default };
