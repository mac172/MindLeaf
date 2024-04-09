"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarMenu";
import { cn } from "@/utils/cn";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export function NavbarDemo() {
  return (
    <div>
        <div className="hidden lg:block relative lg:w-full md:w-52 flex items-center justify-center">
        <DeskNav className="top-2" />
        </div>
        <div className="block lg:hidden relative lg:w-full md:w-52 flex items-center justify-center">
        <MobileNav />
        </div>
    </div>
  );
}

function DeskNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">UI/UX</HoveredLink>
            <HoveredLink href="/seo">AI</HoveredLink>
            <HoveredLink href="/branding">CyberSecurity</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Learn">
          <div className="  text-sm grid grid-cols-2 lg:gap-10 gap-2 lg:p-4">
            <ProductItem
              title="Java"
              href="https://algochurn.com"
              src="/lang-logos/java.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="JavaScript"
              href="https://tailwindmasterkit.com"
              src="/lang-logos/javascript.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Kotlin"
              href="https://gomoonbeam.com"
              src="/lang-logos/kotlin.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Python"
              href="https://userogue.com"
              src="/lang-logos/python.webp"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Home</HoveredLink>
            <HoveredLink href="/individual">Roadmaps</HoveredLink>
            <HoveredLink href="/team">About Us</HoveredLink>
            <HoveredLink href="/enterprise">Contact Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Learn",
            href: "/learn"
        },
        {
            name: "Course",
            href: "/course"
        },
        {
            name: "Roadmaps",
            href: "/roadmaps"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Contact Us",
            href: "/contact"
        },

    ]
        
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle 
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit ml-4">OLP</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end" className="mr-6">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {
                    menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link 
                              color={
                                index == 1 ? "primary" : index == menuItems.length - 1 ? "danger" : "foreground"
                              }
                              className="w-full"
                              href={item.href}
                              size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))
                }
            </NavbarMenu>
        </Navbar>
    )
}
