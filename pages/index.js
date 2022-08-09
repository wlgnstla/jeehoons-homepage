import {List, ListItem, Link, Container,Button, Icon, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import {BioSection, BioYear} from '../components/bio' 
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5'
export default function Page() {
    return (
        <Layout>
        <Container>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align="center">
                Hi, I&apos;m a Full Stack Developer based in Chicago! 🏙
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1} >
                    <Heading mb={2} as='h2' variant='page-title'>
                        Jeehoon Sim
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer ) </p>
                </Box>
                <Box flexShrink={0}
                    mt={{base:4, md:0}}
                    ml={{md:6}}
                    align='center'
                >
                    <Image borderColor='whiteAlpha.800'
                    borderWidth={2}
                    borderStyle='solid'
                    maxWidth='100px'
                    display='inline-block'
                    borderRadius='full'
                    src='/images/infinite.png'
                    alt='Profile Image'
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
            <Heading fontSize='1.5em' mb={2} as='h3' variant='section-title'>
                Work 
            </Heading>
                <Paragraph> 
                    Jeehoon is a freelance and full-stack developer
                    based in Chicago with a passion for building stuff
                    he wants. He has a knack for all things launching products,
                    from planning and designing all the way to solving real-life problems
                    with code. When away from the computer, he loves spending time
                    with friends and family. Currently, he is an undergraduate studying 
                    {' '}
                    <Link color={useColorModeValue('blue.500','rgb(255, 99, 195)')} target="_blank" href="https://cse.engin.umich.edu/">
                    Computer Science
                    </Link>
                    {' '}
                    at the University of Michigan - Ann Arbor.
                </Paragraph>
            <Box align='center' my={4}>
                <NextLink href='/works'>
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                        My Portfolio
                    </Button>
                </NextLink>
            </Box>
            </Section>
            
            <Section delay={0.2}>
                <Heading fontSize='1.5em' mb={2} as='h3' varaint='section-title'>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in Busan (부산), South Korea 🏖️
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Pursuing the Bachelor of Science in Engineering (B.S.E.)
                    program in the College of Engineering at the
                    University of Michigan 〽️
                </BioSection>
                <BioSection>
                    <BioYear>2022 to Present</BioYear>
                    Working as a freelancer ✨
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading fontSize='1.5em' as='h3' variant='section-title'>
                    I ♥ 
                </Heading>
                <Paragraph>
                    Reading, Music, 
                    { ' ' }
                    <Link color={useColorModeValue('blue.500', 'rgb(225,99,195)')}target="_blank" href="https://jeehoonsim.wordpress.com/">
                    Writing
                    </Link>
                        , Playing Piano,
                    { ' ' }
                    <Link target='_blank' color={useColorModeValue('blue.500', 'rgb(255,99,195)')} href="https://wlgnstla.tumblr.com/">
                    Drawing
                        </Link>
                    , Games,
                    { ' ' }
                    <Link target='_blank' color={useColorModeValue('blue.500', 'rgb(255,99,195)')} href="https://500px.com/p/wlgnstla?view=photos">Photography
                    </Link>
                    .
                </Paragraph>
            </Section>

            <Section delay={0.4}>
                <Heading fontSize='1.5em' as='h3' variant='section-title'>
                    On the web
                </Heading>
                <List>
                <ListItem>
                    <Link target='_blank' href='https://github.com/wlgnstla'>
                    <Button colorScheme='teal'
                        variant='ghost'
                    leftIcon={<Icon as={IoLogoGithub}/>}
                    >
                    @wlgnstla
                    </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link target='_blank' href='https://www.linkedin.com/in/jeehoonsim/'>
                    <Button colorScheme='teal'
                        variant='ghost'
                    leftIcon={<Icon as={IoLogoLinkedin}/>}
                    >
                        Jeehoon Sim
                    </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link target='_blank' href='https://www.youtube.com/channel/UCyA8NILzpi30Ib9bd7XgN3g'>
                    <Button colorScheme='teal'
                        variant='ghost'
                    leftIcon={<Icon as={IoLogoYoutube}/>}
                    >
                        @wlgnstla
                    </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link target='_blank' href='https://www.instagram.com/jinsiminya/'>
                    <Button colorScheme='teal'
                        variant='ghost'
                    leftIcon={<Icon as={IoLogoInstagram}/>}
                    >
                        @jinsiminya
                    </Button>
                    </Link>
                </ListItem>
                </List>
            </Section>
        </Container>
        </Layout>
    )
}
