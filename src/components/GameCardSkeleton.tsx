import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import { cardStyle } from './GameCard'

const GameCardSkeleton = () => {
  return (
    <Card sx={cardStyle}>
        <Skeleton height={'300px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton