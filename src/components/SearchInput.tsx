import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          setSearchText(inputRef.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={inputRef}
          variant={"filled"}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
