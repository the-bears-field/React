import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react';
import { memo, VFC } from 'react';

type Props = {
  onOpen: () => void;
}

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props

  return(
    <IconButton
      aria-label="menu button"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      onClick={onOpen}
      display={{ base: 'block', md: 'none' }}
    />
  )
})