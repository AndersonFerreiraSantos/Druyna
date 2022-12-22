import { Container } from '../css/City'
import Chat from '../../../../chat/component/chat'

import './style.css'

const Clan = () => {

    function bugDom () {
    const wrapper = document.querySelector(".wrapper"),
    header = wrapper.querySelector("header");

    function onDrag({movementX, movementY}){
        console.log(movementX, movementY)
        movementX = movementX /8
        movementY = movementY /8
        let getStyle = window.getComputedStyle(wrapper);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);
        wrapper.style.left = `${leftVal + movementX }px`;
        wrapper.style.top = `${topVal + movementY }px`;
      }
      header.addEventListener("mousedown", ()=>{
        header.classList.add("active");
        header.addEventListener("mousemove", onDrag);
      });
  
      document.addEventListener("mouseup", ()=>{
        header.classList.remove("active");
        header.removeEventListener("mousemove", onDrag);
      });
    }

    setTimeout(bugDom, 1)

    return (
        <Container >

            <div class="wrapper"  >
                <header>
                </header>
            </div>
        </Container>

 
    )
}

export default Clan