import React, { useEffect, useState } from "react";
import "./style.css";

interface HeaderProps {
  offset: number;
}

const Pagination: React.FC<HeaderProps> = ({ offset }) => {
  let atual = 1;
  const [bts, setBts] = useState({ 0: "" });

  useEffect(() => {
    let butt = {};
    for (let index = 1; index < 964 / 18; index++) {
      butt = {
        ...butt,
        index: "",
      };
    }
    setBts({ ...bts, ...butt });
  }, []);

  return <div className="pages"></div>;
};

export default Pagination;
