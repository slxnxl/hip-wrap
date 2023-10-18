import {
    Box, Button, Modal,
    useDisclosure, ModalOverlay,
    ModalContent, ModalHeader,
    ModalCloseButton, ModalBody,
    ModalFooter, InputGroup,
    InputLeftAddon, Input
} from "@chakra-ui/react";
import {Player} from "@lottiefiles/react-lottie-player";

import InputMask from "react-input-mask";


// https://chakra-ui.com/docs/components/popover
export default function ContactUSBtn() {
    // const [open, setOpen] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Button
                position='fixed'
                bottom='20px'
                right={['16px', '84px']}
                zIndex={1}
                bg='#3F3EC2'
                color='#fff'
                boxShadow='0 0 4px #fff'
                onClick={onOpen}>
                связаться с нами
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} preserveScrollBarGap={true}>
                <ModalOverlay/>
                <ModalContent className="modal">
                    <ModalHeader>
                        <div className="modal_header">
                            <div className="animated-title">
                                <div className="text-top">
                                    <div>
                                        <span>оставить</span>
                                        <span>заявку</span>
                                    </div>
                                </div>
                            </div>

                            <Phone/>
                        </div>
                    </ModalHeader>
                    <ModalCloseButton className="modal_close"/>
                    <ModalBody>
                        <InputGroup>
                            {/* eslint-disable-next-line react/no-children-prop*/}
                            <InputLeftAddon children='+7' className="modal_input"/>
                            <Input as={InputMask} mask="*** *** ** **" maskChar={null} type='tel'
                                   placeholder='Номер телефона' className="modal_input"/>
                        </InputGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='purple' mr={3} onClick={onClose} className="modal_footer-btn">
                            Отправить
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
        // <Box position='fixed'
        //      bottom='20px'
        //      right={['16px', '84px']}
        //      zIndex={1}
        //      bg='red'
        // >contact us</Box>    
    )
}

function Phone() {
    // Вот сюда gif с загрузкой
    return (
        <Player
            autoplay
            loop
            src="https://lottie.host/8484ed92-f5b5-4a03-9773-2f3095fb5730/HyL9E4mK57.json"
            //src="https://lottie.host/d8ebb058-8461-46fa-864c-c0c7d1882df7/nCizbtjQ7o.json"
            style={{position: 'absolute', top: '45px', width: '28%', right: '10%', transform: 'rotate(-160deg)'}}
            speed={0.5}
        />
    );
}

