import { ReactNode } from 'react'
import { Box } from '@chakra-ui/core'

import { Navbar } from 'components/common/Navbar'

type PropsType = {
  children: ReactNode
}

export function NormalLayout({ children }: PropsType) {
  return (
    <>
      <Navbar />
      <Box w="100vw" mx={{ base: '0px' }}>
        {children}
      </Box>
    </>
  )
}
