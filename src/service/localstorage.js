

export const getListStudent = () => {
    if (!localStorage['studentsVues']) {
        localStorage['studentVues'] = "[]"
    }

    let studentsVues = localStorage['studentVues']
    studentsVues = JSON.parse(studentsVues)
    return studentsVues;
}