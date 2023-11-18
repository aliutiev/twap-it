
import React from 'react';

import Link from 'next/link'


require('@demox-labs/aleo-wallet-adapter-reactui/dist/styles.css');

function HeaderRightArea() {
  return (
    <div className="relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8">

      test
    </div>
  );
}


export function Header() {


  return (
    <nav
      className={`fixed top-0 z-30 flex w-full items-center justify-between px-4 transition-all duration-300 ltr:right-0 rtl:left-0 sm:px-6 lg:px-8 xl:px-10 3xl:px-12`}
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12">
        <Link href='/'>
          Aleo Lend
        </Link>
      </div>
      <div className="hidden md:flex md:gap-x-6">
      Navigation
      </div>
      <HeaderRightArea />
    </nav>
  );
}

interface LayoutProps { }

export default function Layout({
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="bg-light-100 bg-black flex min-h-screen flex-col">
      <Header />
      <main className="mb-12 flex flex-grow flex-col pt-4 sm:pt-12">
        {children}
      </main>
    </div>
  );
}
