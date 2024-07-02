import { Details } from '../hooks/useGameDetails'
import { Text,SimpleGrid } from '@chakra-ui/react'
import DefinitionItem from './DefinitionItem'
import ScoreBadge from './ScoreBadge'

const descItem = {
    fontWeight : 'normal',
    color : 'gray',
};

interface Props {
    gameDetails : Details
}

const GameDetailsDefGrid = ({gameDetails} : Props) => {
  return (
    <SimpleGrid columns={2} mt={6} spacing={6}>
        <DefinitionItem term="Publisher">
          {gameDetails.publishers.map((e) => (
            <Text sx={descItem} key={e.id}>
              {e.name}
            </Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Platforms">
          {gameDetails.parent_platforms.map(({ platform }) => (
            <Text sx={descItem} key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {gameDetails.genres.map((e) => (
            <Text sx={descItem} key={e.id}>{e.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <ScoreBadge score={gameDetails.metacritic} />
        </DefinitionItem>
      </SimpleGrid>
  )
}

export default GameDetailsDefGrid