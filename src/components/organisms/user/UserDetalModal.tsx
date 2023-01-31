import { memo, VFC } from 'react';
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react';

import { User } from '../../types/api/user';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export const UserDetalModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>
          ユーザ詳細
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={user?.username} isReadOnly />
                <FormLabel>フルネーム</FormLabel>
                <Input value={user?.name} isReadOnly />
                <FormLabel>Mail</FormLabel>
                <Input value={user?.email} isReadOnly />
                <FormLabel>Tel</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalHeader>
      </ModalContent>
    </Modal>
  )
})
