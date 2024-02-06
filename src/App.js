import Sidebar from "./components/Sidebar/Sidebar";
import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";

function App({}) {
  return (
     <>
     <Sidebar/>
     <Navigation/>
     <Recommended/>
     <Products/>
     </>
  );
}

export default App;
