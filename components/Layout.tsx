import { ReactNode } from 'react'

const Layout = ({ children }: { children?: ReactNode }) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>
}

export default Layout
