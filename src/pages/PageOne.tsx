import React from 'react'
import { Section, Header, Button } from './style'
import { motion } from 'framer-motion'

const PageOne = () => {
    return (
        <motion.div
            /*
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                */

            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Section id="one">
                <Header>Page One</Header>
                <Button to="/pagetwo">To Page Two</Button>
            </Section>
        </motion.div>
    )
}

export default PageOne
