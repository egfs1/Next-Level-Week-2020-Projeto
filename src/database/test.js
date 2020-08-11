const database = require("./db")
const createProffy = require("./createProffy")

database.then(async (db) => {
    proffyValue = {
        name: "Eduardo" , 
        avatar: "https://cdn.discordapp.com/attachments/435945895649869836/722859767705370795/image0.jpg", 
        whatsapp: "87999223925", 
        bio: "Sou Foda", 
    }

    classValue = {
        subject: 1, 
        cost: "20", 
    }

    classScheduleValues = [
        {
            weekday: 0, 
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1, 
            time_from: 520,
            time_to: 1220
        }
    ]
    await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    // const selectedProffys = await db.all("select * from proffys")
    // console.log(selectedProffys)
})