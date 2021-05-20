import {ButtonContainer, Container} from "./style";
import {useEffect} from "react";

const Header = () => {

    const RandomColor = () => {
        const randomColor  = Math.floor(Math.random()*16777215).toString(16);
        const target = 'iframe'+(Math.floor(Math.random() * 2)+1).toString()
        const wn = document.getElementById(target).contentWindow
        const payload = {type:'changeColor',color:randomColor}

        PostMessage(wn,payload)

    }

    const Reset = () => {
        const wn = document.getElementById('iframe1').contentWindow
        const wn2 = document.getElementById('iframe2').contentWindow
        const payload = {type: 'reset'}
        PostMessage(wn,payload)
        PostMessage(wn2,payload)
        PostMessage(window,payload)
    }

    const PostMessage = (target,payload) => {
        target.postMessage(payload,'*')
    }

    const ReceiveMessage = (event) => {
    }

    useEffect(() =>{
        window.addEventListener('message',ReceiveMessage,false)
    },[])

    return (
        <Container>
            <ButtonContainer>
                <button onClick={RandomColor} >Change Color</button>
                <button onClick={Reset}>Reset</button>
            </ButtonContainer>
        </Container>
    )
}

export default Header