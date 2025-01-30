import AccountSidebar from "@/components/modules/AccountSidebar"

export default function AccountLayout({ children }) {

    return (
        <div className="md:flex md:justify-center md:gap-x-6 md:py-12">
            <AccountSidebar />
            <hr />
            {children}
        </div>

    )

}