const proffys = [

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]


function getSubject(subjectNumber){
    // const position = +subjectNumber - 1
    return subjects[subjectNumber]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number((Number(hours)*60) + Number(minutes))
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}