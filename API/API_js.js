async function fetchJoke() {
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();

        document.getElementById("output").innerText =
            data.setup + " — " + data.punchline;

    } catch (error) {
        console.error(error);
        document.getElementById("output").innerText =
            "Failed to load joke";
    }
}
