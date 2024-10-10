import { Navbar, NavbarBrand, NavbarContent, Link, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ShoppingCart } from "./ShoppingCart";
import { useInputValue } from "../hooks/useInputValue";
import { UserPopover } from "./UserPopover";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleChange, value } = useInputValue()

  useEffect(() => {
    console.log(value)

  }, [value])
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl">Ferretería</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <Input onChange={handleChange} type="search" placeholder="Buscar productos..." className="w-96" variant="bordered" size="md" />
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        <UserPopover />
        <div className="hidden lg:flex">
          <ShoppingCart />
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
