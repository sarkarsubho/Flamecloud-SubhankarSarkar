import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import { DeleteTask } from "./components/DeleteTask";
import { PlanName } from "./components/PlanName";
import { PointerName } from "./components/PointerName";
import { SOPAccess } from "./components/SOPAccess";
import { TbGripVertical } from "react-icons/tb";
import { actionPlan } from "./data/userArr";
import { BsThreeDotsVertical, BsChevronCompactDown } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [showOption, setShowOption] = useState(false);
  return (
    <div className="App">
      <Box id="dashbord">
        {/* head */}
        <Flex
          justifyContent={"space-between"}
          textAlign={"left"}
          direction={"column"}
        >
          <Text
            fontSize={"14px"}
            fontWeight={"400"}
            lineHeight={"19px"}
            color={"#64748B"}
          >
            {" "}
            SOP
          </Text>
          <Flex justifyContent={"space-between"}>
            <Heading
              as="h3"
              size="lg"
              color={"#0F172A"}
              fontWeight={700}
              fontSize={"32px"}
              lineHeight={"44px"}
            >
              Action Plans
            </Heading>
            <Flex
              gap={"10px"}
              justifyContent={"center"}
              h={"70px"}
              alignItems={"baseline"}
            >
              <SOPAccess></SOPAccess>
              <PlanName></PlanName>
            </Flex>
          </Flex>
        </Flex>
        {/* head */}
        <Flex direction={"column"} gap={"8px"}>
          {actionPlan.map((item) => {
            return (
              <Flex
                key={item.id}
                padding={"8px 16px"}
                backgroundColor={"#F1F5F9"}
                borderRadius={"8px"}
                justifyContent={"space-between"}
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <TbGripVertical></TbGripVertical>
                  <Heading as="h5" size="sm">
                    {" "}
                    {item.label}
                  </Heading>
                </Flex>

                <Flex gap={"8px"} alignItems={"center"}>
                  <Button
                    onClick={() => {
                      setShowOption(!showOption);
                    }}
                  >
                    <BsThreeDotsVertical></BsThreeDotsVertical>
                  </Button>

                  {showOption && (
                    <Flex
                      direction={"column"}
                      position={"absolute"}
                      border={"2px solid gray"}
                      top={"300px"}
                      right={"60px"}
                      backgroundColor={"white"}
                    >
                      <Button variant={"ghost"}> Edit Category</Button>
                      <Button variant={"ghost"}>Manage Access</Button>
                      <DeleteTask></DeleteTask>
                    </Flex>
                  )}

                  <BsChevronCompactDown></BsChevronCompactDown>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </div>
  );
}

export default App;
