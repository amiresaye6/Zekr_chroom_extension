const jsonUrl = 'quraan.json';
let currentSurahIndex = 0;
let currentAyahIndex = 0;
let totalSurahs = 0;
let totalAyahsInSurah = 0;

function fetchAyah(surahIndex, ayahIndex) {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            totalSurahs = data.length;

            // Check if the specified surah and ayah indices are valid
            if (surahIndex >= 0 && surahIndex < totalSurahs) {
                const surah = data[surahIndex];
                totalAyahsInSurah = surah.verses.length;

                if (ayahIndex >= 0 && ayahIndex < totalAyahsInSurah) {
                    const ayahText = surah.verses[ayahIndex].text;

                    // Display ayah in the console
                    console.log(ayahText);

                    // Display ayah in a prompt
                    alert(ayahText);
                } else {
                    console.error('Invalid ayah index in the current surah');
                }
            } else {
                console.error('Invalid surah index');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Fetch and display a specific ayah initially (e.g., Ayah with ID 2 in Surah with ID 1)
fetchAyah(0, 1); // Surah index 0 corresponds to Surah with ID 1, Ayah index 1 corresponds to Ayah with ID 2

// Set interval to fetch and display a new ayah every 15 seconds
setInterval(() => {
    currentAyahIndex++;

    // Check if all ayahs in the current surah have been displayed
    if (currentAyahIndex >= totalAyahsInSurah) {
        currentAyahIndex = 0;
        currentSurahIndex++;

        // Reset surah index to loop through the surahs again
        if (currentSurahIndex >= totalSurahs) {
            currentSurahIndex = 0;
        }
    }

    fetchAyah(currentSurahIndex, currentAyahIndex);
}, 5 * 60 * 1000);
