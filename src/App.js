import React, { useState } from "react";
import Navbar from "./Components/Task1/Navbar";
import Sidebar from "./Components/Task1/Sidebar";
import Subnavbar from "./Components/Task1/Subnavbar";
import PendingItems from "./Components/Task1/PendingItems";
import CompletedItems from "./Components/Task1/CompletedItems";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    // console.log("clicked");
    setActiveTab(tabNumber);
  };

  return (
    <div className="App">
      <Navbar />
      <Subnavbar tabChange={handleTabClick} />
      <Sidebar />
      {activeTab === 1 ? <PendingItems /> : <CompletedItems />}
    </div>
  );
}

export default App;
