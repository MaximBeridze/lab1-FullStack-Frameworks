"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    href: string;
    children: React.ReactNode;
};

export function NavLink({ href, children }: Props) {
    const pathname = usePathname();


    const isActive = pathname === href;
    const isInSection = (href != "/") && (pathname.startsWith(href + "/"));

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : isInSection ? "true" : undefined}
            className="aria-[current=page]:font-bold aria-[current=true]:font-bold"
        >
            {children}
        </Link>
    );
}