'use client'

import { motion } from 'framer-motion'

export default function ProjectsPage() {
    const projets = [
        {
            title: "Portfolio",
            desc: "Mon site personnel",
            link: "http://coulibalydev.c1.biz/"
        },
        {
            title: "CM house",
            desc: "Entreprise qui gère les images d'autres activité",
            link: "https://coulibalyd.github.io/community-manager-house/" },
        {
            title: 'Plateforme de gestion médicale',
            desc: 'Application web pour la gestion des patients, rendez-vous et factures. Développée avec Angular & Spring Boot.',
            link: '#'
        },
        {
            title: 'Suivi scolaire',
            desc: 'Interface admin + app mobile pour le suivi des élèves. Projet réalisé avec React Native, Node.js et MongoDB.',
            link: '#'
        }
    ]
    return (
        <motion.section
            className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h2 className="text-3xl font-semibold mb-6 text-center">Mes projets</h2>
            <ul className="space-y-6">
                {projets.map((p, index) => (
                    <li key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                        <p className="mb-2">{p.desc}</p>
                        <a href={p.link} className="text-sky-600 hover:underline">Voir le projet</a>
                    </li>
                ))}
            </ul>
        </motion.section>
    )
}
