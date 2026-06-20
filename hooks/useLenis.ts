"use client";

import { useContext } from "react";
import { LenisContext } from "@/components/SmoothScroll";

export function useLenis() {
  return useContext(LenisContext);
}
