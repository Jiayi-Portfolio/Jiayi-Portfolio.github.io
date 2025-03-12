'use client'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow when scrolled down more than 100px
      setIsVisible(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <motion.div 
      className="fixed bottom-14 w-full grid place-items-center z-40 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown 
          className="w-10 h-10 text-accent" 
          strokeWidth={1.5}
        />
      </motion.div>
    </motion.div>
  )
}