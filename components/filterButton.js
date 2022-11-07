import {Box, Center, Stack, Tab, TabList, Tabs} from "@chakra-ui/react";

export default function  FilterButton() {
    let choiceTag = 'all';

    return(
        <Center mb={3}>
            <Tabs variant='soft-rounded' colorScheme='blackAlpha'>
            <TabList>
                <Tab>полиуретан</Tab>
                <Tab>винил</Tab>
                <Tab>полировка</Tab>
                <Tab>керамика</Tab>
                <Tab>химчистка</Tab>
                {/*<Tab onClick={ChangeChoice('123')}>{choiceTag}</Tab>*/}
            </TabList>
        </Tabs>
        </Center>
    )
}

function ChangeChoice(object, choiceTag) {
    console.log(choiceTag)
    if (object === choiceTag) {
        return choiceTag = 'all'
    }
    else {
        return choiceTag = object
    }
}