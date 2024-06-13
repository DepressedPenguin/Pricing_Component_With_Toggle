import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Main";

function App() {
  const [isYearly, setIsYearly] = useState<boolean>(false); // Initialize with a default boolean value

  const handleToggle = (toggle: boolean) => {
    setIsYearly(toggle);
    console.log(isYearly); // This will log the previous state due to closure
  };

  useEffect(() => {
    console.log(isYearly); // This will log the updated state after setIsYearly
  }, [isYearly]);

  return (
    <>
      <Main isYearly={isYearly} toggle={handleToggle} />
    </>
  );
}

export default App;
