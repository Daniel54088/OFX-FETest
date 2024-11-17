import React, { useState, useMemo, useCallback, useEffect } from "react";
import classes from "./Rates.module.css";

// Components
import ProgressBar from "../../Components/ProgressBar";
import NumberInput from "../../Components/NumberInput/NumberInput";
import DropdownSection from "./Components/DropdownSection";
import ResultsSection from "./Components/ResultSection";

// Hooks
import { useAnimationFrame } from "../../Hooks/useAnimationFrame";
import useDebounce from "../../Hooks/useDebounce";
import useExchangeRate from "../../Hooks/useExchangeRate";

// Utils
import { calculateConversion } from "../../Utils/CalculateConversion";
import { dropdownSchema } from "./ValidationSchemas";

const Rates = () => {
  const [fromCountry, setFromCountry] = useState("AU");
  const [toCountry, setToCountry] = useState("US");
  const [progression, setProgression] = useState(0);
  const [amount, setAmount] = useState("");

  // Debounced amount value
  const debouncedAmount = useDebounce(amount, 300);

  // Custom hook for exchange rate
  const { exchangeRate, isFetching, isError, error, refetch } = useExchangeRate(
    fromCountry,
    toCountry
  );

  // Memoize the conversion calculations
  const { trueAmount, markedUpAmount } = useMemo(() => {
    return calculateConversion(debouncedAmount, exchangeRate || 1, 0.05);
  }, [debouncedAmount, exchangeRate]);

  useEffect(() => {
    if (isError) {
      setProgression(0);
      setAmount("");
    }
  }, [isError]);

  const handleCountryChange = useCallback((type, key) => {
    const validationResult = dropdownSchema.safeParse(key);
    if (!validationResult.success) {
      console.error(validationResult.error.errors[0].message);
      return;
    }

    if (type === "from") {
      setFromCountry(key);
    } else {
      setToCountry(key);
    }
    setProgression(0); // Reset the progress bar
  }, []);

  useAnimationFrame(!isError, (deltaTime) => {
    setProgression((prevState) => {
      if (prevState > 0.998) {
        refetch();
        return 0;
      }
      return (prevState + deltaTime * 0.0001) % 1;
    });
  });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.heading}>Currency Conversion</div>

        <DropdownSection
          fromCountry={fromCountry}
          toCountry={toCountry}
          handleCountryChange={handleCountryChange}
          exchangeRate={exchangeRate}
          isFetching={isFetching}
        />

        <ProgressBar
          progress={progression}
          animationClass={isFetching ? classes.slow : ""}
          style={{ marginTop: "20px" }}
        />

        {isError && (
          <div className={classes.error}>
            <strong>Error:</strong> {error?.message || "Something went wrong"}
          </div>
        )}

        <NumberInput
          value={amount}
          onChange={setAmount}
          placeholder="Enter amount to convert"
          label="Amount"
          isError={isError}
        />

        <ResultsSection
          trueAmount={trueAmount}
          markedUpAmount={markedUpAmount}
        />
      </div>
    </div>
  );
};

export default Rates;
