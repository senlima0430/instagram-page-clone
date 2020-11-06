import { Heading, IconButton, Button, Flex, Box, Image } from "@chakra-ui/core";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";

export function UserProfile() {
  return (
    <Flex as="header" m="16px" mb="24px">
      <Box mr="28px" flexShrink={0}>
        <Image
          width="77px"
          height="77px"
          src="/images/avatar.png"
          alt="developer avatar"
          borderRadius="50%"
        />
      </Box>
      <Flex as="section" flex={1} flexBasis={0} flexGrow={1} direction="column">
        <Flex align="center" mb="12px">
          <Heading as="h2" fontWeight="500" size="xl">
            senlima_sun
          </Heading>
          <IconButton
            ml="5px"
            fontSize="32px"
            variant="unstyled"
            aria-label="more action"
            icon={<FiMoreHorizontal />}
          />
        </Flex>

        <Flex align="center">
          <Button size="sm" variant="outline">
            發送訊息
          </Button>
          <IconButton
            mx="6px"
            size="sm"
            colorScheme="blue"
            variant="solid"
            aria-label="other suggest account"
            icon={<MdPersonAdd />}
          />
          <IconButton
            size="sm"
            variant="outline"
            aria-label="other suggest account"
            icon={<TiArrowSortedDown />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
