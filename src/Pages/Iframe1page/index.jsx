import {Container, InputContainer} from "./style";
import {useEffect, useState} from 'react'

const Iframe1page = () => {
    const [color, setColor] = useState(false)
    const [urlImg, setUrlImg] = useState('')

    const ReceiveMessage = (event) => {
        if (event && event.data.type === 'changeColor') {
            const receivedColor = event.data.color
            console.log(receivedColor)
            setColor(receivedColor)
        }

        if (event && event.data.type === 'reset') {
            setColor(false)
        }

    }

    const GrowUp = () => {
        const payload = {type: 'grow', origin: 'iframe1'}
        window.parent.postMessage(payload, '*')
    }

    const ChangeImage = () => {

        const payload = {type: 'changeImage', url: urlImg}
        window.parent.postMessage(payload,'*')
    }


    useEffect(() => {
        Listener()
    }, [])

    const Listener = () => {
        window.addEventListener('message', ReceiveMessage, false)
    }
    return (
        <Container color={color}>
            <button onClick={GrowUp}>Grow Up!</button>
            <InputContainer>
                <form onSubmit={ChangeImage}>
                    <label for={'imageUrl'} >Image Url: </label>
                    <input id={'imageUrl'} type={'text'} onChange={(event) => setUrlImg(event.target.value)}/>
                    <button type={'submit'}>Submit</button>
                </form>
            </InputContainer>

        </Container>
    )
}

export default Iframe1page