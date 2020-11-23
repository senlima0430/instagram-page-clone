import { Box } from '@chakra-ui/react'

import { NormalLayout } from 'components/layout/Normal'
import { UserProfile } from 'components/user/Profile'
import { UserDescription } from 'components/user/Description'
import { InfoGroup } from 'components/group/Info'
import { GenreGroup } from 'components/group/Genre'
import { DisplayArea } from 'components/display/Area'

export default function Index() {
  return (
    <NormalLayout>
      <UserProfile />
      <Box d={{ base: 'block', md: 'none' }} w="100%">
        <UserDescription />
        <InfoGroup />
      </Box>
      <GenreGroup />
      <DisplayArea />
    </NormalLayout>
  )
}
