// get value
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}
// blog html jawar jnno code
const blogContainer = document.getElementById("btn-blog").addEventListener('click', function(){
    window.location.href = './blog.html'
});


// history function
function addDonationHistory(cause, amount){
    const historySection = document.getElementById("history");
    const newEntry = `
     <div class="border-2 p-5 rounded-md space-y-3">
            <h2 class="font-bold">${amount} Taka is Donated for ${cause}</h2>
            <p>Date: ${new Date()}</p>
        </div>
    `;
    historySection.innerHTML += newEntry;
}
// function for all card section

function getAllDonation(inputId, addedTkId, totalAmountId, cause){
    const donationAmount = getInputValueById(inputId);
    const totalAmount = parseFloat(document.getElementById(totalAmountId).innerText);

    // when give alert take

    if(donationAmount <= 0 || isNaN(donationAmount)){
        alert("your input is not valid");
        return;
    }
    if(totalAmount < donationAmount){
        alert("you do not have enough money for donate");
        return;
    }

    // calculation
    const addedTk = document.getElementById(addedTkId);
    addedTk.innerText = donationAmount;

    const remainingBalance = totalAmount - donationAmount;
    const totalAmountElement = document.getElementById(totalAmountId);
    totalAmountElement.innerText = remainingBalance;

    // donation history called
    addDonationHistory(cause, donationAmount)
}

// called function for card


// when click noakhali btn
document.getElementById("btn-noakhali").addEventListener('click', function() {
    getAllDonation("noakhali-amnt", "added-tk", "total-amount", "flood at Noakhali, Bangladesh");
    // addDonationHistory(document.getElementById("noakhali-amnt").value, "Flood at noakhali, Bangladesh");
});

// when click feni btn
document.getElementById("btn-feni").addEventListener('click', function() {
    getAllDonation("feni-amnt", "added-tk-feni", "total-amount", "flood at Feni, Bangladesh");
    // addDonationHistory(document.getElementById("feni-amnt").value, "Flood at feni, Bangladesh");
});

// when click quota btn
document.getElementById("btn-quota").addEventListener('click', function() {
    getAllDonation("quota-amnt", "added-tk-quota", "total-amount", "Quota Movement Bangladesh");
    // addDonationHistory(document.getElementById("quota-amnt").value, "quota at Bangladesh");
});
// work str
// document.getElementById("btn-noakhali").addEventListener('click', function(){
    // // input theka man
    // const noakhaliAmount = getInputValueById("noakhali-amnt");
    // const totalAmount = parseFloat(document.getElementById("total-amount").innerText);

    // if(noakhaliAmount <= 0 || isNaN(noakhaliAmount)){
    //     alert("you input is not valid");
    //     return;
    // }
    // if(totalAmount < noakhaliAmount){

    // }
    // // 1st input span
    // const addedTk = document.getElementById("added-tk");
    // addedTk.innerText = noakhaliAmount;

    // const baciJawaTk = totalAmount - noakhaliAmount;
    // const addedBacaTk = document.getElementById("total-amount");
    // addedBacaTk.innerText = baciJawaTk;
// })

// ey code history btn r jonno
document.getElementById("btn-history").addEventListener('click', function(){
    document.getElementById("card-section").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden")
    // donation btn cls remove
    document.getElementById("btn-donation").classList.remove("text-black", "bg-[#B4F461]");

    // history btn cls add
    document.getElementById("btn-history").classList.add("text-black", "bg-[#B4F461]");


})

// ey code donation btn back jawr jnno
document.getElementById("btn-donation").addEventListener('click',function(){

    document.getElementById("card-section").classList.remove("hidden");
    document.getElementById("history").classList.add("hidden");

    document.getElementById("btn-history").classList.remove("text-black", "bg-[#B4F461]");

    document.getElementById("btn-donation").classList.add("text-black", "bg-[#B4F461]")
})
