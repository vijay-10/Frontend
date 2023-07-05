import React from "react";
import classes from "./Form.module.css";
import { useState } from "react";

const INITIAL_FORM_INPUT = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  const [formInput, setFormInput] = useState(INITIAL_FORM_INPUT);

  const inputHandler = (id, value) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        [id]: +value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(formInput);
  };
  
  const resetHandler = (event) => {
    event.preventDefault();
    setFormInput(INITIAL_FORM_INPUT);
  };

  return (
    <form className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formInput['current-savings']}
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formInput['yearly-contribution']}
            onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formInput['expected-return']}
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formInput['duration']}
            onChange={(event) => inputHandler("duration", event.target.value)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={classes.button} onClick={submitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
