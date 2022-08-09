import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
        style={{display:'inline-block'}}
        key={useColorModeValue('light','dark')}
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0, y:20}}
          transition={{duration:0.2}}
        >
      <IconButton
        aria-label="Toggle Theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
        </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
