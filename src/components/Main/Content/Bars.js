import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { barsDataSelector } from "../../../store/bars/barsSelector";
import { Spinner } from "../../../UI/Spinner";
import styles from "./Bars.module.css";
import { Bar } from "./Bar";

export const Bars = ({ getDifference }) => {
  const barsData = [
    {
      name: "AFILENAME",
      coefficientAmount: 1,
      coefficientHeight: 1,
      color: "#606060",
      id: 1,
    },
    {
      name: "Backblaze",
      coefficientAmount: 8,
      coefficientHeight: 2.4,
      color: "#F24822",
      id: 2,
    },
    {
      name: "Azure",
      coefficientAmount: 44.8,
      coefficientHeight: 5.36,
      color: "#1890FF",
      id: 3,
    },
    {
      name: "Google",
      coefficientAmount: 56,
      coefficientHeight: 8.29,
      color: "#FFCD29",
      id: 4,
    },
    {
      name: "AWS",
      coefficientAmount: 53,
      coefficientHeight: 8.09,
      color: "#272727",
      id: 5,
    },
  ];

  const [period, setPeriod] = useState(true);

  const changePeriod = () => {
    setPeriod(!period);
  };

  const { status, bars } = useSelector(barsDataSelector);

  const reducedBars = bars / 1000;

  const theBiggestSum = Math.round(56 * reducedBars * 10);
  const theLowesttSum = Math.round(1 * reducedBars * 10);
  const diffeRenceBeetween = theBiggestSum - theLowesttSum;

  useEffect(() => {
    if (diffeRenceBeetween !== 0) {
      const getDifferenceFunc = (num) => {
        getDifference(num);
      };
      getDifferenceFunc(diffeRenceBeetween);
    }
  }, [diffeRenceBeetween]);

  return (
    <div className={styles.bars_wrapper}>
      <div className={styles.toggle_data}>
        <button className={styles.bars_btn} onClick={changePeriod} autoFocus>
          month
        </button>
        <button className={styles.bars_btn} onClick={changePeriod}>
          I year
        </button>
      </div>
      {status === "idle" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>No Data yet...</h1>
        </div>
      )}
      {status === "loading" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      )}
      {status === "fullfiled" && period && (
        <>
          <div className={styles.bars}>
            {barsData.map((item) => {
              return (
                <Bar
                  key={item.id}
                  height={`${item.coefficientHeight * reducedBars * 5}px`}
                  backgroundColor={item.color}
                  maxHeight={`${500}px`}
                  sum={Math.round(item.coefficientAmount * reducedBars * 10)}
                  width={
                    item.name === "AFILENAME" || item.name === "Backblaze"
                      ? "104px"
                      : "90px"
                  }
                />
              );
            })}
          </div>
          <div
            style={{
              width: "100%",
              height: "10px",
              backgroundColor: "#F5F5F5",
              display: "block",
              borderRadius: "10px",
              marginBottom: "5px",
            }}
          ></div>
          <div className={styles.bars_logos}>
            {barsData.map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: item.color,
                    width:
                      item.name === "AFILENAME" || item.name === "Backblaze"
                        ? "104px"
                        : "90px",
                    color: item.name === "Google" ? "black" : "white",
                  }}
                  className={styles.bars_logo}
                  key={item.id}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </>
      )}
      {status === "fullfiled" && !period && (
        <>
          <div className={styles.bars}>
            {barsData.map((item) => {
              return (
                <Bar
                  key={item.id}
                  height={`${item.coefficientHeight * reducedBars * 10}px`}
                  backgroundColor={item.color}
                  sum={Math.round(item.coefficientAmount * reducedBars * 15)}
                  width={
                    item.name === "AFILENAME" || item.name === "Backblaze"
                      ? "104px"
                      : "90px"
                  }
                />
              );
            })}
          </div>
          <div
            style={{
              width: "100%",
              height: "10px",
              backgroundColor: "#F5F5F5",
              display: "block",
              borderRadius: "10px",
              marginBottom: "5px",
            }}
          ></div>
          <div className={styles.bars_logos}>
            {barsData.map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: item.color,
                    width:
                      item.name === "AFILENAME" || item.name === "Backblaze"
                        ? "104px"
                        : "90px",
                    color: item.name === "Google" ? "black" : "white",
                  }}
                  className={styles.bars_logo}
                  key={item.id}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
