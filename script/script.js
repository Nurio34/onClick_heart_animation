
const picture = document.querySelector("picture")

    picture.addEventListener("click",(e)=>{
        
        const emoji = document.createElement("div")
        emoji.innerHTML = "&#10084"
        emoji.className = "emoji hidden"
        document.body.appendChild(emoji)

        const x = e.clientX
        const y = e.clientY
        const emojiWidth = emoji.offsetWidth
        const emojiHeight = emoji.offsetHeight

        emoji.style = `left:${x-(emojiWidth/2)}px; top:${y-(emojiHeight/2)}px`
        emoji.classList.toggle("visible")
        
        setTimeout(() => {
            emoji.classList.toggle("visible")

            setTimeout(() => {
                document.body.removeChild(emoji)
            }, 1000);
            
        }, 1000);
    })