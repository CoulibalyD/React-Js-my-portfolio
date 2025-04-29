'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        const data = new FormData(form)
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json',
            },
        })

        if (response.ok) {
            setSuccess(true)
            form.reset()
            setTimeout(() => setSuccess(false), 7000)
        }
    }

    return (
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
            {/* Intro */}
            <p className="mb-10 text-lg">
                Une opportunité, une question ou juste envie de dire bonjour ? N’hésitez pas à me laisser un message 👇
            </p>

            <motion.h2
                className="text-3xl font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                Contact
            </motion.h2>

            {/* ✅ Message de succès */}
            {success && (
                <motion.p
                    className="text-green-600 font-semibold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    Message envoyé avec succès ✅
                </motion.p>
            )}

            {/* FORMULAIRE connecté à Formspree */}
            <motion.form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mgvkoyak"
                method="POST"
                className="space-y-4 w-full max-w-md"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {["Nom", "Email", "Message"].map((placeholder, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {placeholder !== "Message" ? (
                            <input
                                name={placeholder.toLowerCase()}
                                required
                                type={placeholder === "Email" ? "email" : "text"}
                                placeholder={placeholder}
                                className="w-full p-2 border"
                            />
                        ) : (
                            <textarea
                                name="message"
                                required
                                placeholder={placeholder}
                                className="w-full p-5 border"
                            />
                        )}
                    </motion.div>
                ))}

                {/* Bouton d'envoi */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white w-full">
                        Envoyer
                    </button>
                </motion.div>
            </motion.form>
        </section>
    )
}
