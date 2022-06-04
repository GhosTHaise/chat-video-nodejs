const socket = io("/");
const myPeer = new Peer(undefined,{
    host : "localhost",
    port : "9003",
    path : "/myapp"
});
myPeer.on("open",(id)=>{
    socket.emit("join-room",Room_id,id);
})

socket.on("user-connected",(UserId)=>{
    console.log("user : "+UserId+" join !");
})
