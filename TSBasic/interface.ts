/*------------------
#Channel --> Full Stack Niraj
#Youtube Video --> https://www.youtube.com/watch?v=IpQJtgoxs2w
#Name of Video --> TypeScript For Beginners - A Crash Course
*/
/*--------------------
#Part Of the Video --> Interface
#Command -> tsc --noEmitOnError interface.ts
--------------------*/

interface Player {
  currentSong: string;
  currentSongLength: number;
  playNext: () => void;
  playPrevious: () => void;
}

const player: Player = {
  currentSong: "Believer",
  currentSongLength: 35_000,
  playNext: () => console.log("Playing next"),
  playPrevious: () => console.log("Playing previous"),
};

type song = { name: string; length: number };

class AudioPlayer implements Player {
  //currentSong: "Shape of You";
  currentSong: string;
  //currentSongLength: 40_000;
  currentSongLength: number;

  constructor(songInfo: song) {
    this.currentSong = songInfo.name;
    this.currentSongLength = songInfo.length;
  }

  playNext = () => console.log("Playing next");
  playPrevious = () => console.log("Playing previous");

  stopAudio = () => {};
}

const audioPlayer = new AudioPlayer({ name: "Shape of You", length: 40_000 });
const anotherAudioPlayer = new AudioPlayer({ name: "Closer", length: 50_000 });

console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(
  anotherAudioPlayer.currentSong,
  anotherAudioPlayer.currentSongLength
);
