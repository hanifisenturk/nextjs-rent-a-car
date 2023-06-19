import { SafetyIcon } from "@/Icons/Safety";
import { Checkbox } from "@/components/Inputs/Checkbox/Checkbox";
import { PrimaryButton } from "@/components/UI/Button/PrimaryButton";

const ConformationStep = () => {
  return (
    <section>
      <div className="bg-[#F6F7F9] pl-8 py-4 rounded-[0.625rem] mb-6">
        <Checkbox
          label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
          labelClassName="!text-base !text-black"
        />
      </div>
      <div className="bg-[#F6F7F9] pl-8 py-4 rounded-[0.625rem] mb-8">
        <Checkbox
          label="I agree with our terms and conditions and privacy policy."
          labelClassName="!text-base !text-black"
        />
      </div>
      <PrimaryButton
        text="Rent Now"
        size="large"
        className="!rounded-[0.625rem] w-[8.75rem] h-[3.5rem] mb-8"
      />
      <div>
        <SafetyIcon />
        <p className="font-semibold text-secondary-default mt-4 mb-2">
          All your data is safe
        </p>
        <p className="text-secondary-300 font-medium text-sm">
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </section>
  );
};

export { ConformationStep, ConformationStep as default };
