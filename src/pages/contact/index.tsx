import {
    Button,
    Center,
    Container,
    createStandaloneToast,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    Textarea
} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import {ChangeEvent, useRef, useState} from "react";
import Link from "next/link";
import { useToast } from '@chakra-ui/react'

export default function Contact() {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const form = useRef();
    const { ToastContainer, toast } = createStandaloneToast()


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

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        emailjs.sendForm('service_v9fe1zp', 'template_l2b5a9p', form.current, 'cH9eptZm4IEH6YDjm')
            .then((result) => {
                toast({
                    position: 'bottom-right',
                    title: 'Message Sent.',
                    description: "Your message has been successfully delivered. I will respond in 1-2 days.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }, (error) => {
                toast({
                    position: 'bottom-left',
                    title: 'Message not sent.',
                    description: "Your message has been not delivered due to an error. Please try to contact me directly by email.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            });
        setMessage('');
        setName('');
        setEmail('');
    }

    const isNameInvalid = name === '';
    const isEmailInvalid = email === '';


    return(
        <>
            <Center>
                <Container>
                    <Text className={'glitch'}  fontWeight="bold" fontSize="3rem" data-text={'Contact'} width='fit-content' textColor='#33272a'> Contact.</Text>
                    <Text>Get in touch or shoot me an email directly on </Text><Link href='/contact'><Button size='sm' variant='intro'> cunnisonkyle@gmail.com </Button></Link>.
                    {/*// @ts-ignore*/}
                    <form ref={form} onSubmit={sendEmail}>
                        <Flex flexDirection='column' gap={10} paddingTop='20px' >
                            <FormControl isInvalid={isNameInvalid} isRequired>
                                <Input placeholder='Name'  name="name" value={name} onChange={e => handleInputChange(e,'name')} />
                                {isNameInvalid && (
                                    <FormErrorMessage>Name is required.</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={isEmailInvalid} isRequired>
                                <Input placeholder='Email' name="email" type='email' pattern={'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)'} value={email} onChange={e => handleInputChange(e,'email')} />
                                {isEmailInvalid && (
                                    <FormErrorMessage>Email is required.</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl>
                                <Textarea
                                    value={message}
                                    name="message"
                                    h='250px'
                                    size='md'
                                    onChange={e => handleInputChange(e,'message')} placeholder='Message' />
                            </FormControl>
                        </Flex>
                        <br/>
                        <Button type='submit' bgColor='honeydew' color='gray.600' isDisabled={isNameInvalid || isEmailInvalid}>Send</Button>
                    </form>
                </Container>
            </Center>
            <ToastContainer />
        </>
    )
}

type ContactProps  = {

}