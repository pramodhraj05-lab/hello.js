function getRate() {
    const url = "https://api.exchangerate.host/latest?base=EUR&symbols=INR";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const rate = data.rates.INR;
            document.getElementById("result").innerText =
                `1 EUR = ${rate} INR`;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerText =
                "Failed to fetch exchange rate";
        });
}
