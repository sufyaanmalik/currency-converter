let dropdownList = document.querySelectorAll(".dropdowns select");
let convertBtn = document.querySelector("#convert-btn");

let country_list = {
        "aed": "Emirati Dirham",
        "afn": "Afghan Afghani",
        "all": "Albanian Lek",
        "amd": "Armenian Dram",
        "ang": "Dutch Guilder",
        "aoa": "Angolan Kwanza",
        "ars": "Argentine Peso",
        "ats": "Austrian Schilling",
        "aud": "Australian Dollar",
        "awg": "Aruban or Dutch Guilder",
        "azm": "Azerbaijani Manat",
        "azn": "Azerbaijan Manat",
        "bam": "Bosnian Convertible Mark",
        "bbd": "Barbadian or Bajan Dollar",
        "bdt": "Bangladeshi Taka",
        "bef": "Belgian Franc",
        "bgn": "Bulgarian Lev",
        "bhd": "Bahraini Dinar",
        "bif": "Burundian Franc",
        "bmd": "Bermudian Dollar",
        "bnd": "Bruneian Dollar",
        "bob": "Bolivian Bolíviano",
        "brl": "Brazilian Real",
        "bsd": "Bahamian Dollar",
        "btn": "Bhutanese Ngultrum",
        "bwp": "Botswana Pula",
        "byn": "Belarusian Ruble",
        "byr": "Belarusian Ruble",
        "bzd": "Belizean Dollar",
        "cad": "Canadian Dollar",
        "cdf": "Congolese Franc",
        "chf": "Swiss Franc",
        "clp": "Chilean Peso",
        "cnh": "Chinese Yuan Renminbi Offshore",
        "cny": "Chinese Yuan Renminbi",
        "cop": "Colombian Peso",
        "crc": "Costa Rican Colon",
        "cuc": "Cuban Convertible Peso",
        "cup": "Cuban Peso",
        "cve": "Cape Verdean Escudo",
        "cyp": "Cypriot Pound",
        "czk": "Czech Koruna",
        "dem": "German Deutsche Mark",
        "djf": "Djiboutian Franc",
        "dkk": "Danish Krone",
        "dop": "Dominican Peso",
        "dzd": "Algerian Dinar",
        "eek": "Estonian Kroon",
        "egp": "Egyptian Pound",
        "ern": "Eritrean Nakfa",
        "esp": "Spanish Peseta",
        "etb": "Ethiopian Birr",
        "eur": "Euro",
        "fim": "Finnish Markka",
        "fjd": "Fijian Dollar",
        "fkp": "Falkland Island Pound",
        "frf": "French Franc",
        "gbp": "British Pound",
        "gel": "Georgian Lari",
        "ggp": "Guernsey Pound",
        "ghc": "Ghanaian Cedi",
        "ghs": "Ghanaian Cedi",
        "gip": "Gibraltar Pound",
        "gmd": "Gambian Dalasi",
        "gnf": "Guinean Franc",
        "grd": "Greek Drachma",
        "gtq": "Guatemalan Quetzal",
        "gyd": "Guyanese Dollar",
        "hkd": "Hong Kong Dollar",
        "hnl": "Honduran Lempira",
        "hrk": "Croatian Kuna",
        "htg": "Haitian Gourde",
        "huf": "Hungarian Forint",
        "idr": "Indonesian Rupiah",
        "iep": "Irish Pound",
        "ils": "Israeli Shekel",
        "imp": "Isle of Man Pound",
        "inr": "Indian Rupee",
        "iqd": "Iraqi Dinar",
        "irr": "Iranian Rial",
        "isk": "Icelandic Krona",
        "itl": "Italian Lira",
        "jep": "Jersey Pound",
        "jmd": "Jamaican Dollar",
        "jod": "Jordanian Dinar",
        "jpy": "Japanese Yen",
        "kes": "Kenyan Shilling",
        "kgs": "Kyrgyzstani Som",
        "khr": "Cambodian Riel",
        "kmf": "Comorian Franc",
        "kpw": "North Korean Won",
        "krw": "South Korean Won",
        "kwd": "Kuwaiti Dinar",
        "kyd": "Caymanian Dollar",
        "kzt": "Kazakhstani Tenge",
        "lak": "Lao Kip",
        "lbp": "Lebanese Pound",
        "lkr": "Sri Lankan Rupee",
        "lrd": "Liberian Dollar",
        "lsl": "Basotho Loti",
        "ltl": "Lithuanian Litas",
        "luf": "Luxembourg Franc",
        "lvl": "Latvian Lat",
        "lyd": "Libyan Dinar",
        "mad": "Moroccan Dirham",
        "mdl": "Moldovan Leu",
        "mga": "Malagasy Ariary",
        "mgf": "Malagasy Franc",
        "mkd": "Macedonian Denar",
        "mmk": "Burmese Kyat",
        "mnt": "Mongolian Tughrik",
        "mop": "Macau Pataca",
        "mro": "Mauritanian Ouguiya",
        "mru": "Mauritanian Ouguiya",
        "mtl": "Maltese Lira",
        "mur": "Mauritian Rupee",
        "mvr": "Maldivian Rufiyaa",
        "mwk": "Malawian Kwacha",
        "mxn": "Mexican Peso",
        "myr": "Malaysian Ringgit",
        "mzm": "Mozambican Metical",
        "mzn": "Mozambican Metical",
        "nad": "Namibian Dollar",
        "ngn": "Nigerian Naira",
        "nio": "Nicaraguan Cordoba",
        "nlg": "Dutch Guilder",
        "nok": "Norwegian Krone",
        "npr": "Nepalese Rupee",
        "nzd": "New Zealand Dollar",
        "omr": "Omani Rial",
        "pab": "Panamanian Balboa",
        "pen": "Peruvian Sol",
        "pgk": "Papua New Guinean Kina",
        "php": "Philippine Peso",
        "pkr": "Pakistani Rupee",
        "pln": "Polish Zloty",
        "pte": "Portuguese Escudo",
        "pyg": "Paraguayan Guarani",
        "qar": "Qatari Riyal",
        "rol": "Romanian Leu",
        "ron": "Romanian Leu",
        "rsd": "Serbian Dinar",
        "rub": "Russian Ruble",
        "rwf": "Rwandan Franc",
        "sar": "Saudi Arabian Riyal",
        "sbd": "Solomon Islander Dollar",
        "scr": "Seychellois Rupee",
        "sdd": "Sudanese Dinar",
        "sdg": "Sudanese Pound",
        "sek": "Swedish Krona",
        "sgd": "Singapore Dollar",
        "shp": "Saint Helenian Pound",
        "sit": "Slovenian Tolar",
        "skk": "Slovak Koruna",
        "sle": "Sierra Leonean Leone",
        "sll": "Sierra Leonean Leone",
        "sos": "Somali Shilling",
        "srd": "Surinamese Dollar",
        "srg": "Surinamese Guilder",
        "std": "Sao Tomean Dobra",
        "stn": "Sao Tomean Dobra",
        "svc": "Salvadoran Colon",
        "syp": "Syrian Pound",
        "szl": "Swazi Lilangeni",
        "thb": "Thai Baht",
        "tjs": "Tajikistani Somoni",
        "tmm": "Turkmenistani Manat",
        "tmt": "Turkmenistani Manat",
        "tnd": "Tunisian Dinar",
        "top": "Tongan Pa'anga",
        "trl": "",
        "try": "Turkish Lira",
        "ttd": "Trinidadian Dollar",
        "tvd": "Tuvaluan Dollar",
        "twd": "Taiwan New Dollar",
        "tzs": "Tanzanian Shilling",
        "uah": "Ukrainian Hryvnia",
        "ugx": "Ugandan Shilling",
        "usd": "US Dollar",
        "uyu": "Uruguayan Peso",
        "uzs": "Uzbekistani Som",
        "val": "Vatican City Lira",
        "veb": "Venezuelan Bolívar",
        "vef": "Venezuelan Bolívar",
        "ves": "Venezuelan Bolívar",
        "vnd": "Vietnamese Dong",
        "vuv": "Ni-Vanuatu Vatu",
        "wst": "Samoan Tala",
        "xaf": "Central African CFA Franc BEAC",
        "xag": "Silver Ounce",
        "xau": "Gold Ounce",
        "xcd": "East Caribbean Dollar",
        "xdr": "IMF Special Drawing Rights",
        "xof": "CFA Franc",
        "xpf": "CFP Franc",
        "yer": "Yemeni Rial",
        "zar": "South African Rand",
        "zmk": "Zambian Kwacha",
        "zmw": "Zambian Kwacha",
        "zwd": "Zimbabwean Dollar",
        "zwl": "Zimbabwean Dollar"
      };
      

