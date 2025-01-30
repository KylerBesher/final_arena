"use client"; // Ensure this runs on the client side

import { useEffect } from "react";
import dynamic from "next/dynamic";
import CMS from 'decap-cms-app';

// Import the JavaScript-based DecapCMS config
import decapConfig from "./decap.config";



export default function Admin() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Pass the config directly to init
      CMS.init({ config: decapConfig });
    }
  }, []);

  return <div />;
}