function buyTicketButtonClick() {



    const bannerSection = document.getElementById('banner')
    bannerSection.classList.add('hidden')

    const buyTicketSection = document.getElementById('buyTicket')
    buyTicketSection.classList.remove('hidden')



}

const allBtn = document.getElementsByClassName('A')
console.log(allBtn);

let count = 0

let seat = 8



for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1
        seat = seat - 1

        if (count <= 4) {
            btn.style.backgroundColor = 'lightGreen'
            setInnerText("seat-count", count)
            setInnerText("available", seat)

            const seatVariable = e.target.innerText
            const p1 = document.createElement("p");
            const takaId = document.getElementById("taka").innerText

            const p2 = document.createElement("p");
            p2.innerText = takaId;

            p1.innerText = seatVariable;


            const addedSeatById = document.getElementById("addedSeat")

            const li = document.createElement("li");

            li.appendChild(p1)
            const newContent = document.createTextNode("Economy")
            p3 = document.createElement("p")
            p3.appendChild(newContent)
            li.appendChild(p3)


            addedSeatById.appendChild(li)

            li.appendChild(p2)

            // total price

            const totalPrice = document.getElementById("total-price").innerText
            const convertedTotalPrice = parseInt(totalPrice)
            document.getElementById("total-price").innerText = convertedTotalPrice + parseInt(takaId)

            // Grand total

            const grandTotal = document.getElementById("grand-total").innerText
            const convertedGrandTotal = parseInt(grandTotal)
            document.getElementById("grand-total").innerText = convertedGrandTotal + parseInt(takaId)



        }
        else {
            alert('you can select maximum four')
        }



    })



}


const applyBtn = document.getElementById("app")
applyBtn.addEventListener("click", function () {
    let count = document.getElementById("seat-count").innerText;
    let couponElement = document.getElementById('inputId').value
    const couponNumberOne = document.getElementById("coupon1").innerText
    const couponNumberTwo = document.getElementById("coupon2").innerText
    if (couponElement === couponNumberOne && count > 3) {
        const grandTotal = document.getElementById("grand-total").innerText
        console.log(grandTotal)
        const convertedGrandTotal = parseInt(grandTotal)
        const discount = convertedGrandTotal * 0.15
        console.log(discount)
        const discountAmount = convertedGrandTotal - discount
        document.getElementById("grand-total").innerText = discountAmount.toFixed(2)
        const disable = document.getElementById('vanish')
        disable.style.display = 'none'

    } else if (couponElement === couponNumberTwo && count > 3) {
        const grandTotal = document.getElementById("grand-total").innerText
        console.log(grandTotal)
        const convertedGrandTotal = parseInt(grandTotal)
        const discount = convertedGrandTotal * 0.2
        console.log(discount)
        const discountAmount = convertedGrandTotal - discount
        document.getElementById("grand-total").innerText = discountAmount.toFixed(2)
        const disable = document.getElementById('vanish')
        disable.style.display = 'none'
    }


    else {
        alert("You have to select atLeast more than 3 to get the discount")
    }
})



let numberInput = document.getElementById("num")
numberInput.addEventListener("keyup", function () {
    const btn =document.getElementById("next")
    let count=document.getElementById("seat-count").innerText

    const phoneNumber = document.getElementById("num").value
    if (phoneNumber.length === 11 && count>0) {
        btn.removeAttribute("disabled")
    }
    else if(phoneNumber.length!=11) {

        btn.setAttribute("disabled", true)
    }



            })






function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}




