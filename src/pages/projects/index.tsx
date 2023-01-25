import {Center, Container, Flex, Text} from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard";
export default function Projects() {
    return(
        <>
            <Center>
                <Text className={'glitch'}  fontWeight="bold" fontSize="3rem" data-text={'Projects'} width='fit-content' textColor='#33272a'> Projects.</Text>
            </Center>
            <Center gap={10}>
                    <Flex flexDirection='column' gap={4}>
                        <ProjectCard name={'Cudoku'} description={'A multiplayer Sudoku to play with friends'} categories={['React','NodeJs','MongoDB','SocketIO']} imgUrl={'https://i.ibb.co/pf7dMFr/coduku.png'} projectLink={'https://codoku.vercel.app/'}></ProjectCard>
                        <ProjectCard name={'Zulf'} description={'A CMS and dashboard application for Zulf Autohouse'} categories={['React','Hasura']} imgUrl={'https://i.ibb.co/8jgCX3F/zulf.png'}></ProjectCard>
                        <ProjectCard name={'Sticky Note'} description={'Create a history of sticky notes'} categories={['React','Java','SpringBoot','MongoDB','Docker']} imgUrl={'https://i.ibb.co/0M0NNbD/sticky.png'} projectLink={'https://note-front-gamma.vercel.app/'}></ProjectCard>
                    </Flex>
                <Flex flexDirection='column' gap={4}>
                    <ProjectCard name={'MBTI'} description={'Find like minded people and connect.'} categories={['React','ASP.NET','MicrosoftSQL','SocketIO']}></ProjectCard>
                    <ProjectCard name={'Barstool'} description={'Play drinking games online with a lobby of friends.'} categories={['React','NodeJs','MongoDB','SocketIO']}></ProjectCard>
                    <ProjectCard name={'Arche'} description={'Archeologist project management application with digitized Munsell Color System'} categories={['Angular','NodeJs','Postgres','Docker', 'Leaflet']} imgUrl={'https://i.ibb.co/270ZyxJ/Musell.png'}></ProjectCard>
                </Flex>
            </Center>
        </>
    )
}

type ProjectsProps  = {

}