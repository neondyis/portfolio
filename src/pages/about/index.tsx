import {Center, Container, Text} from "@chakra-ui/react";
import GlitchText from "@/components/GlitchText";

export default function About () {
    return (
        <>
            <Center>
                <Container>
                    <GlitchText text={'About Me'}></GlitchText>
                </Container>
            </Center>
            </>
    )
}