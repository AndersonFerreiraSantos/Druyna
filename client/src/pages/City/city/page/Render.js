import '../css/Render.css'

const Render = () => {

    function bugDom () {
    const wrapper = document.querySelector(".wrapper"),
    header = wrapper.querySelector("header");

    function onDrag({movementX, movementY}){
        console.log(movementX, movementY)
        movementX = movementX /4
        movementY = movementY /4
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

            <div class="wrapper"  >
              <div class = 'center'>
                <div class = 'sub'>
                    <header>
                        <div class= 'city'/>
                        <img class = 'img' src ='https://www.researchgate.net/publication/332380173/figure/fig1/AS:746871924473858@1555079551834/Map-of-Africa-highlighting-countries.jpg' />
                    </header>
                    <div class = 'edification' onClick={() => console.log('edification')}></div>
                  </div>
                </div>
            </div>

 
    )
}

export default Render