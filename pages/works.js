import { Container, SimpleGrid, Heading} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/simple-grid'
import thumbKitsune from '../public/images/works/kitsune-pet-thumbnail.png'
import thumbReposStars from '../public/images/works/repos-stars-thumbnail.png'
import thumbWeatherApp from '../public/images/works/weather-app-thumbnail.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
    <Container>
      <Heading mb={4} as='h3' fontSize='20px'>Works</Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id='kitsune-pet' title="Kitsune-Pet" thumbnail={thumbKitsune}>
          A virtual fox pet simulation game
            </WorkGridItem>
        </Section>
      <Section>
        <WorkGridItem id='repos-etoile' title="Repos Étoile" thumbnail={thumbReposStars}>
          A search engine that categorizes popular GitHub repositories
          by programming langauges.
        </WorkGridItem>
      </Section>
        <Section>
          <WorkGridItem id='weather-app' title="Weather App" thumbnail={thumbWeatherApp}>
          A minimalistic app that displays the city&apos;s current weather and image. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}
export default Works
