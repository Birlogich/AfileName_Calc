import { Calculator } from "./Calculator";
import { Bars } from "./Bars";
import { useEffect, useState } from "react";

export const Content = () => {
  const [diffSum, setDiffSum] = useState(0);

  const getDifference = (num) => {
    setDiffSum(num);
  };

  return (
    <>
      <Calculator diffSum={diffSum} />
      <Bars getDifference={getDifference} />
    </>
  );
};
