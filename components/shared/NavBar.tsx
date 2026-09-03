"use client";

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education & Stack", href: "#education" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[72px] flex items-center border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1250px] items-center justify-between px-6 md:px-10 lg:pl-[100px]">
        <div className="flex items-center gap-3">
          <div className="size-2.5 rounded-full bg-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground">
              Yohannes Haile
            </span>
            <span className="hidden text-[12px] leading-tight text-foreground/70 sm:block">
              Full-Stack Developer | Next.js, React & TS
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-3 h-[1px] w-0 bg-primary transition-all duration-200 group-hover:w-[calc(100%-24px)]" />
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-2 flex items-center gap-2">
            <ThemeSwitcher />
            <Button variant="default" size="sm">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>

        {/* Mobile/tablet hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex flex-row items-center justify-between">
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerClose
                  className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </DrawerClose>
              </DrawerHeader>
              <div className="flex flex-col gap-1 px-4 pb-6 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="my-2 h-px bg-border" />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-full bg-primary px-4 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Mail className="size-4" />
                  Contact
                </a>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
