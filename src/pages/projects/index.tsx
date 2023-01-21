import {Center, Container, Flex, Text} from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import {Icon} from "@chakra-ui/icons";
import {RiLinkedinFill} from "react-icons/ri";
import {BsGithub} from "react-icons/bs";
import Footer from "@/components/Footer";

export default function Projects() {
    return(
        <>
            <Center>
                <Container>
                    <Text className={'glitch'}  fontWeight="bold" fontSize="3rem" data-text={'Projects'} width='fit-content' textColor='#33272a'> Projects.</Text>
                    <Flex flexDirection='column' gap={4}>
                        <ProjectCard name={'Cudoku'} description={'A multiplayer Sudoku to play with friends'} categories={['React','NodeJs','MongoDB','SocketIO']}></ProjectCard>
                        <ProjectCard name={'Zulf'} description={'A CMS and dashboard application for Zulf Autohouse'} categories={['React','NodeJs','MongoDB','SocketIO']}></ProjectCard>
                        <ProjectCard name={'Sticky Note'} description={'Create a history of sticky notes'} categories={['React','Java','SpringBoot','MongoDB','SocketIO']}></ProjectCard>
                        <ProjectCard name={'MBTI'} description={'Find like minded people and connect.'} categories={['React','ASP.NET','MicrosoftSQL','SocketIO']}></ProjectCard>
                        <ProjectCard name={'Barstool'} description={'Play drinking games online with a lobby of friends.'} categories={['React','NodeJs','MongoDB','SocketIO']}></ProjectCard>
                        <ProjectCard name={'Arche'} description={'Archeologist project management application with digitized Munsell Color System'} categories={['Angular','NodeJs','Postgres','Docker', 'Leaflet']}></ProjectCard>
                    </Flex>
                </Container>
            </Center>
        </>
    )
}

type ProjectsProps  = {

}