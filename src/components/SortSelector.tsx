import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectedItemColor = useColorModeValue("#663F00", "#B87100");

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              onClick={() => setSortOrder(item.value)}
              color={
                selectedSortOrder === item.value ? selectedItemColor : "gray"
              }
              fontWeight={selectedSortOrder === item.value ? "bold" : "normal"}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
