import React, { useState, useEffect } from "react";
import Star from "../public/star.png";
import Image from "next/image";

export default function Header() {
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
