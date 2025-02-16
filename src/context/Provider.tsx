import { PropsWithChildren } from "react"
import SidebarProvider from "./SidebarProvider;"

const Provider = ({ children }: PropsWithChildren) => {

    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default Provider