import {Center, Container, Text} from "@chakra-ui/react";
import GlitchText from "@/components/GlitchText";

export default function About () {
    return (
        <>
                <Container>
                    <GlitchText text={'About Me'}></GlitchText>
                    <br/>
                    <Text>Current Playlist</Text>
                    <iframe style={{borderRadius:"12px"}}
                            src="https://open.spotify.com/embed/playlist/7bHRZt5pRExDe9DZXmYkHw?utm_source=generator&theme=0"
                            width="100%" height="380" frameBorder="0" allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                    <br/>
                    <Text>
                        My Reads
                    </Text>
                </Container>
            </>
    )
}