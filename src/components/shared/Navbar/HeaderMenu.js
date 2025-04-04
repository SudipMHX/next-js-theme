"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const HeaderMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Force a re-render when the theme changes
    const handleThemeChange = () => {
      setTheme(theme)
    }

    window.addEventListener("storage", handleThemeChange)
    return () => window.removeEventListener("storage", handleThemeChange)
  }, [theme, setTheme])

  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ width: "100%", opacity: 1 }}
      animate={{
        width: isScrolled ? "60%" : "100%",
        opacity: 1,
        border: isScrolled ? "1px solid #eaeaea" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-2 left-1/2 -translate-x-1/2 backdrop-blur-3xl flex items-center justify-between px-6 py-2 rounded-full z-50 bg-white dark:bg-gray-900 shadow-md"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0.9 : 1 }}
        transition={{ duration: 0.3 }}
        className="text-xl font-bold text-gray-800 dark:text-gray-100"
      >
        SudipMHX
      </motion.div>
      <div className="hidden md:flex gap-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-amber-400 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <motion.button
        onClick={themeToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full transition-colors duration-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer"
      >
        <motion.div
          key={theme === "dark" ? "moon" : "sun"}
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: 180, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-600" />}
        </motion.div>
      </motion.button>
    </motion.nav>
  )
}

export default HeaderMenu

