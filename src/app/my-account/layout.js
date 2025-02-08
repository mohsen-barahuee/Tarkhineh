import AccountSidebar from "@/components/modules/AccountSidebar"
import { cookies } from "next/headers";


export default async function AccountLayout({ children }) {

    const cookie = cookies();
    const token = await cookie.has("token");
    
  

    return (
        <div className="md:flex md:justify-center md:gap-x-6 md:py-12">
            <AccountSidebar userToken={token} />
            <hr />
            {children}
        </div>

    )

}