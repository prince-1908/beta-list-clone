import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { MoreHorizontal, Building2 } from 'lucide-react';

export const Nav = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className='border-b'>
            <Navbar position="static">
                <NavbarBrand className='flex gap-2'>
                    <Building2 />
                    <p className="font-bold text-inherit">Startup Finder</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem className='hover:bg-gray-100 px-2 py-1 rounded-md' isActive>
                        <Link href="/" aria-current="page">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='hover:bg-gray-100 px-2 py-1 rounded-md'>
                        <Link color="foreground" href="#">
                            Topcs
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='hover:bg-gray-100 px-2 py-1 rounded-md'>
                        <Link color="foreground" href="#">
                            Newsletters
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='hover:bg-gray-100 px-2 py-1 rounded-md'>
                        <Link color="foreground" href="#">
                            Startup jobs
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='hover:bg-gray-100 p-2 rounded-full grid place-items-center'>
                        <Link color="foreground" href="#">
                            <MoreHorizontal />
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                {login ? <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="/submit">Submit</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Profile
                        </Button>
                    </NavbarItem>
                </NavbarContent> :
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button as={Link} color="primary" href="#" variant="flat">
                                Login / Sign In
                            </Button>
                        </NavbarItem>
                    </NavbarContent>}
            </Navbar>
        </div>
    )
}
