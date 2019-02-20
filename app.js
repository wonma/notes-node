const fs = require('fs')
const yargs = require('yargs')

const commandOption = (describe, demand, alias) => {
	return {describe,
			demand,
			alias}
}

const argv = yargs
			.command('add', 'Add a new note', {
				title: commandOption('Title of Note', true, 't'),
				body: commandOption('Body of Note', true, 'b')
			})
			.command('read', 'Read a note', {
				title: commandOption('Title of Note', true, 't')
			})
			.command('list', 'List all notes')
			.command('remove', 'Delete a note', {
				title: commandOption('Title of Note', true, 't')
			})
			.argv

const notes = require('./note.js')

const command = argv._[0]

console.log('Yarg: ', argv)

if(command === 'read') {
	
	// list의 경우 title상관없이 모두 출력하므로 getAll의 parameter필요없음.
	const note = notes.readNote(argv.title)
	if (note) {
		console.log(`Note found`)
		notes.logNote(note.title, note.body)
	} else {
		console.log(`Sorry there's no note like that`)
	}

} else if(command === 'list') {

	const newNotes = notes.getAll()
	console.log(`Print ${newNotes.length} note(s).`)
	newNotes.forEach((newNote) => notes.logNote(newNote.title, newNote.body))

} else if(command === 'add') {
	const note = notes.addNote(argv.title, argv.body)
	if (note) {
		console.log(`Note added`)
		notes.logNote(note.title, note.body)
	} else {
		console.log(`Sorry the title already exists`)
	}

} else if(command === 'delete') {

	const deletedNote = notes.deleteNote(argv.title)
	const message = deletedNote ? `It is deleted` : `There's no title like '${argv.title}'`
	console.log(message)

} else {

	console.log('no command exists')
}
