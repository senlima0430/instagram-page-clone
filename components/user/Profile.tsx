import {
  Box,
  Flex,
  Image,
  Button,
  IconButton,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react'
import { MdPersonAdd } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'
import { TiArrowSortedDown } from 'react-icons/ti'

import { UserDescription } from './Description'
import { InfoGroup } from 'components/group/Info'

export function UserProfile() {
  const [isLargerThanMd] = useMediaQuery('(min-width: 720px)')

  return (
    <Flex
      as="header"
      align="flex-start"
      m="16px"
      mt={{ base: '16px', md: 0 }}
      mb={{ base: '24px', md: '44px' }}
    >
      <Box
        d={{ base: 'block', md: 'flex' }}
        mr={{ base: '28px', md: '30px' }}
        direction="column"
        flex={{ base: 'none', md: 1 }}
        basis={{ base: 'unset', md: 0 }}
        shrink={0}
        grow={{ base: 'unset', md: 1 }}
      >
        <Image
          width={{ base: '77px', md: '150px' }}
          height={{ base: '77px', md: '150px' }}
          src="/images/avatar.png"
          alt="developer avatar"
          borderRadius="50%"
          alignSelf="center"
          display="block"
          flex="none"
        />
      </Box>

      <Flex
        as="section"
        flex={{ base: 1, md: 2 }}
        grow={{ base: 1, md: 2 }}
        shrink={{ base: 0, md: 1 }}
        basis={{ base: 0, md: '30px' }}
        direction={{ base: 'row', md: 'column' }}
      >
        <Flex
          mb={{ base: 0, md: '20px' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex align="center" mb="12px">
            <Heading as="h2" fontWeight="300" fontSize="32px">
              senlima_sun
            </Heading>
            <IconButton
              ml="5px"
              fontSize="32px"
              d={{ base: 'none', md: 'block' }}
              variant="unstyled"
              aria-label="more action"
              icon={<FiMoreHorizontal />}
            />
          </Flex>

          <Flex align="center" ml={{ base: 0, md: '1rem' }}>
            <Button size="sm" variant="outline">
              發送訊息
            </Button>
            <IconButton
              mx="6px"
              size="sm"
              variant="solid"
              colorScheme="blue"
              icon={<MdPersonAdd />}
              aria-label="other suggest account"
            />
            <IconButton
              size="sm"
              variant="outline"
              icon={<TiArrowSortedDown />}
              aria-label="other suggest account"
            />

            <IconButton
              ml="5px"
              d={{ base: 'block', md: 'none' }}
              fontSize="32px"
              variant="unstyled"
              icon={<FiMoreHorizontal />}
              aria-label="more action"
            />
          </Flex>
        </Flex>

        {isLargerThanMd && (
          <>
            <InfoGroup />
            <UserDescription />
          </>
        )}
      </Flex>
    </Flex>
  )
}
