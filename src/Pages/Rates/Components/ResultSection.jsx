import React from "react";
import classes from "../Rates.module.css";
import { formatNumberWithCommas } from "../../../Utils/FormatNumber";

const ResultsSection = React.memo(({ trueAmount, markedUpAmount }) => {
  return (
    <div className={classes.results}>
      <div data-testid="true-amount">
        <strong>True Amount:</strong>{" "}
        {`$${formatNumberWithCommas(trueAmount.toFixed(2))}`}
      </div>
      <div data-testid="marked-up-amount">
        <strong>Marked-Up Amount:</strong>{" "}
        {`$${formatNumberWithCommas(markedUpAmount.toFixed(2))}`}
      </div>
    </div>
  );
});

export default ResultsSection;
