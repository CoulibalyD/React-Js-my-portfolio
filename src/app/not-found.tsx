'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-black-950 text-white text-center p-8">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-8"
            >
                <img
                    src="/assets/images/astronaut.png"
                    alt="Lost Astronaut"
                    className="w-90 h-90 mx-auto"
                />
            </motion.div>

            <h1 className="text-5xl font-bold mb-4">404 - Page introuvable</h1>
            <p className="text-xl mb-8">Oups, vous êtes perdu dans l’espace... 🚀🌌</p>

            <Link href="/" className="bg-sky-600 hover:bg-sky-400 text-white font-semibold py-2 px-6 rounded">
                Retour à l'accueil
            </Link>
        </section>
    )
}
