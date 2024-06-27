import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  return data?.results.find((g) => g.id === id);
};

export default useGenre;
