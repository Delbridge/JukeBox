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
        
		previousSong(){
			this.songs[currentSong].pause()
			this.songs[currentSong].currentTime = 0
				if (currentSong = this.songs.length-1){
					currentSong === 0;
					this.songs[currentSong].play()
					}else{
					currentSong = currentSong-1
                    this.songs[currentSong].play()}
					}  

		randomSong(){
				this.songs[currentSong].pause()
				this.songs[currentSong].currentTime = 0

				currentSong = Math.floor(Math.random() * this.songs.length) 
						this.songs[currentSong].play()
        
		}
	}
	var Jbx =new JukeBox()
	
	play.addEventListener("click", function(){
		Jbx.playMusic()
    })
    
    stop.addEventListener("click", function(){
		Jbx.stopMusic()
    })
    
	pause.addEventListener("click", function(){
		Jbx.pauseMusic ()
    })
    
	next.addEventListener("click", function(){
		Jbx.nextSong ()
	})

	previous.addEventListener("click", function(){
		Jbx.previousSong ()
	})

	random.addEventListener("click", function(){
		Jbx.randomSong ()
	})


