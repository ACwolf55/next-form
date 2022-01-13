import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Star from "../public/star.png";
import Image from "next/image";

export default function Home() {
  //RENDER
  return (
    <header>
      <span id="star">
        <Image src={Star} height={170} width={170} />
      </span>

      <h1>App Name</h1>
    </header>
  );
}
