import Link from "next/link";

export default function authLayout({ children,}: { children: React.ReactNode }) {
    const navLinks =[
        {href:"/login", label:"Login"},
        {href:"/register", label:"Register"},
        {href:"/forgotpassword", label:"Forgot Password"},
    ]
  return (
    <div>
        <nav>
            <ul className="flex flex-row mt-2 bg-pink-300">
            {navLinks.map((link) => (
                <li key={link.href} className="ml-10  hover:text-white    ">
                <Link href={link.href} >{link.label}</Link>
                </li>
            ))}
            </ul>
        </nav>
      {children}
    </div>
  );
}