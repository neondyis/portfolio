import {Card, CardBody, CardFooter, Tag, Text} from "@chakra-ui/react";
import Link from "next/link";

export default function ProjectCard({name,description,categories,imgUrl,projectLink=''}: ProjectCardProp) {
    return (
        <Link href={projectLink} rel="noopener noreferrer" target="_blank">
            <Card h={'300px'} maxW={'300px'} flexDirection='column-reverse' backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 80%),url(${imgUrl})`} backgroundRepeat={'no-repeat'} backgroundPosition={"center"}>
            <CardBody h={'100%'}>
                <Text color='#ffffff'  fontWeight="bold" fontSize="2rem">{name}</Text>
                <Text color='#ffffff' fontSize="sm" fontFamily="Blorado, sans-serif">{description}</Text>
                {categories.length > 0 &&
                    categories.map((tab,index) => {
                        return (<Tag key={index} marginRight='5px' borderRadius='full' background='rgb(213, 213, 213,0.46)' color='#ffffff'>{tab}</Tag>)
                    })
                }
            </CardBody>
            <CardFooter>
                <Text> </Text>
            </CardFooter>
        </Card>
        </Link>
    )
}

type ProjectCardProp = {
    name: string;
    description:string;
    categories: string[];
    imgUrl?: string;
    projectLink?: string;
}