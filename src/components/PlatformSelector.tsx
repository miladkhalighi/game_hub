import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platform = usePlatform(selectedPlatformId);

  const { data, isLoading, error } = usePlatforms();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
          {platform?.name ?? "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => setPlatformId(item.id)}
              backgroundColor={selectedPlatformId === item.id ? "gray.400" : ""}
            >
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
