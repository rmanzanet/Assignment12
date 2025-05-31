class Jukebox {
    constructor() {
        this.albums = []
    }

    addAlbum(album) {
        this.albums.push(album)
    }

    favoriteAlbum() {
        let max = -1, fav
        for (let album of this.albums) {
            if (album.played > max) {
                max = album.played
                fav = album
            }
        }
        return fav ? fav.display() : "No albums have been played yet."
    }

    getAlbumByTitle(title) {
        return this.albums.find(album => album.title === title)
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }

    play() {
        this.played++
    }

    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

// Create the player and albums
const jbox = new Jukebox()

const albumData = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' }
]

// Dynamically create albums from data and add to jukebox
albumData.forEach(data => {
    const album = new Album(data.artist, data.title)
    jbox.addAlbum(album)
})

// Populate dropdown on DOM load
window.onload = () => {
    const dropdown = document.getElementById("albumSelect")
    jbox.albums.forEach(album => {
        const option = document.createElement("option")
        option.value = album.title
        option.text = `${album.artist} - ${album.title}`
        dropdown.appendChild(option)
    })

    document.getElementById("playBtn").addEventListener("click", () => {
        const selectedTitle = dropdown.value
        const album = jbox.getAlbumByTitle(selectedTitle)
        if (album) {
            album.play()
            alert(`Now playing: ${album.display()}`)
        }
    })

    document.getElementById("favBtn").addEventListener("click", () => {
        const favDisplay = document.getElementById("favoriteAlbum")
        favDisplay.textContent = `Your favorite album is: ${jbox.favoriteAlbum()}`
    })
}
