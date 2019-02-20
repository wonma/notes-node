const fs = require('fs')

const fetchNotes = () => {
	try {
		const notesJSON = fs.readFileSync('notes-data.json')
		const notes = JSON.parse(notesJSON)
		return notes
	} catch (e) {
		return []
	}
}

const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
	let notes = fetchNotes()
	const note = {
		title,
		body
	}

	const sameTitle = notes.filter((note) => note.title === title)
	
	//걸러낸 갯수가 0일 경우 최종으로 노트를 노트모음 어레이에 푸시한다.
	if(sameTitle.length === 0) {
		notes.push(note)
		saveNotes(notes)
		return note
	}
}

const readNote = (title) => {
	const notes = fetchNotes()
	return notes.find((note) => note.title === title)
}

const deleteNote = (title) => {
	// fetch notes
	// filter note that has the same title as the argument
	// save notes

	let notes = fetchNotes()
	filteredNotes = notes.filter((note) => note.title !== title)
	saveNotes(filteredNotes)

	return notes.length !== filteredNotes.length
}

const getAll = () => {
	return fetchNotes()
}

const logNote = (title, body) => {
	console.log(`--`)
	console.log(`Title: ${title}`)
	console.log(`Content: ${body}`)
}

module.exports = {
	addNote,
	readNote,
	deleteNote,
	getAll,
	logNote
}