document.addEventListener("DOMContentLoaded", function () {
    const jsonUrl = "quraan.json";
    const container = document.getElementById("ayah_container");
    const duration = document.getElementById("duration");
    const supmit = document.getElementById("supmit");
    let value = 1;
    let currentSurahIndex = 0;
    let currentAyahIndex = 0;
    let totalSurahs = 0;
    let totalAyahsInSurah = 0;
    let intervalId;

    function fetchAyah(surahIndex, ayahIndex) {
        fetch(jsonUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data (HTTP ${response.status})`);
                }
                return response.json();
            })
            .then((data) => {
                totalSurahs = data.length;

                if (surahIndex >= 0 && surahIndex < totalSurahs) {
                    const surah = data[surahIndex];
                    totalAyahsInSurah = surah.verses.length;

                    if (ayahIndex >= 0 && ayahIndex < totalAyahsInSurah) {
                        const ayahText = surah.verses[ayahIndex].text;
                        container.innerHTML = ayahText;
                        console.log(ayahText);
                    } else {
                        console.error("Invalid ayah index in the current surah");
                    }
                } else {
                    console.error("Invalid surah index");
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }

    function updateAyah() {
        currentAyahIndex++;

        if (currentAyahIndex >= totalAyahsInSurah) {
            currentAyahIndex = 0;
            currentSurahIndex++;

            if (currentSurahIndex >= totalSurahs) {
                currentSurahIndex = 0;
            }
        }

        fetchAyah(currentSurahIndex, currentAyahIndex);
    }

    // Fetch and display a specific ayah initially
    fetchAyah(0, 1);

    // Set interval to fetch and display a new ayah every n seconds
    if (supmit) {
        supmit.addEventListener('click', () => {
            let userInput = parseInt(duration.value, 10);

            if (!isNaN(userInput) && userInput > 0) {
                value = userInput;
                console.log(value);

                // Clear previous interval before setting a new one
                clearInterval(intervalId);

                // Set a new interval
                intervalId = setInterval(updateAyah, value * 1000);
            } else {
                console.error("Invalid duration input. Please enter a positive number.");
            }
        });
    } else {
        console.error("Element with ID 'submit' not found.");
    }
});
