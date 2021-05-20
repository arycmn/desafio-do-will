import {Container, Iframe1, Iframe2, IframeContainer} from "./style";
import Header from "../../Components/Header";
import {useEffect, useState} from "react";


const Home = () => {
    const [widthIframe1, setWidthIframe1] = useState(50)
    const [widthIframe2, setWidthIframe2] = useState(50)


    useEffect(() => {
        Listener()
    }, [])

    const ReceiveMessage = (event) => {
        console.log(event.data)

        if (event && event.data && event.data.type === 'grow') {
            if (event.data.origin === 'iframe1') {

                const newWidthIframe2 = widthIframe2 / 2
                const newWidthIframe1 = widthIframe1 + newWidthIframe2

                setWidthIframe1(newWidthIframe1)
                setWidthIframe2(newWidthIframe2)
            }else{
                const newWidthIframe1 = widthIframe1 / 2
                const newWidthIframe2 = widthIframe2 + newWidthIframe1

                setWidthIframe1(newWidthIframe1)
                setWidthIframe2(newWidthIframe2)
            }
        }

        if (event && event.data && event.data.type === 'reset'){
            setWidthIframe1(50)
            setWidthIframe2(50)
        }

        if (event && event.data && event.data.type === 'changeImage'){
            const wn = document.getElementById('iframe2').contentWindow
            const payload = event.data
            wn.postMessage(payload,'*')
        }

        Listener()
    }

    const Listener = () => {
        window.addEventListener('message', ReceiveMessage, false)
    }

    return (
        <Container>
            <Header/>
            <IframeContainer>
                <Iframe1 width={widthIframe1} id={'iframe1'} src={'http://localhost:3000/iframe1'}/>
                <Iframe2 width={widthIframe2} id={'iframe2'} src={'http://localhost:3000/iframe2'}/>
            </IframeContainer>
        </Container>
    )
}

export default Home