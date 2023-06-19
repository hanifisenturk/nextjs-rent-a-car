import { TextInput } from "@/components/UI/Input/Text/Text";

const BillingStep = () => {
  return (
    <section>
      <div className="flex gap-8 justify-between mb-6">
        <div className="basis-1/2">
          <label
            className="mb-2 block font-semibold text-secondary-default"
            htmlFor="#"
          >
            Name
          </label>
          <TextInput placeholder="Your name" />
        </div>
        <div className="basis-1/2">
          <label
            className="mb-2 block font-semibold text-secondary-default"
            htmlFor="#"
          >
            Phone Number
          </label>
          <TextInput placeholder="Phone number" />
        </div>
      </div>
      <div className="flex gap-8 justify-between">
        <div className="basis-1/2">
          <label
            className="mb-2 block font-semibold text-secondary-default"
            htmlFor="#"
          >
            Address
          </label>
          <TextInput placeholder="Address" />
        </div>
        <div className="basis-1/2">
          <label
            className="mb-2 block font-semibold text-secondary-default"
            htmlFor="#"
          >
            Town / City
          </label>
          <TextInput placeholder="Town or city" />
        </div>
      </div>
    </section>
  );
};

export { BillingStep, BillingStep as default };
