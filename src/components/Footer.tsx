import {Container, Flex} from "@chakra-ui/react";
import Link from "next/link";
import {Icon} from "@chakra-ui/icons";
import {RiLinkedinFill} from "react-icons/ri";
import {BsGithub} from "react-icons/bs";

export default function Footer (){
    return (
        <Container paddingTop='65px'>
            <Flex className={'footer'} gap={3} alignItems='center'>
                <Link href='https://www.linkedin.com/in/kyle-cunnison-995296132/' rel="noopener noreferrer" target="_blank"><Icon as={RiLinkedinFill} boxSize={6}></Icon></Link>
                <Link href='https://github.com/neondyis' rel="noopener noreferrer" target="_blank"><Icon as={BsGithub} boxSize={6}/></Link>
            </Flex>
        </Container>
    )
}