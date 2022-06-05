const myPeer = new Peer(undefined,{
    host : "localhost",
    port : "9003",
    path : "/myapp"
});
myPeer.on("open",(id)=>{
    socket.emit("join-room",Room_id,id);
})


const connecttoNewUser = (UserId,Stream) => {
    const call = myPeer.call(UserId,Stream);
    const video = document.createElement('video');
    call.on("stream",userVideoStream => {
        addStreamVideo(video,userVideoStream);
    })
}