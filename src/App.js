import Expenses from "./Components/Expenses";

function App() {
  const items = [
    { id: "i1", name: "Car", date: new Date(2020, 1, 13), amount: 200 },
    { id: "i2", name: "PC", date: new Date(2021, 11, 23), amount: 400 },
    { id: "i3", name: "Pen", date: new Date(2023, 12, 12), amount: 600 },
    { id: "i4", name: "Book", date: new Date(2022, 5, 17), amount: 900 },
  ];
return <Expenses items = {items}></Expenses>
}

export default App;
