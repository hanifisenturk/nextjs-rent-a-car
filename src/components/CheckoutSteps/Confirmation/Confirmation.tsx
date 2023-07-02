import { SafetyIcon } from "@/Icons/Safety";
import { Checkbox } from "@/components/UI/Input/Checkbox/Checkbox";
import { PrimaryButton } from "@/components/UI/Button/PrimaryButton";

const ConformationStep = () => {
  return (
    <section>
      <div className="bg-[#F6F7F9] pl-8 py-4 pr-4 lg:pr-0 rounded-[0.625rem] mb-5 lg:mb-6">
        <Checkbox
          label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
          labelClassName="!text-xs lg:!text-base !leading-[160%] lg:!leading-auto !text-black"
        />
      </div>
      <div className="bg-[#F6F7F9] pl-8 py-4 pr-4 lg:pr-0 rounded-[0.625rem] mb-6 lg:mb-8">
        <Checkbox
          label="I agree with our terms and conditions and privacy policy."
          labelClassName="!text-xs lg:!text-base !leading-[160%] lg:!leading-auto !text-black"
        />
      </div>
      <PrimaryButton
        text="Rent Now"
        size="large"
        className="lg:!rounded-[0.625rem] w-[6.25rem] h-[2.25rem] lg:w-[8.75rem] lg:h-[3.5rem] mb-8 flex items-center justify-center text-xs lg:text-base"
      />
      <div>
        <SafetyIcon />
        <p className="font-semibold text-secondary-default mt-4 mb-2">
          All your data is safe
        </p>
        <p className="text-secondary-300 font-medium text-xs lg:text-sm">
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </section>
  );
};

export { ConformationStep, ConformationStep as default };
