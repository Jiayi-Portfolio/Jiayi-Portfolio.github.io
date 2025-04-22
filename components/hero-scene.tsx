'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function HeroScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="pointer-events-none flex">
      <AnimatePresence>
        {isClient && (
          <div className="w-full pointer-events-auto flex items-start mx-auto font-mono">
            <div className="text-left">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <h1 className="text-7xl font-light"
                >
                  <span className="text-accent px-2 box-decoration-clone">
                    JIAYI LI
                  </span>
                </h1>
              </motion.div>
              <p className="text-xl font-light">
                <span className="text-accent px-2 box-decoration-clone">
                  TECHNICAL ARTIST •
                  INTERACTIVE PLAY DESIGNER</span>
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

