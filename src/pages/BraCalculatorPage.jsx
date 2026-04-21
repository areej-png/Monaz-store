// pages/BraCalculatorPage.jsx
import { useState } from "react";
import SizeCalculator from "../components/SizeCalculator";
import SizeTable from "../components/SizeTable";
import "../styles/blogPage.css"; 

export default function BraCalculatorPage() {
  const [highlightBand, setHighlightBand] = useState(null);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Bra Size Calculator</h1>
      <SizeCalculator onResult={setHighlightBand} />
      <SizeTable highlightBand={highlightBand} />
    </div>
  );
}