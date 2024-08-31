import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Card from "../Card";

import "./style.css";

export default function Container() {
  const [pockemon, setPockemon] = useState([]);
  let [atual, setAtual] = useState(1);

  async function loadPockemon(offset: string) {
    if (Number(offset) > 0) {
      offset = "" + (Number(offset) - 1) * 18;
    }
    const response = await api.get(`/pokemon?offset=${offset}&limit=18`);
    const { results } = response.data;
    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const result = await results.map(
      (item: { name: string; url: string }, index: number) => {
        const id = item.url.substring(34, 36);
        const price = getRandomInt(80, 120);
        return {
          ...item,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.replace(
            "/",
            ""
          )}.png`,
          price,
        };
      }
    );
    setPockemon(result);
  }

  useEffect(() => {
    loadPockemon("0");
  }, []);

  return (
    <div className="container">
      <aside className="aside">
        <div className="dropdown">
          <h1>FILTRO</h1>
          <div className="dropdown-content">EM DESENVOLVIMENTO</div>
        </div>
      </aside>
      <main className="main">
        {pockemon.map(
          (
            item: { name: string; url: string; img: string; price: number },
            index
          ) => {
            return (
              <Card
                title={item.name}
                img_src={item.img}
                price={item.price}
                key={index}
              />
            );
          }
        )}
        {/* <Pagination offset={2} /> */}
        <div className="pages">
          <button
            onClick={() => {
              if (atual > 1) {
                setAtual(atual - 1);
              }
              return atual > 1 ? loadPockemon("" + (atual - 1)) : null;
            }}
          >
            Preview
          </button>
          <button
            onClick={() => {
              setAtual(atual - 2);
              loadPockemon("" + (atual - 2));
            }}
            className={atual - 2 <= 0 ? "anim ocult" : "anim"}
          >
            {atual - 2 > 0 ? atual - 2 : ""}
          </button>

          <button
            onClick={() => {
              setAtual(atual - 1);
              loadPockemon("" + (atual - 1));
            }}
            className={atual - 1 <= 0 ? "anim ocult" : "anim"}
          >
            {atual - 1 > 0 ? atual - 1 : ""}
          </button>

          <button className="current">{atual}</button>
          <button
            className={atual < 964 / 18 - 1 ? "anim" : "ocult"}
            onClick={() => {
              setAtual(atual + 1);
              loadPockemon("" + (atual + 1));
            }}
          >
            {atual + 1}
          </button>
          <button
            className={atual < 964 / 18 - 2 ? "anim" : "ocult"}
            onClick={() => {
              setAtual(atual + 2);
              loadPockemon("" + (atual + 2));
            }}
          >
            {atual + 2}
          </button>

          <button
            onClick={() => {
              if (atual < 964 / 18 - 1) {
                setAtual(atual + 1);
              }
              return atual < 964 / 18 - 1
                ? loadPockemon("" + (atual + 1))
                : null;
            }}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
