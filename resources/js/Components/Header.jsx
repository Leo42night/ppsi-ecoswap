import * as React from "react";

function Logo() {
  return (
    <div className="flex gap-5 justify-between">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/318120a02fad09e99b5cfe268592cb9ddb3e08bdaf0ebc7b669c70260ecd22bc?apiKey=937261aeaab2482b817691a974988cbc&"
        alt="EcoSwap logo"
        className="shrink-0 aspect-[0.72] w-[46px]"
      />
      <div className="my-auto">
        Eco<span className="font-bold">Swap</span>
      </div>
    </div>
  );
}

function NavItem({ children }) {
  return <div>{children}</div>;
}

function NavMenu() {
  const navItems = ["EcoPost", "EcoDu", "EcoDule"];

  return (
    <nav className="flex gap-5 justify-between py-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      {navItems.map((item, index) => (
        <NavItem key={index}>{item}</NavItem>
      ))}
    </nav>
  );
}

function UserMenu() {
  return (
    <div className="flex gap-5 justify-between">
      <div className="justify-center py-6">Seller Dashboard</div>
      <div className="justify-center px-6 py-3 my-auto whitespace-nowrap border-2 border-solid border-neutral-800 rounded-[42px] max-md:px-5">
        Logout
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex gap-5 justify-between self-stretch p-12 text-base tracking-tighter leading-4 text-neutral-800 max-md:flex-wrap max-md:px-5">
      <Logo />
      <NavMenu />
      <UserMenu />
    </header>
  );
}

export default Header;
