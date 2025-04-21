let dropdownList = document.querySelectorAll(".dropdowns select");
let convertBtn = document.querySelector("#convert-btn");

function dropdowns() {
  for (let i = 0; i < dropdownList.length; i++) {
    let options = "";

    for (let currencyCode in country_list) {
      let selected = "";

      if (i == 0) {
        if (currencyCode === "usd") {
          selected = "selected";
        } else {
          selected = "";
        }
      } else if (i == 1) {
        if (currencyCode === "pkr") {
          selected = "selected";
        } else {
          selected = "";
        }
      }

      options += `<option value="${currencyCode}" ${selected}>${currencyCode.toUpperCase()}</option>`;
    }

    dropdownList[i].innerHTML = options;
  }

  addSecondDropdown();
  addFirstDropdown();
}

dropdowns();

dropdownList[0].addEventListener("change", () => {
  addSecondDropdown();
});

dropdownList[1].addEventListener("change", () => {
  addFirstDropdown();
});

function addFirstDropdown() {
  let toCurrency = dropdownList[1].value;
  let options = "";
  for (let currencyCode in country_list) {
    if (currencyCode === toCurrency) {continue;};

    let selected;
    if (currencyCode === dropdownList[0].value) {
      selected = "selected";
    } else {
      selected = "";
    }
    options += `<option value="${currencyCode}" ${selected}>${currencyCode.toUpperCase()}</option>`;
  }
  dropdownList[0].innerHTML = options;
}
function addSecondDropdown() {
  let fromCurrency = dropdownList[0].value;
  let options = "";
  for (let currencyCode in country_list) {
    if (currencyCode === fromCurrency) {continue;};

    let selected;
    if (currencyCode === dropdownList[1].value) {
      selected = "selected";
    } else {
      selected = "";
    }
    options += `<option value="${currencyCode}" ${selected}>${currencyCode.toUpperCase()}</option>`;
  }
  dropdownList[1].innerHTML = options;
}

convertBtn.addEventListener("click", () => {
  changeRate();
});

async function changeRate() {
  let input = document.querySelector("#amount");
  let getValue = input.value;

  if (getValue == "" || getValue == "0") {
    input.value = "1";
    getValue = 1;
  }

  let fromCurrency = document.querySelector("#from-currency").value;
  let ToCurrency = document.querySelector("#to-currency").value;
  let rateView = document.querySelector("#rate");

  try {
    let crApi = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    );
    let getCr = await crApi.json();
    let rate = getCr[fromCurrency][ToCurrency];
    rateView.innerHTML = `1 ${fromCurrency.toUpperCase()} = ${rate} ${ToCurrency.toUpperCase()}`;

    if (rate) {
      let convertedAmount = (getValue * rate).toFixed(2);
      document.querySelector(
        "#result"
      ).innerHTML = `Converted Amount is = ${convertedAmount} ${ToCurrency.toUpperCase()}`;
    } else {
      document.querySelector("#result").innerHTML = `Conversion rate not found`;
    }
  } catch (err) {
    console.log("Error fetching conversion rate:", err);
    document.querySelector("#result").innerHTML = `Something went wrong.`;
  }
}
