import { BillingStep } from "@/components/CheckoutSteps/Billing/Billing";
import classes from "./page.module.css";
import { CheckoutFormCard } from "@/components/CheckoutFormCard/CheckoutFormCard";
import { CheckoutStep } from "@/components/CheckoutSteps/Payment/Payment";
import { ConformationStep } from "@/components/CheckoutSteps/Confirmation/Confirmation";
import { RentalSummary } from "@/components/RentalSummary/RentalSummary";

export default function CheckoutPage() {
  return (
    <div className={classes.container}>
      <form>
        <CheckoutFormCard
          step={1}
          title="Billing Info"
          subtitle="Please enter your billing info"
        >
          <BillingStep />
        </CheckoutFormCard>
        <CheckoutFormCard
          step={2}
          title="Rental Info"
          subtitle="Yes! You can update your rental info here if you want 😍"
        >
          test
        </CheckoutFormCard>
        {process.env.NODE_ENV === "development" && (
          <CheckoutFormCard
            step={3}
            title="Payment Method"
            subtitle="Please select your payment method"
          >
            <CheckoutStep />
          </CheckoutFormCard>
        )}
        <CheckoutFormCard
          step={4}
          title="Confirmation"
          subtitle="We are getting to the end. Just few clicks and your rental is ready!"
        >
          <ConformationStep />
        </CheckoutFormCard>
      </form>
      <RentalSummary />
    </div>
  );
}
