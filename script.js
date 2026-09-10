const tracks = [

    // PHOTO 1
    {
        title: "MOKI!",

        description:
            "This is my apartment cat, Moki! We've had her since August, and she brings our home to life.",

        image:
            "photo1.jpg.JPG"
    },


    // PHOTO 2
    {
        title: "Friends!",

        description:
            "These are the best friends A&M gave me! I am so grateful to be surrounded by such amazing people.",

        image:
            "photo2.jpg.JPG"
    },


    // PHOTO 3
    {
        title: "Home!",

        description:
            "I am from Houston, TX! I love my city and all the people it gave me.",

        image:
            "photo3.jpg.jpeg"
    },


    // PHOTO 4
    {
        title: "Family!",

        description:
            "This is my family! They are the people who shaped me into who I am today and provide me with immense love and support.",

        image:
            "photo4.jpg.JPG"
    },


    // PHOTO 5
    {
        title: "School!",

        description:
            "I am a Physics major with a minor in Computer Science! I am involved with TAMU SPS and TAMU AKPSI.",

        image:
            "photo5.jpg.jpg"
    },


    // PHOTO 6
    {
        title: "Music!",

        description:
            "My biggest interest is music! I love concerts and discovering new music.",

        image:
            "photo6.jpg.jpg"
    }

];


// Start on photo 1
let currentTrack = 0;


// Display the current photo
function showTrack() {

    const track = tracks[currentTrack];

    // Change picture
    document.getElementById("trackImage").src =
        track.image;

    // Change big title
    document.getElementById("trackTitle").textContent =
        track.title;

    // Change caption
    document.getElementById("trackDescription").textContent =
        track.description;

    // Change TRACK 01, TRACK 02, etc.
    document.getElementById("trackNumber").textContent =
        "TRACK " +
        String(currentTrack + 1).padStart(2, "0");

    // Change 01 / 06
    document.getElementById("counter").textContent =
        String(currentTrack + 1).padStart(2, "0")
        + " / "
        + String(tracks.length).padStart(2, "0");

    // Change progress bar
    const percentage =
        ((currentTrack + 1) / tracks.length) * 100;

    document.getElementById("progressBar").style.width =
        percentage + "%";
}


// NEXT PHOTO
function nextTrack() {

    currentTrack++;

    if (currentTrack >= tracks.length) {
        currentTrack = 0;
    }

    showTrack();
}


// PREVIOUS PHOTO
function previousTrack() {

    currentTrack--;

    if (currentTrack < 0) {
        currentTrack = tracks.length - 1;
    }

    showTrack();
}


// Show photo 1 when page opens
showTrack();
