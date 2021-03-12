import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type PropsType = {
  children: ReactNode
}

export function NormalLayout({ children }: PropsType) {
  return (
    <Box
      mx={{ base: 0, sm: 'auto' }}
      p={{ base: 0, md: '30px 20px 0' }}
      maxW="935px"
      w={{ base: '100%', md: 'calc(100% - 40px)' }}
      overflowX="hidden"
    >
      {children}
    </Box>
  )
}
