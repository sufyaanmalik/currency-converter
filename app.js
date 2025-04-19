let dropdownList = document.querySelectorAll(".dropdowns select");
let fromCurrency = document.querySelector("#from-currency");
let ToCurrency = document.querySelector("#to-currency");



let convertBtn = document.querySelector("#convert-btn");

for (let i = 0; i < dropdownList.length; i++) {
    let options = "";

    for (let currencyCode in country_list) {
        let selected;
        if (i == 0) {
            selected = currencyCode === "usd" ? "selected" : "";
        } else if (i == 1) {
            selected = currencyCode === "pkr" ? "selected" : "";
        }

        options += `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
    }

    dropdownList[i].innerHTML = options;
}

convertBtn.addEventListener("click", a =>{
    a.preventDefault();
    changeRate();
})

async function changeRate() {
    let input = document.querySelector("#amount");
    let getValue = input.value;

    if(getValue == "" || getValue == "0"){
        input.value = "1";
        getValue = 1;
    }

    let crApi = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`);
    let getCr = await crApi.json();
 
    let getFromCurrency = getCr.usd[fromCurrency.value];
    let getToCurrency = getCr.usd[ToCurrency.value];


    let convertedAmount = (input.value / getFromCurrency) * getToCurrency;

    convertedAmount = convertedAmount.toFixed(2);

    document.querySelector("#result").innerHTML = `Converted Amount is = ${convertedAmount}`;
}

