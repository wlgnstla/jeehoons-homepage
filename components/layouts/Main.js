import Head from 'next/head'
import Navbar from '../navbar'
import {Box, Container} from '@chakra-ui/react'
import Footer from '../footer'
import VoxelCat from '../voxel-cat'
export default function Main({children,router}) {
    return (
        <Box as='main' pb={8}> 
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Jeehoon&apos;s Website </title>
            <link rel='icon' href='https://cdn0.iconfinder.com/data/icons/sushi-bold/256/sushi-24-512.png'/>
        </Head>
            <Navbar path={router.asPath}/>
            <Container maxW='container.md' pt={14}>
                <VoxelCat/>
                {children}
                <Footer/>
            </Container>
        </Box>
    )
}
