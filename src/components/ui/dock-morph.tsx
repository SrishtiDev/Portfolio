"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Folder, Mail } from "lucide-react"

interface DockMorphProps {
  className?: string
  items?: {
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick?: () => void
  }[]
  position?: "bottom" | "top" | "left"
}

export default function DockMorph({ items, className, position = "bottom" }: DockMorphProps) {
  const [hovered, setHovered] = React.useState<number | null>(null)

  const handleScroll = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }
  }

  const dockItems =
    items && items.length > 0
      ? items
      : [
          { icon: Home, label: "Home", onClick: () => handleScroll("#home") },
          { icon: User, label: "About", onClick: () => handleScroll("#about") },
          { icon: Code, label: "Skills", onClick: () => handleScroll("#skills") },
          { icon: Folder, label: "Projects", onClick: () => handleScroll("#projects") },
          { icon: Mail, label: "Contact", onClick: () => handleScroll("#contact") },
        ]

  // Position classes
  const positionClasses = {
    bottom: "fixed bottom-6 left-1/2 -translate-x-1/2",
    top: "fixed top-6 left-1/2 -translate-x-1/2",
    left: "fixed left-6 top-1/2 -translate-y-1/2 flex-col",
  }

  return (
    <div
      className={cn(
        "z-50 flex items-center justify-center pointer-events-auto",
        positionClasses[position],
        className
      )}
    >
      <TooltipProvider delayDuration={100}>
        <div
          className={cn(
            "relative flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-full",
            position === "left" ? "flex-col gap-4 px-4 py-8" : "flex-row",
            "bg-gray-950/40 backdrop-blur-xl shadow-lg border border-gray-800/80"
          )}
        >
          {dockItems.map((item, i) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <div
                  className="relative flex items-center justify-center"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Morphic glass bubble */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1.4, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        className={cn(
                          "absolute inset-0 rounded-full -z-10",
                          "bg-gradient-to-tr from-indigo-500/40 via-violet-500/20 to-transparent",
                          "backdrop-blur-2xl",
                          "shadow-md shadow-indigo-500/20"
                        )}
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative z-10 rounded-full hover:scale-110 transition-transform text-gray-300 hover:text-white"
                    onClick={item.onClick}
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side={position === "left" ? "right" : position === "top" ? "bottom" : "top"}
                className="text-xs bg-gray-900 border-gray-800 text-gray-100"
              >
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  )
}
