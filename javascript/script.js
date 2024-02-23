const songsInformation=[
{
 name:"saajna",
 img:"https://i.ytimg.com/vi/hlRTxA10eRA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkr9QagAiYsfsLcG_WmOGz-4j3kg",
 time:5*60   
}
,
{
    name:"ek mulaqat",
    img:"https://i.ytimg.com/vi/_qrxVjvVp4M/maxresdefault.jpg",
    time:(5*60)+20  
}
,
{
    name:"tu itni khoobsurat hai",
    img:"https://i.ytimg.com/vi/PKIlSv9yMTY/maxresdefault.jpg",
    time:(4*60)+20  
}
,
{
    name:"pyar tune kya kiya",
    img:"https://i.ytimg.com/vi/gC84vJf0xeU/maxresdefault.jpg",
    time:(3*60)+35  
}
,
{
    name:"mashooka",
    img:"https://i.ytimg.com/vi/l6RYjEZAVug/maxresdefault.jpg",
    time:(3*60)+17  
} 
];

// const songsInformation= new Map();
// songsInformation.set("saajna","https://i.ytimg.com/vi/hlRTxA10eRA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkr9QagAiYsfsLcG_WmOGz-4j3kg",5*60);
// songsInformation.set("mashooka","https://i.ytimg.com/vi/l6RYjEZAVug/maxresdefault.jpg",(3*60)+17);
// songsInformation.set("pyar tune kya kiya","https://i.ytimg.com/vi/gC84vJf0xeU/maxresdefault.jpg",(3*60)+35);
// songsInformation.set("tu itni khoobsurat hai","https://i.ytimg.com/vi/PKIlSv9yMTY/maxresdefault.jpg",(4*60)+20);
// songsInformation.set("ek mulaqat","https://i.ytimg.com/vi/_qrxVjvVp4M/maxresdefault.jpg",(5*60)+20); 

let songlist = document.querySelectorAll('li');
let songimage=document.getElementById('song-image');
let songs=document.getElementById('songs');
let songname=document.getElementById('song-name');
let songbar=document.getElementById('song-bar');
function selectSong()
{
    songs.style.display='block';
    
    songlist.forEach((item)=>
    {
        console.log(item);
        item.addEventListener('click',function()
        {   let index=item.getAttribute('value');
            songimage.src=songsInformation[index].img;
            songname.textContent=songsInformation[index].name;
           

        });
    });
}