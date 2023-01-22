import {Text} from "@chakra-ui/react";

export default function GlitchText({text}:GlitchTextProp) {
    return(
        <Text className={'glitch'}  fontWeight="bold" fontSize="3rem" data-text={text} width='fit-content' textColor='#33272a'>{text}.</Text>
    )
}

type GlitchTextProp = {
    text: string;
}
