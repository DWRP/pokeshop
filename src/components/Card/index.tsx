import React from "react";
import "./style.css";
import Image from "next/image";

interface HeaderProps {
  title: string;
  img_src: string;
  img_alt?: string;
  price: number;
}

const Card: React.FC<HeaderProps> = ({ title, img_src, img_alt, price }) => {
  async function handleItens(item: {
    name: string;
    img: string;
    price: number;
  }) {
    const atualItens = localStorage.getItem("item");
    const newItens = [
      ...(atualItens ? JSON.parse(atualItens) : JSON.parse("[]")),
      item,
    ];
    localStorage.setItem("item", JSON.stringify(newItens));
  }
  return (
    <div className="card">
      <Image
        src={img_src ? img_src : ""}
        alt={img_alt ? img_alt : ""}
        width={150}
        height={150}
      />
      <h3>R$ {price ? price : 0}</h3>
      <h2>
        {String(title).replace(
          String(title)[0],
          String(title)[0].toUpperCase()
        )}
      </h2>
      <button className="bt show">VISUALIZAR</button>
      <button
        className="bt buy"
        onClick={() => {
          handleItens({ name: title, img: img_src, price });
        }}
      >
        COMPRAR
      </button>
    </div>
  );
};

export default Card;
