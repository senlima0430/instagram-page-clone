import { NormalLayout } from 'components/layout/Normal'
import { UserProfile } from 'components/user/Profile'
import { UserDescription } from 'components/user/Description'
import { InfoGroup } from 'components/group/Info'
import { GenreGroup } from 'components/group/Genre'
import { DisplayRow } from 'components/display/Row'

export default function Index() {
  return (
    <NormalLayout>
      <UserProfile />
      <UserDescription />
      <InfoGroup />
      <GenreGroup />
      <DisplayRow />
    </NormalLayout>
  )
}
