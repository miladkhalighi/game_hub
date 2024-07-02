import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { error, isLoading, data, fetchNextPage, hasNextPage } = useGames();
  const numberOfSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numberOfFetchedGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={numberOfFetchedGames}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Text>loading</Text>}
      >
        <SimpleGrid spacing={8} columns={{ base: 1, md: 2, lg: 3 }}>
          {isLoading &&
            numberOfSkeletons.map((e) => <GameCardSkeleton key={e} />)}
          {error && <Text>{error.message}</Text>}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page?.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
