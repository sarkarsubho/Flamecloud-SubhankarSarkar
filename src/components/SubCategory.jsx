import { Flex } from "@chakra-ui/react";
import React from "react";

export const SubCategory = ({data}) => {
  const [visiable, setVisible] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const [input, setInput] = useState("");
  return <Flex
  key={data.id}
  padding={"8px 16px"}
  backgroundColor={"#F1F5F9"}
  borderRadius={"8px"}
  justifyContent={"space-between"}
>
  <Flex gap={"5px"} alignItems={"center"}>
    <TbGripVertical></TbGripVertical>
    <Heading as="h5" size="sm">
      {" "}
      {data.label}
    </Heading>
  </Flex>
  <Flex gap={"8px"} alignItems={"center"}>
    <Box >
       <BsThreeDotsVertical></BsThreeDotsVertical> 
    </Box>
    
    <BsChevronCompactDown></BsChevronCompactDown>
  </Flex>
</Flex>;
};