function dropdowns() {
  for (let i = 0; i < dropdownList.length; i++) {
    let options = "";

    for (let curencyCode in country_list) {
      let selected = "";

      if (i == 0) {
        if (curencyCode === "usd") {
          selected = "selected";
        } else {
          selected = "";
        }
      } else if (i == 1) {
        if (curencyCode === "pkr") {
          selected = "selected";
        } else {
          selected = "";
        }
      }

      options += `<option value="${curencyCode}" ${selected}>${curencyCode.toUpperCase()}</option>`;
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
  for (let curencyCode in country_list) {
    if (curencyCode === toCurrency) {continue;};

    let selected;
    if (curencyCode === dropdownList[0].value) {
      selected = "selected";
    } else {
      selected = "";
    }
    options += `<option value="${curencyCode}" ${selected}>${curencyCode.toUpperCase()}</option>`;
  }
  dropdownList[0].innerHTML = options;
}
function addSecondDropdown() {
  let fromCurrency = dropdownList[0].value;
  let options = "";
  for (let curencyCode in country_list) {
    if (curencyCode === fromCurrency) {continue;};

    let selected;
    if (curencyCode === dropdownList[1].value) {
      selected = "selected";
    } else {
      selected = "";
    }
    options += `<option value="${curencyCode}" ${selected}>${curencyCode.toUpperCase()}</option>`;
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
  let toCurrency = document.querySelector("#to-currency").value;
  let rateView = document.querySelector("#rate");

  try {
    let crApi = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    );
    let getCr = await crApi.json();
    let rate = getCr[fromCurrency][toCurrency];
    rateView.innerHTML = `1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;

    if (rate) {
      let convertedAmount = (getValue * rate).toFixed(2);
      document.querySelector(
        "#result"
      ).innerHTML = `Converted Amount is = ${convertedAmount} ${toCurrency.toUpperCase()}`;
    } else {
      document.querySelector("#result").innerHTML = `Conversion rate not found`;
    }
  } catch (err) {
    console.log("Error fetching conversion rate:", err);
    document.querySelector("#result").innerHTML = `Something went wrong.`;
  }
}
