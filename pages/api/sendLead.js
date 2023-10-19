// TODO сюда функцию для отправки запросов клиентов на заказ
import {pb} from "../../utils/pb"



export default async function handler (req, res){
    if (req.method === 'POST') {
      try {
        // Parse the incoming JSON data
        const { number, product, page } = req.body;
        //TODO создать простого юзера для записей
        const authData = await pb.admins.authWithPassword('sypkovstepan@gmail.com', 'gTEW2h^ScZVq$C#x6t^7m');
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
        // Perform your desired actions with the data
        // For this example, we'll just log the data and send a response.
        console.log('Received data:', { number, product, page });
        const data = {
            "phone": number,
            "page": page,
            "product": product,
        };
        await pb.collection('leads').create(data);
        sendSubcription(data)
        // Send a response
        res.status(200).json({ message: 'Data received successfully' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the request' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  };
  


const key = "b03e9bc0-74d6-4d5f-8789-04f66f6e9baa";

async function sendSubcription(data) {
    try {
        console.log("data: ", data);
        const res = await fetch(
            'https://api.staticforms.xyz/submit',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accessKey: key,
                    subject: 'Новая заявка',
                    honeypot: '',
                    phone: "+7 "+data["phone"]
                }),
            }
        )
        if (res.ok) {
            return {
                status: 200,
                body: JSON.stringify({
                    message: 'email sent!',
                }),
            }
        }
        if (res.status !== 200) {
            return {
                status: 400,
                body: JSON.stringify({
                    message: 'bad request',
                }),
            }
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            body: JSON.stringify({
                message: 'something went wrong with the email submit!',
            }),
        }

    }
}

