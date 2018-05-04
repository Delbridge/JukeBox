// var Play = document.getElementById("PlayHz")
// var Pause = document.getElementById("PauseHz")
// var Next = document.getElementById("NextHz")
// var Stop = document.getElementById("StopHz")


// // var playList= ["song1.mp3",
// //  "song2.mp3", "song3.mp3", "song4.mp3"];
// var currentSong = 0;
// // var song0 = new Audio(playList[i])

// var song1 = new Audio("Through the asteriod belt.mp3")
// var song2 = new Audio("Blue Hope New Sky.mp3")
// var song3 = new Audio("Insideoutworld.mp3")
// var song4 = new Audio("Bee Keys String.mp3")

// class Jukebox{
//     constructor(){
//         this.playList["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3"];
    

// playHz()
// // song0.play()
// playList[currentSong].play()

// }


// //  PauseHz(){
// // //     playList= new Audio (playList[0])
// //         playList.pause()
// //         [CurrentSong].pause
// //  }





// //  NextHz(){
//     // var songs = [];
//     // var currentSong = 0;
//     // //load Track objects into songs array elsewhere...
//     // function playNext() {
//     // SC.stream( '/tracks/' + songs[currentSong].id ).then(function(player){
//     // player.play();
//     // player.on("finish",function(){
//     // currentSong += 1; //increase currentSong by 1
//     // playNext(); //call itself
//     // });
//     // });
// //     // }
// // }
// // StopHz(){
// //      playList= new Audio (playList[0])
// //      playList.stop()
// // //      [CurrentSong].pause
 

// }



// //  var Jbx = new JukeBox()

// // Play.addEventListener("click", function(){
// //    Jbx.playHz()
// // })

// // Pause.addEventListener("click", function(){
// //     Jbx.pauseHz()
// // })
// // Next.addEventListener("click", function(){
// //     Jbx.nextHz()
// // })
// // Stop.addEventListener("click", function(){
// //     Jbx.stopHz()
// // })



// // Jbx.play()
 














































var play = document.getElementById('play')
var stop = document.getElementById('stop')
var pause = document.getElementById('pause')
var next = document.getElementById('next')
var previous = document.getElementById('previous')
var random = document.getElementById('random')



var song1 = new Audio("Through the asteriod belt.mp3")
var song2 = new Audio("Blue Hope New Sky.mp3")
var song3 = new Audio("Insideoutworld.mp3")
var song4 = new Audio("Bee Keys String.mp3")

var currentSong = 0

class JukeBox {
  constructor(){
    this.songs = [song1, song2, song3, song4]
   }
            
        playMusic(){
			this.songs[currentSong].play()
			}

		pauseMusic (){
			this.songs[currentSong].pause()

			}

		nextSong (){
			this.songs[currentSong].pause()
			this.songs[currentSong].currentTime = 0
			
                if(currentSong === this.songs.length-1) {
					currentSong = 0;
					this.songs[currentSong].play()
				}else{
					currentSong = currentSong+1
					this.songs[currentSong].play()
					}
            }
            
		stopMusic(){
			this.songs[currentSong].pause()
			this.songs[currentSong].currentTime = 0
			}
        }
		previousSong()
			this.songs[currentSong].pause()
			this.songs[currentSong].currentTime = 0
				if (currentSong === 0){
					currentSong = this.songs.length-1;
					this.songs[currentSong].play()
					}else{
					currentSong = currentSong-1
                    this.songs[currentSong].play()}
                    

		randomSong()
				this.songs[currentSong].pause()
				this.songs[currentSong].currentTime = 0

				currentSong = Math.floor(Math.random() * this.songs.length) 
						this.songs[currentSong].play()
        

	
	Play.addEventListener("click", function(){
		Jukebox.playMusic()
    })
    
    Stop.addEventListener("click", function(){
		Jukebox.stopMusic()
    })
    
	Pause.addEventListener("click", function(){
		Jukebox.pauseMusic ()
    })
    
	Next.addEventListener("click", function(){
		Jukebox.nextSong ()
	})

	Previous.addEventListener("click", function(){
		Jukebox.previousSong ()
	})

	Random.addEventListener("click", function(){
		Jukebox.randomSong ()
	})





Jukebox.play()