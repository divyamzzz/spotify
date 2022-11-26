console.log("welcome to Spotify");
//Intitalise the variables
let songindex=0;
let AudioElement = new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let sonngitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [  {songname:' BACKSEAT', filepath: 'songs/1.mp3' , coverpath:"covers/1.jpg"},
              {songname: ' JULY', filepath: 'songs/2.mp3' , coverpath:"covers/2.jpeg"},
              {songname: ' RIPTIDE', filepath: 'songs/3.mp3' , coverpath:"covers/3.jpeg"},
              {songname: ' FEELS LIKE YOU', filepath: 'songs/1.mp3' , coverpath:"covers/4.jpeg"},
              {songname: ' BLINDING LIGHTS', filepath: 'songs/1.mp3' , coverpath:"covers/5.jpeg"},
              {songname: ' AS IT WAS', filepath: 'songs/1.mp3' , coverpath:"covers/6.jpg"},
              {songname: ' MOUNT EVEREST', filepath: 'songs/1.mp3' , coverpath:"covers/7.jpeg"},
              {songname: ' SAVE YOUR TEARS ', filepath: 'songs/1.mp3' , coverpath:"covers/8.jpeg"},
              {songname: ' KING OF THE FALL', filepath: 'songs/1.mp3' , coverpath:"covers/9].jpeg"},
              {songname: ' GLIMPSE OF US ', filepath: 'songs/1.mp3' , coverpath:"covers/10.jpeg"},
              {songname: ' LET HER Go', filepath: 'songs/1.mp3' , coverpath:"covers/11.jpeg"},
              {songname: ' DOWN BELOW', filepath: 'songs/1.mp3' , coverpath:"covers/12.jpeg"}
]
sonngitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
   })

//play/pause 
masterplay.addEventListener('click', ()=>
{
    if(AudioElement.paused||AudioElement<=0)
    {
        AudioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-circle-pause");
    }
    else
    {
        AudioElement.pause();
        gif.style.opacity=0;
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-play-circle');
    }
})    
//listen to events
AudioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);
    progressbar.value=progress ;
}) 
progressbar.addEventListener('change', ()=>{
    AudioElement.currentTime= progressbar.value*AudioElement.duration/100;
})

const makeallplays = ()=>{

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex = parseInt(e.target.id)
        mastersong.innerText=songs[songindex].songname;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        AudioElement.src = `songs/${songindex+1}.mp3` ; 
        AudioElement.currentTime=0;
        AudioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-circle-pause");


})
})
document.getElementById('nextplay').addEventListener('click',()=>{
    if(songindex>11)
    songindex=0;
    else
    songindex+=1;
    mastersong.innerText=songs[songindex].songname;
    AudioElement.src = `songs/${songindex+1}.mp3` ; 
        AudioElement.currentTime=0;
        AudioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-circle-pause");
})
document.getElementById('previousplay').addEventListener('click',()=>{
    if(songindex==0)
    songindex=11;
    else
    songindex-=1;
    mastersong.innerText=songs[songindex].songname;
    AudioElement.src = `songs/${songindex+1}.mp3` ; 
        AudioElement.currentTime=0;
        AudioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-circle-pause");
})