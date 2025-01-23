import React from 'react';
import Container from './Container';
import Link from 'next/link';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar =async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    // console.log(user)
    
    const menuLinks = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/profile'}>Profile</Link></li>
    </>

    return (
        <div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {menuLinks}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">MH BLOG</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <Link href={'/api/auth/logout'}>Logout</Link> : <Link href={'/api/auth/login'}>Login</Link>
                        }
                        {/* <LoginLink>Login</LoginLink>
                        <LogoutLink>Logout</LogoutLink> */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;