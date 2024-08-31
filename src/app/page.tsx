"use client";

import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

import "./style.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [item, setItem] = useState("");

  useEffect(() => {
    setItem(window.localStorage.getItem("item") as string);
  }, []);

  return (
    <>
      <Header img_src="/logo.svg" item={item} />
      <Container />
      <Footer />
    </>
  );
}
