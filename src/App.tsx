import { useState } from "react";
import { CardAccepted } from "./components/Business/CardAccepted/CardAccepted";
import { CardBack } from "./components/Business/CardBack/CardBack";
import { CardFront } from "./components/Business/CardFront/CardFront";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { useForm } from "./hooks/useForm";

// TODO
/*
 * MASK FOR CARD NUMBER
 */

function App() {
  const [formShown, setFormShown] = useState(true);
  const [acceptShown, setAcceptShown] = useState(false);

  const currentYear = new Date().getFullYear().toString().slice(-2);

  const form = useForm({
    initialValues: { name: "", cardNumber: "", expMonth: "", expYear: "", cvc: "" },
    validate: {
      name: (value: string) => {
        return value.length < 3
          ? "Name is too short"
          : !/^[a-zA-Z ]+$/.test(value)
          ? "Cardholder name can contain only letters and spaces"
          : undefined;
      },
      cardNumber: (value: string) => {
        return value.length < 19
          ? "Card number is too short"
          : value.length > 19
          ? "Card number is too long"
          : !/^[0-9 ]+$/.test(value)
          ? "Card number can contain only digits"
          : undefined;
      },
      expMonth: (value: string) => {
        return value.length < 2
          ? "Expiration month is too short"
          : value.length > 2
          ? "Expiration month is too long"
          : !/^[0-9 ]+$/.test(value)
          ? "Expiration month can contain only digits"
          : undefined;
      },
      expYear: (value: string) => {
        return value.length < 2
          ? "Expiration year is too short"
          : value.length > 2
          ? "Expiration year is too long"
          : !/^[0-9 ]+$/.test(value)
          ? "Expiration year can contain only digits"
          : +value < +currentYear
          ? "Expiration year can't be less than current year"
          : undefined;
      },

      cvc: (value: string) => {
        return value.length < 3
          ? "CVC is too short"
          : value.length > 3
          ? "CVC is too long"
          : !/^[0-9 ]+$/.test(value)
          ? "CVC can contain only digits"
          : undefined;
      },
    },
  });

  const cc = {
    name: form.getInputProps("name").value,
    cardNumber: form
      .getInputProps("cardNumber")
      .value.replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim(),
    expMonth: form.getInputProps("expMonth").value,
    expYear: form.getInputProps("expYear").value,
  };

  const cardAccepted = () => {
    setFormShown(false);
    setAcceptShown(true);
  };

  return (
    <div className="container">
      <div className="form-left">
        <div className="card-container">
          <CardFront cc={cc} />
          <CardBack cvc={form.getInputProps("cvc").value} />
        </div>
      </div>
      <div className="form-right">
        <div className="card-input-container">
          {acceptShown && <CardAccepted />}
          {formShown && (
            <form
              onSubmit={(e) => {
                form.onSumbit(e, (values) => {
                  cardAccepted();
                });
              }}
            >
              <Input
                fullWidth
                my={26}
                label="cardholder name"
                placeholder="e.g. Jane Appleseed"
                {...form.getInputProps("name")}
              />
              <Input
                maxLength={19}
                fullWidth
                my={26}
                label="card number"
                placeholder="e.g. 1234 5678 9123 0000"
                {...form.getInputProps("cardNumber")}
                value={form
                  .getInputProps("cardNumber")
                  .value.replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim()}
              />
              <div className="card-info flex">
                <div className="card-date">
                  <div className="input-label">exp. date (mm/yy)</div>
                  <div className="flex">
                    <Input width={80} pr={4} placeholder="MM" {...form.getInputProps("expMonth")} maxLength={2} />
                    <Input width={80} pl={4} placeholder="YY" {...form.getInputProps("expYear")} maxLength={2} />
                  </div>
                </div>
                <div className="card-cvc">
                  <Input maxLength={3} fullWidth label="CVC" placeholder="e.g. 123" {...form.getInputProps("cvc")} />
                </div>
              </div>
              <Button fullWidth pt={35} height={50}>
                Confirm
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
