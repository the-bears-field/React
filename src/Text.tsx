import { VFC, ReactNode } from "react"

type Props = {
  color: string,
  fontSize: string,
  children?: ReactNode
}

export const Text: VFC<Props> = (props) => {
  const { color, fontSize, children } = props
  return <p style={{ color, fontSize }}>{children}</p>
}