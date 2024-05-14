"use client";

import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react"; // Javascript de Bootstrap

export default function Home() {

  // Javascript de Bootstrap
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <Navbar />
    <Header />
    <button className="btn btn-danger">Cliquez ici</button>
    </>
  );
}
