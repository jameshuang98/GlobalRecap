import React from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const Toolbar = () => {
    return (
        <div className="flex items-center justify-between px-3 py-1 shadow-md mb-2">
            <div>GlobalRecap</div>
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
        </div>
    )
}

export default Toolbar
