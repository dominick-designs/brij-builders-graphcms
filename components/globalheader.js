import React, { Component, useState } from 'react';
import Link from 'next/link';
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink } from "components/headers/light";
import tw from "twin.macro"

const GlobalHeader = (props) => {


    const globalHeaderItem = "globalheader"
    let siteName = "Brij Builders"
    let logo = 'logo'

    const renderLinks = (kind) => {

        return (
            <Link key={node1} href={href} as={path}>
                <a onClick={() => setIsMobileMenuExpanded(false)} className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <div className="text-base leading-6 font-medium text-gray-900 ">
                        text here
                    </div>
                </a>
            </Link>
        )


    }

    const logoLink = (
        <Link href={'/'}><LogoLink>
            {logo &&
                <img src={logo.url} alt={logo.label} />
            }
            {siteName}
        </LogoLink></Link>
    );

    const links = [
        <NavLinks key={1}>
            <NavLink href="#">
                About
      </NavLink>
        </NavLinks>
    ]

    return (
        <Header {...{ links, logoLink }} />
    )

}


export default GlobalHeader