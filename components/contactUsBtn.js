import {Box} from "@chakra-ui/react";


// https://chakra-ui.com/docs/components/popover
export default function ContactUSBtn () {
    // const [open, setOpen] = useState(false);
    return (
        <Box position='fixed'
             bottom='20px'
             right={['16px', '84px']}
             zIndex={1}
             bg='red'
        >contact us</Box>
    )
}