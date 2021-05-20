import {Container, ImgContainer} from "./style";
import {useEffect, useState} from 'react'


const Iframe2page = () => {

    const [color,setColor] = useState(false)
    const [urlImg, setUrlImg] = useState('https://picsum.photos/200')

    const ReceiveMessage = (event) => {
        if(event && event.data.type === 'changeColor'){
            const receivedColor = event.data.color
            console.log(receivedColor)
            setColor(receivedColor)
        }

        if(event && event.data.type === 'reset'){
            setColor(false)
        }

        if(event && event.data.type === 'changeImage'){
            setUrlImg(event.data.url)
        }


    }

    const GrowUp = () => {
        const payload = {type:'grow',origin:'iframe2'}
        window.parent.postMessage(payload,'*')
    }


    useEffect(() =>{
        Listener()
    },[])

    const Listener = () => {
        window.addEventListener('message', ReceiveMessage, false)
    }

    return(
        <Container color={color}>
            <button onClick={GrowUp} >Grow Up!</button>
            <ImgContainer>
                <img src={urlImg} alt={'imagem-iframe1'}/>
            </ImgContainer>

        </Container>
    )
}

export default Iframe2page