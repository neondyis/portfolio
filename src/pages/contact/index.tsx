import {Button, Center, Container, Flex, FormControl, FormLabel, Input, Text, Textarea} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import {ChangeEvent, useRef, useState} from "react";

export default function Contact() {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const form = useRef();


    let handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, type: string) => {
        let inputValue = e.target.value;
        switch (type) {
            case 'message':
                setMessage(inputValue)
                break;
            case 'name':
                setName(inputValue)
                break;
            case 'email':
                setEmail(inputValue)
                break;
        }
    }

    const sendEmail = () => {
        // @ts-ignore
        emailjs.sendForm('service_v9fe1zp', 'template_l2b5a9p', form.current, 'cH9eptZm4IEH6YDjm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const isNameInvalid = () => {
        return name !== '';
    }


    return(
        <>
            <Center>
                <Container>
                    <Text className={'glitch'}  fontWeight="bold" fontSize="3rem" data-text={'Contact'} width='fit-content' textColor='#33272a'> Contact.</Text>
                    <Text>Get in touch or shoot me an email directly on </Text><Text fontWeight="bold">cunnisonkyle@gmail.com</Text>
                    {/*// @ts-ignore*/}
                    <form ref={form}>
                        <Flex flexDirection='column' gap={10} paddingTop='20px'>
                            <FormControl>
                                <Input placeholder='Name'  name="name" value={name} onChange={e => handleInputChange(e,'name')} />
                                {/*<FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                            </FormControl>
                            <FormControl>
                                <Input placeholder='Email' name="email"  value={email} onChange={e => handleInputChange(e,'email')} />
                                {/*<FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                            </FormControl>
                            <FormControl>
                                <Textarea
                                    value={message}
                                    name="message"
                                    h='250px'
                                    size='md'
                                    onChange={e => handleInputChange(e,'message')} placeholder='Message' />
                                {/*<FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                            </FormControl>
                        </Flex>
                        <br/>
                        <Button onClick={sendEmail}>Submit</Button>
                    </form>
                </Container>
            </Center>
        </>
    )
}

type ContactProps  = {

}