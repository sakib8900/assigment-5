// get value
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}
// blog html jawar jnno code
const blogContainer = document.getElementById("btn-blog").addEventListener('click', function(){
    window.location.href = '/blog.html'
});

// work str
document.getElementById("btn-noakhali").addEventListener('click', function(){
    // input theka man
    const noakhaliAmount = getInputValueById("noakhali-amnt");
    const totalAmount = parseFloat(document.getElementById("total-amount").innerText);
    // 1st input span
    const addedTk = document.getElementById("added-tk");
    addedTk.innerText = noakhaliAmount;

    const baciJawaTk = totalAmount - noakhaliAmount;
    const addedBacaTk = document.getElementById("total-amount");
    addedBacaTk.innerText = baciJawaTk;
})
