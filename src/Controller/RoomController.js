const RoomView = (req,res) => {
    res.render("Room",{
        room_id : req.params.room
    })
}

module.exports = {
    RoomView
}