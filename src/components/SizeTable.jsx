// components/SizeTable.jsx
import { useState } from "react";
import { SIZE_DATA_IN, SIZE_DATA_CM } from "../Data/bPageData";
import "../styles/blogPage.css";

// export default function SizeTable({ highlightBand }) {
//   const [unit, setUnit] = useState("in");
//   const data = unit === "in" ? SIZE_DATA_IN : SIZE_DATA_CM;
//   const headers = unit === "in"
//     ? ["Band", "Underbust", "Cup B", "Cup C", "Cup D", "Cup DD"]
//     : ["Band (cm)", "Underbust", "Cup B", "Cup C", "Cup D", "Cup DD"];

//   return (
//     <div className="size-section">
//       <p className="section-title">Size chart</p>
//       <div className="size-tabs">
//         {["in", "cm"].map((u) => (
//           <button key={u} className={`btn-tab ${unit === u ? "active" : ""}`} onClick={() => setUnit(u)}>
//             {u === "in" ? "Inches" : "Centimeters"}
//           </button>
//         ))}
//       </div>
//       <div className="table-wrapper">
//         <table className="size-table">
//           <thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
//           <tbody>
//             {data.map((row, i) => (
//               <tr key={i} className={row.band === highlightBand ? "highlighted" : ""}>
//                 <td style={{ fontWeight: 700 }}>{row.band}</td>
//                 <td>{row.ub}</td><td>{row.b}</td><td>{row.c}</td><td>{row.d}</td><td>{row.dd}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
export default function SizeTable({ highlightBand }) {
  const [unit, setUnit] = useState("in");
  const data = unit === "in" ? SIZE_DATA_IN : SIZE_DATA_CM;
  const headers = unit === "in"
    ? ["Band", "Underbust", "Cup A", "Cup B", "Cup C", "Cup D", "Cup DD"]
    : ["Band (cm)", "Underbust", "Cup A", "Cup B", "Cup C", "Cup D", "Cup DD"];

  return (
    <div className="size-section">
      <p className="section-title">Size chart</p>
      <div className="size-tabs">
        {["in", "cm"].map((u) => (
          <button key={u} className={`btn-tab ${unit === u ? "active" : ""}`} onClick={() => setUnit(u)}>
            {u === "in" ? "Inches" : "Centimeters"}
          </button>
        ))}
      </div>
      <div className="table-wrapper">
        <table className="size-table">
          <thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={row.band === highlightBand ? "highlighted" : ""}>
                <td style={{ fontWeight: 700 }}>{row.band}</td>
                <td>{row.ub}</td>
                <td>{row.a}</td>
                <td>{row.b}</td>
                <td>{row.c}</td>
                <td>{row.d}</td>
                <td>{row.dd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}