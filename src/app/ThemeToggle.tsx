'use client'

import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const html = document.documentElement
        const storedTheme = localStorage.getItem('theme')

        if (storedTheme === 'dark') {
            html.classList.add('dark')
            setIsDark(true)
        } else {
            html.classList.remove('dark')
            setIsDark(false)
        }
    }, [])

    const toggleTheme = () => {
        const html = document.documentElement
        if (isDark) {
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        setIsDark(!isDark)
    }

    return (
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    )
}
