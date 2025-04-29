'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
    return (
        <motion.section
            className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h2 className="text-3xl font-semibold mb-4">À propos de moi</h2>
            <p className="mb-4">
                Je m'appelle Coulibaly Dramane. J’ai un parcours solide en ingénierie des systèmes d’information, avec une spécialisation en développement web full-stack.
            </p>
            <p className="mb-4">
                J’ai réalisé plusieurs projets, dont une plateforme de gestion pour un établissement de santé et un système de suivi scolaire, en utilisant Angular, Spring Boot et PostgreSQL.
            </p>
            <p className="mb-4">
                Je suis passionné par les interfaces intuitives, les performances et la sécurité des applications.
            </p>
            <p>
                Mes outils préférés : <strong>React.js, Next.js, Node.js, Spring Boot, TailwindCSS, PostgreSQL</strong>.
            </p>
        </motion.section>
    )
}
