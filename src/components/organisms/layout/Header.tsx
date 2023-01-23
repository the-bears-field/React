import {
  Box,
  Flex,
  Heading,
  Link,
  useDisclosure
} from "@chakra-ui/react"
import { History } from "history"
import { memo, MouseEventHandler, useCallback, VFC } from "react"
import { useHistory } from "react-router"

import { MenuIconButton } from "../../atoms/button/MenuIconButoon"
import { MenuDrawer } from "../../molecules/MenuDrawer"

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history: History = useHistory()

  const onClickHome: MouseEventHandler = useCallback(() => history.push('/home'), [history])
  const onClickUserManagement: MouseEventHandler = useCallback(() => history.push('/home/user-management'), [history])
  const onClickSetting: MouseEventHandler = useCallback(() => history.push('/home/setting'), [history])

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
        >
          <Heading
            as="h1"
            fontSize={{ base: 'md', md: 'lg' }}
            onClick={onClickHome}
          >
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}/>
    </>
  )
})
