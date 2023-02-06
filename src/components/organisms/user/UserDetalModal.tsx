import { memo, useState, VFC } from 'react';
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react';

import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useEffect } from 'react';
import { ChangeEvent } from 'react';

type Props = {
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
  user: User | null;
}

export const UserDetalModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false ,onClose } = props

  const [ username, setUsername ] = useState<string>('')
  const [ name, setName ] = useState<string>('')
  const [ email, setEmail ] = useState<string>('')
  const [ phone, setPhone ] = useState<string>('')

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUsername: (e: ChangeEvent<HTMLInputElement>) => void = (e) => setUsername(e.target.value)
  const onChangeName: (e: ChangeEvent<HTMLInputElement>) => void = (e) => setName(e.target.value)
  const onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void = (e) => setEmail(e.target.value)
  const onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void = (e) => setPhone(e.target.value)

  const onClickUpdate: () => void = () => {
    setUsername(username)
    setName(name)
    setEmail(email)
    setPhone(phone)
  }

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
                <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUsername} />
                <FormLabel>フルネーム</FormLabel>
                <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
                <FormLabel>Mail</FormLabel>
                <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
                <FormLabel>Tel</FormLabel>
                <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
              </FormControl>
              { isAdmin && (
                <ModalFooter>
                  <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                </ModalFooter>
              ) }
            </Stack>
          </ModalBody>
        </ModalHeader>
      </ModalContent>
    </Modal>
  )
})
