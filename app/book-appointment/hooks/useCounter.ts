"use client"
import { useState } from "react";

export const useCounter = () => {
  const [current, setCurrent] = useState(0);
  return {
    current, setCurrent
  }
}
