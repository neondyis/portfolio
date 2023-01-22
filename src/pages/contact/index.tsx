import {Button, Center, Container, Flex, Input, Text, Textarea} from "@chakra-ui/react";
import { useState } from "react";

export default function Contact() {
    let [value, setValue] = useState('')

    // @ts-ignore
    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return(
        <>
            <Center>
                <Container>
                    <Text className={'glitch'}  fontWeight="bold" fontSize="3rem" data-text={'Contact'} width='fit-content' textColor='#33272a'> Contact.</Text>
                    <Text>Get in touch or shoot me an email directly on </Text><Text fontWeight="bold">cunnisonkyle@gmail.com</Text>
                    <Flex flexDirection='column' gap={10} paddingTop='20px'>
                        <Input placeholder='Name' />
                        <Input placeholder='Email' />
                        <Textarea value={value}
                                  h='250px'
                                  size='md'
                                  onChange={handleInputChange} placeholder='Message' />
                    </Flex>
                    <br/>
                    <Button>Submit</Button>
                </Container>
            </Center>
        </>
    )
}

type ContactProps  = {

}