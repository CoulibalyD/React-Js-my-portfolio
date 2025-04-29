'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
    return (
        <motion.section
            className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Salut, je suis <span className="text-blue-600">Coulibaly</span> 👋
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-4">
                Développeur Full-Stack passionné par React et Next.js
            </h2>

            <p className="text-gray-600 max-w-2xl mb-8">
                Bienvenue sur mon portfolio personnel. Ici, je partage mes projets, mon parcours et mes compétences.
            </p>

            <a
                href="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
                Voir mes projets
            </a>
        </motion.section>
    )
}
