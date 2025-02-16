import { createContext, PropsWithChildren, useContext, useState } from "react"

interface SidebarContextType {
    isShowSideBar: boolean;
    setIsShowSideBar: (value: boolean) => void;
}

// Tạo context với giá trị mặc định
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const SidebarProvider = ({ children }: PropsWithChildren) => {
    const [isShowSideBar, setIsShowSideBar] = useState(false);

    return (
        <SidebarContext.Provider value={{ isShowSideBar, setIsShowSideBar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebarContext must be used within a SidebarProvider");
    }
    return context;
};

export default SidebarProvider;