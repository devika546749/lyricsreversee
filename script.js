document.getElementById("songFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src = URL.createObjectURL(file);
        audioPlayer.play();
    }
});

document.getElementById("lyricsFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("lyricsInput").value = e.target.result;
        };
        reader.readAsText(file);
    }
});

document.getElementById("reverseBtn").addEventListener("click", function() {
    let lyrics = document.getElementById("lyricsInput").value;
    if (!lyrics.trim()) {
        alert("Please enter or upload lyrics first!");
        return;
    }

    let lines = lyrics.split("\n");
    let reversedLines = lines.map(line => line.split("").reverse().join(""));
    document.getElementById("output").textContent = reversedLines.join("\n");
});






