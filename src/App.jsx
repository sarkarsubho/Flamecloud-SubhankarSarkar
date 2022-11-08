import { Box } from "@chakra-ui/react";
import "./App.css";
import { DeleteTask } from "./components/DeleteTask";
import { PlanName } from "./components/PlanName";
import { PointerName } from "./components/PointerName";
import { SOPAccess } from "./components/SOPAccess";

function App() {
  return (
    <div className="App">
      <Box id="dashbord">
        <Box>
        <DeleteTask></DeleteTask>
        <PlanName></PlanName>
        <PointerName></PointerName>
        <SOPAccess></SOPAccess>
      </Box>
      </Box>
      
    </div>
  );
}

export default App;
