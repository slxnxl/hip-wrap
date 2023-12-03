import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    useDisclosure
} from "@chakra-ui/react";
import {Player} from "@lottiefiles/react-lottie-player";
import {useState} from "react";

import InputMask from "react-input-mask";


// https://chakra-ui.com/docs/components/popover
export default function ContactUSBtn() {
    // const [open, setOpen] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [number, setNumber] = useState('')
    const [sending, setSending] = useState(false)

    const sendData = () => {
        if (number.length <13) {
            alert("Пожалуйста, введите номер телефона");
            return;
          }
          setSending(true)
        const formData = {
            number: number,
            product: null,
            page: window?.location?.pathname + " плавающая"
          };

          fetch('/api/sendLead', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => {
              if (response.ok) {
                onClose()
                setSending(false)
                return response.json();
              } else {
                throw new Error('Failed to send data');
              }
            })
            .then((data) => {
              console.log('Response from the API:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }

    return (
        <>
            <Button
                position='fixed'
                bottom='20px'
                right={['16px', '84px']}
                zIndex={10}
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
                            <Input onChange={(e) => setNumber(e.target.value)} as={InputMask} mask="*** *** ** **" maskChar={null} type='tel'
                                   placeholder='Номер телефона' className="modal_input"/>
                        </InputGroup>
                    </ModalBody>

                    <ModalFooter>
                        {sending ? (
                            <Spinner />
                        ) : <Button colorScheme='purple' mr={3} onClick={sendData} className="modal_footer-btn">
                        Отправить
                    </Button>}
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

