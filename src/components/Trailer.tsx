import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const Trailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  const trailers = data?.results || [];
  const firstItem = trailers.length > 0 ? trailers[0] : null;

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      {firstItem && (
        <video src={firstItem.data[480]} poster={firstItem.preview} controls />
      )}
    </>
  );
};

export default Trailer;
