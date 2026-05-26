import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const HoverNavigation = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);

  // Track which section is in view
  useEffect(() => {
    const sectionIds = items.map((item) => item.link.replace("/#", ""));
    const observers = [];

    sectionIds.forEach((id, idx) => {
      if (!id) return;
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(idx);
            }
          });
        },
        { rootMargin: "-20% 0px -50% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgerOpen &&
        hamburgerRef.current &&
        menuRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerOpen]);

  // Use hoveredIndex when hovering, otherwise use activeIndex
  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <>
      <div className="fixed top-5 left-1/2 z-50 box-border hidden -translate-x-1/2 items-center justify-center overflow-auto rounded-[40px] border border-gray-700 bg-[#101010]/80 px-5 py-2 backdrop-blur-md md:flex md:w-auto shadow-lg">
        <nav aria-label="Desktop Navigation" className="flex items-center justify-center overflow-hidden">
          <ul className="flex flex-row items-center justify-center gap-1 overflow-hidden">
            {items.map((item, idx) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="group relative block h-fit px-5 py-2"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {displayIndex === idx && (
                      <motion.span
                        className="absolute inset-0 z-10 block h-full w-full rounded-3xl bg-white"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.15 },
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15, delay: 0.2 },
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <NavBarLink>{item.label}</NavBarLink>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="fixed top-5 left-1/2 z-50 flex w-[90%] -translate-x-1/2 justify-end rounded-full border border-gray-700 bg-[#101010]/80 pr-4 py-3 backdrop-blur-xl md:hidden shadow-lg">
        <div
          ref={hamburgerRef}
          className="flex cursor-pointer items-center justify-center px-2 py-1 text-white z-50"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${hamburgerOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${hamburgerOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${hamburgerOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {hamburgerOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 right-0 left-1/2 z-40 w-[90%] -translate-x-1/2 rounded-2xl bg-[#151515]/95 py-4 text-white backdrop-blur-xl md:hidden border border-gray-700 shadow-xl"
          >
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-2">
                {items.map((item, idx) => (
                  <motion.li
                    key={item.link}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.3,
                    }}
                    className="rounded-2xl px-3"
                  >
                    <a
                      href={item.link}
                      className="block rounded-lg px-4 py-3 text-center text-lg font-bold transition-colors hover:bg-gray-800"
                      onClick={() => setHamburgerOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const NavBarLink = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-fit w-full overflow-hidden rounded-2xl text-center mix-blend-difference font-bold transition-all ease-out",
        className
      )}
    >
      {children}
    </div>
  );
};
