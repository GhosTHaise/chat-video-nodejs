const videoContainer = document.querySelector("#video-container");
const video = document.createElement("video");
let video_state = true;
video.muted = true;
navigator.mediaDevices.getUserMedia({
    video : true,
    audio : false
}).then( stream => {
    playStreamVideo(stream);
}).catch(err => {
    alert("Please , active your webcam !");
})


const playStreamVideo = (_stream) => {
    video.srcObject = _stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    });
    videoContainer.append(video);
}
/* pause and play video
document.addEventListener("click",()=>{
    (video_state) && video.pause();
    (!video_state) && video.play();
    video_state = !(video_state);
}) */