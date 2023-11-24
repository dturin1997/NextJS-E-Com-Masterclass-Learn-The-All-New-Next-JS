/*------------------
#Channel --> Full Stack Niraj
#Youtube Video --> https://www.youtube.com/watch?v=IpQJtgoxs2w
#Name of Video --> TypeScript For Beginners - A Crash Course
*/
/*--------------------
#Part Of the Video --> Interface
#Command -> tsc --noEmitOnError interface.ts
--------------------*/
var player = {
    currentSong: "Believer",
    currentSongLength: 35000,
    playNext: function () { return console.log("Playing next"); },
    playPrevious: function () { return console.log("Playing previous"); },
};
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(songInfo) {
        this.playNext = function () { return console.log("Playing next"); };
        this.playPrevious = function () { return console.log("Playing previous"); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }
    return AudioPlayer;
}());
var audioPlayer = new AudioPlayer({ name: "Shape of You", length: 40000 });
var anotherAudioPlayer = new AudioPlayer({ name: "Closer", length: 50000 });
console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);
