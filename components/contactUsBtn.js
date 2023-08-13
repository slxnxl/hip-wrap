import {
    Box, Button, Modal,
    useDisclosure, ModalOverlay,
    ModalContent, ModalHeader,
    ModalCloseButton, ModalBody,
    ModalFooter, InputGroup,
    InputLeftAddon, Input
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

import InputMask from "react-input-mask";



// https://chakra-ui.com/docs/components/popover
export default function ContactUSBtn() {
    // const [open, setOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                position='fixed'
                bottom='20px'
                right={['16px', '84px']}
                zIndex={1}
                bg='#3F3EC2'
                color='#fff'
                onClick={onOpen}>
                связаться с нами
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {/* <div className="animated-title">
                            <div className="text-top">
                                <div>
                                    <span>оставить</span>
                                    <span>заявку</span>
                                </div>
                            </div>
                        </div> */}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <InputGroup>
                            <InputLeftAddon children='+7' />
                            <Input as={InputMask} mask="*** *** ** **" maskChar={null} type='tel' placeholder='Номер телефона' />
                        </InputGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Box className="modal-footer">
                        <Phone/>
                        </Box>
                        <Button colorScheme='purple' mr={3} onClick={onClose}>
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
        src="https://lottie.host/d8ebb058-8461-46fa-864c-c0c7d1882df7/nCizbtjQ7o.json"
        style={{ display:'flex', flex: '60%' }}
      />
    );
  }

