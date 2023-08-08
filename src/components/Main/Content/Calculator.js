import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RangeSlider } from "rsuite";
import { getAllBars } from "../../../store/bars/barsActions";
import styles from "./Calculator.module.css";
import { AverageBtn } from "../../../UI/AverageBtn";
import "rsuite/dist/rsuite.min.css";

const arrow = (
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.65167 2.14294H8.81461C8.75769 2.14294 8.70412 2.17085 8.67064 2.21661L5.49988 6.58714L2.32912 2.21661C2.29564 2.17085 2.24207 2.14294 2.18515 2.14294H1.34809C1.27555 2.14294 1.23314 2.22553 1.27555 2.28469L5.21082 7.70991C5.35367 7.90634 5.64608 7.90634 5.78783 7.70991L9.72309 2.28469C9.76662 2.22553 9.72421 2.14294 9.65167 2.14294Z"
      fill="#1890FF"
    />
  </svg>
);

export const Calculator = ({ diffSum }) => {
  const dispatch = useDispatch();

  const getData = (e) => {
    e.preventDefault();
    const amountOfData = storageAmount * percentValue;
    dispatch(getAllBars(amountOfData));
  };

  const [storageAmount, setStorageAmount] = useState(0);
  const [percentValue, setPercentValue] = useState(50);

  const getStorageAmount = (e) => {
    setStorageAmount(e.target.value);
  };

  return (
    <>
      <div className={styles.calculator}>
        <form className={styles.calculator_form} onSubmit={getData}>
          <p className={styles.calculator_title}>
            How much data will you store?
          </p>
          <div className={styles.calculator_top}>
            <input
              type="number"
              className={styles.calculator_input}
              onChange={getStorageAmount}
            ></input>
            <label>TB {arrow}</label>
          </div>
          <p className={styles.calculator_title}>
            What percentage of your data will you transfer or download (data
            transfer - egress)?
          </p>
          <div className={styles.slider}>
            <RangeSlider
              style={{ width: "540px", marginBottom: "10px" }}
              max={500}
              defaultValue={[0, 50]}
              constraint={([start, end]) => start <= 25 && end >= 35}
              onChange={([start, end]) => setPercentValue(end)}
            />
            <div className={styles.slider_percents}>
              <span>0%</span>
              <span>100%</span>
              <span>500%</span>
            </div>
          </div>
          <p className={styles.calculator_title}>
            By using AFILENAME you could save: <span>${diffSum} a month!</span>
          </p>
          <AverageBtn
            title={"Get Started"}
            backgroundColor={"#1890FF"}
            color="white"
          />
        </form>
      </div>
    </>
  );
};
