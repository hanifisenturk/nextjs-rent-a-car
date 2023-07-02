import { TextInput } from "@/components/UI/Input/Text/Text";

const BillingStep = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-8 justify-between mb-6">
        <div className="basis-1/2">
          <TextInput label="Name" placeholder="Your name" />
        </div>
        <div className="basis-1/2">
          <TextInput label="Phone Number" placeholder="Phone number" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        <div className="basis-1/2">
          <TextInput label="Address" placeholder="Address" />
        </div>
        <div className="basis-1/2">
          <TextInput label="Town / City" placeholder="Town or city" />
        </div>
      </div>
    </section>
  );
};

export { BillingStep, BillingStep as default };
