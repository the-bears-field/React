import { createContext, Dispatch, SetStateAction, ReactNode, ReactElement, useState, VFC, Context } from "react"

import { User } from "../types/api/user"

type LoginUser = User & { isAdmin: boolean }

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
}

export const LoginUserContext: Context<LoginUserContextType> = createContext({} as LoginUserContextType)

export const LoginUserProvider: VFC<{ children: ReactNode }> = (props): ReactElement => {
  const { children } = props
  const [ loginUser, setLoginUser ] = useState<LoginUser | null>(null)

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
