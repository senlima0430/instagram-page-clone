import { NormalLayout } from 'layout/Normal'
import { Info } from 'components/Info'
import { Searchbar } from 'components/Searchbar'
import { PicsList } from 'components/PicsList'

export default function Index() {
  return (
    <NormalLayout>
      <Info />
      <Searchbar />
      <PicsList />
    </NormalLayout>
  )
}
