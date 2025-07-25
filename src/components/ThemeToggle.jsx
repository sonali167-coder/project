import React, { useEffect, useState } from 'react'
import {Moon, Sun} from "lucide-react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setisDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if(theme === "dark")
        {
            document.documentElement.classList.add("dark");
            setisDarkMode(true)
        }
        else{

            document.documentElement.classList.remove("dark");
            setisDarkMode(false)
        }
    }, [])

    const ToggleBtn = () => {
        if(isDarkMode)
        {
            document.documentElement.classList.remove("dark");
            setisDarkMode(false)
            localStorage.setItem("theme", "light");
        }
        else
        {
            document.documentElement.classList.add("dark");
            setisDarkMode(true)
            localStorage.setItem("theme", "dark");
        }
    }
  return (
    <button onClick={ToggleBtn} className={cn(
        "fixed max-sm:hidden right-5 top-5 z-60 p-2 rounded-full transition-colors",
        "duration-300 focus:outline-white"
    )}>
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-blue-500"/>}
    </button>
  )
}
