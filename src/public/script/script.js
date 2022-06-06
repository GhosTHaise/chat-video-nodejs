const videoContainer = document.querySelector("#video-container");
const socket = io("/");

const myPeer = new Peer(undefined,{
    host : "localhost",
    port : "9003",
    path : "/myapp"
});

let peer = []; 
const video = document.createElement("video");
let video_state = true;
video.muted = true;
navigator.mediaDevices.getUserMedia({
    video : true,
    audio : false
}).then( stream => {
    addStreamVideo(video,stream);
    myPeer.on("call",call =>{
        console.log("call enabled")
        call.answer(stream);
        const video = document.createElement('video');
        call.on("stream",uservideoStream => {
            console.log("add stream");
            addStreamVideo(video,uservideoStream);
        });
    });
    socket.on("user-connected",(UserId)=>{
        console.log("user : "+UserId+" join the room !");
        connecttoNewUser(UserId,stream)
    })
}).catch(err => {
    alert("Please , active your webcam !");
});

myPeer.on("open",(id)=>{
    socket.emit("join-room",Room_id,id);
})
 
socket.on("user-disconnected",(UserId)=>{
    peer[UserId].close();
});

const addStreamVideo = (_video,_stream) => {
    _video.srcObject = _stream;
    _video.addEventListener('loadedmetadata',()=>{
        _video.play();
    });
    videoContainer.append(_video);
}
const connecttoNewUser = (UserId,Stream) => {
    const call = myPeer.call(UserId,Stream);
    peer[UserId] = call;
    console.log(call)
    const video = document.createElement('video');
    call.on("stream",userVideoStream => {
        console.log("Connect to new user !")
        addStreamVideo(video,userVideoStream);
    })
    call.on("close",()=>{
        //supprimer la video creer
        video.remove();
    })
}
/* pause and play video
document.addEventListener("click",()=>{
    (video_state) && video.pause();
    (!video_state) && video.play();
    video_state = !(video_state);
}) */