import  Header  from "./components/Header"
import VehicleCategoryFilter from "./components/VehicleCategoryFilter";
import VehicleDashboard from "./components/VehicleDashboard";

function App() {
  return (
    <>
      <Header />
      <VehicleDashboard />
      <VehicleCategoryFilter />
    </>
  );
}

export default App;
