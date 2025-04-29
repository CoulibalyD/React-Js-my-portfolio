'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="sticky top-0 z-50 bg-black-950 backdrop-blur-sm text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo + Nom */}
               <Link href="/">
                   <div className="flex items-center space-x-3">
                       <img src="/assets/images/logo.png" alt="mon_logo" className="w-22 h-20 rounded-full" />
                       <span className="text-2xl font-bold hover:underline">
                        Mr Coulibaly
                    </span>
                   </div>
               </Link>
                {/* Bouton burger mobile */}
                <div className="md:hidden">
                    <motion.button
                        onClick={toggleMenu}
                        initial={false}
                        animate={{ rotate: menuOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </motion.button>
                </div>

                {/* Menu desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:underline">Accueil</Link>
                    <Link href="/about" className="hover:underline">À propos</Link>
                    <Link href="/projects" className="hover:underline">Projets</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>

                {/* Menu mobile */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-6 py-6 md:hidden z-50"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Accueil</Link>
                            <Link href="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>À propos</Link>
                            <Link href="/projects" className="hover:underline" onClick={() => setMenuOpen(false)}>Projets</Link>
                            <Link href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}
