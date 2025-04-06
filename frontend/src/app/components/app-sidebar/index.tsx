"use client"
import React, { useState } from "react"
import { Menu, ChevronLeft } from "lucide-react"

import { sidebarItems } from "@/constants/sidebarItems"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const AppSidebar = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <aside
        className={cn(
          "relative transition-all duration-300 ease-in-out overflow-hidden h-[calc(100vh-44px)] border-r-1 border-b-neutral-600",
          open ? "w-64" : "w-16"
        )}
      >
        <nav className="flex flex-col space-y-1 p-2">
          {sidebarItems.map(({ icon: Icon, title, url }) => (
            <a
              key={title}
              href={url}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700"
            >
              {open &&
                <>
                  <Icon className="w-5 h-5" /> <span>{title}</span>
                </>}
            </a>
          ))}
        </nav>
      </aside>

      <Button
        variant="ghost"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "absolute top-16 z-20 w-[36px] rounded-full border shadow bg-white p-2 hover:bg-gray-50 transition-all duration-300",
          open ? "left-[237px]" : "left-[45px]"
        )}
      >
        {open ? <ChevronLeft /> : <Menu />}
      </Button>
    </>
  )
}

export default AppSidebar
