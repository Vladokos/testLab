import { Debt } from "./mainComponents/Debt";
import { FAQ } from "./mainComponents/FAQ";
import { Form } from "./mainComponents/Form";
import { HowItWorks } from "./mainComponents/HowItWorks";
import { Reviews } from "./mainComponents/Reviews";
import { Statistic } from "./mainComponents/Statistic";

export const Main = () => {
  return (
    <main>
      <HowItWorks />
      <Debt />
      <Reviews />
      <FAQ/>
      <Statistic/>
      <Form/>
    </main>
  );
};
