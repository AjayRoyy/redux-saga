import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./componets/card";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);
  return (
    <div className="App">
      <button
        onClick={() => dispatch({ type: "Product_Slice/getProductsFetch" })}
      >
        click to fetch Data
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
        }}
      >
        {products && products.map((e, i) => <Cards key={i} data={e} />)}
      </div>
    </div>
  );
}

export default App;
