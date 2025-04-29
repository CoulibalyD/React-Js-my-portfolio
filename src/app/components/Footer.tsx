'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
    return (
        <motion.footer
            className="bg-gray-900 text-white text-center p-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <p className="text-sm">&copy; {new Date().getFullYear()} Coulibaly Dramane. Tous droits réservés.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <Link href="/projects" className="hover:underline">Projets</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
        </motion.footer>
    )
}
