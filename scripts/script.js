function buyTicketButtonClick(){



    const bannerSection =document.getElementById('banner')
    bannerSection.classList.add('hidden')

    const buyTicketSection =document.getElementById('buyTicket')
    buyTicketSection.classList.remove('hidden')

   
    
} 

const allBtn =document.getElementsByClassName('A')
console.log(allBtn);

let count =0

let seat=8

for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count=count+1
        seat=seat-1
        
        if(count<=4){
            btn.style.backgroundColor='lightGreen'
            setInnerText("seat-count", count)
            setInnerText("available",seat)

            const seatVariable=e.target.innerText
            const p1=document.createElement("p");
            const takaId=document.getElementById("taka").innerText

            const p2= document.createElement("p");
            p2.innerText=takaId;

            p1.innerText=seatVariable;
            

            const addedSeatById =document.getElementById("addedSeat")
           
            const li=document.createElement("li");
            
            li.appendChild(p1)
            const newContent=document.createTextNode("Economy")
            p3=document.createElement("p")
            p3.appendChild(newContent)
            li.appendChild(p3)
            
            // const p2=document.createElement("p");
            // const newContentTwo=takaId

           
            addedSeatById.appendChild(li)

            li.appendChild(p2)








            

        
        }
        else{
            alert()
        }
        
        
        // setInnerText("seat-count", count)


        // const B=e.target.innerTex
        // console.log(B)
        



    })

}

function setInnerText(id, value){
    document.getElementById(id).innerText=value
}


