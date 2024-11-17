import React from "react";
import { ReactComponent as Transfer } from "../../../Icons/Transfer.svg";
import classes from "../Rates.module.css";
import CountryData from "../../../Libs/Countries.json";
import countryToCurrency from "../../../Libs/CountryCurrency.json";

// Components
import DropDown from "../../../Components/DropDown";
import Loader from "../../../Components/Loader";

const countries = CountryData.CountryCodes;

const DropdownSection = React.memo(
  ({
    fromCountry,
    toCountry,
    handleCountryChange,
    exchangeRate,
    isFetching,
  }) => {
    const Flag = ({ code }) => (
      <img
        alt={code || ""}
        src={`/img/flags/${code || ""}.svg`}
        width="20px"
        className={classes.flag}
      />
    );

    return (
      <div className={classes.rowWrapper}>
        <div>
          <DropDown
            leftIcon={<Flag code={fromCountry} />}
            label={"From"}
            selected={countryToCurrency[fromCountry]}
            options={countries.map(({ code }) => ({
              option: countryToCurrency[code],
              key: code,
              icon: <Flag code={code} />,
            }))}
            setSelected={(key) => handleCountryChange("from", key)}
            style={{ marginRight: "20px" }}
          />
        </div>

        <div className={classes.exchangeWrapper}>
          <div className={classes.transferIcon}>
            <Transfer height={"25px"} />
          </div>

          <div className={classes.rate}>
            {isFetching ? <Loader /> : exchangeRate?.toFixed(4) || "N/A"}
          </div>
        </div>

        <div>
          <DropDown
            leftIcon={<Flag code={toCountry} />}
            label={"To"}
            selected={countryToCurrency[toCountry]}
            options={countries.map(({ code }) => ({
              option: countryToCurrency[code],
              key: code,
              icon: <Flag code={code} />,
            }))}
            setSelected={(key) => handleCountryChange("to", key)}
            style={{ marginLeft: "20px" }}
          />
        </div>
      </div>
    );
  }
);

export default DropdownSection;
