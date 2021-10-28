function updateCase(itemID, increasing, totalID, itemPrice) {
    const caseInput = document.getElementById(itemID);
    let caseNumber = caseInput.value;
    if (increasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update case total price of item
    let caseTotal = document.getElementById(totalID);
    const caseTotalAmount = caseTotal;
    caseTotal.innerText = caseNumber * itemPrice;
}


// iphn 11 section 
// item plus unit 
document.getElementById("phone-plus").addEventListener('click', function () {
    updateCase("phone-number", true, "phone-total", 1219);
})
// item minus
document.getElementById("phone-minus").addEventListener('click', function () {
    updateCase("phone-number", false, "phone-total", 1219);
})

// iphn silicon case section 
// item plus unit 
document.getElementById("case-plus").addEventListener('click', function () {
    updateCase("case-number", true, 'case-total', 59);
})

// item minus
document.getElementById("case-minus").addEventListener('click', function () {
    updateCase("case-number", false, 'case-total', 59);
})
