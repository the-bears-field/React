import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react"
import { MouseEventHandler, VFC } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: MouseEventHandler;
  onClickUserManagement: MouseEventHandler;
  onClickSetting: MouseEventHandler;
}

export const MenuDrawer: VFC<Props> = (props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザ一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
