console.log('Starting app.js')

const fs = require('fs')
// const _ = require('lodash')
const argv = require('yargs').argv

const notes = require('./note.js')


const command = argv._[0]

console.log('Command: ', process.argv)
console.log('Yarg: ', argv)

if(command === 'read') {
	
	// list의 경우 title상관없이 모두 출력하므로 getAll의 parameter필요없음.
	const theNote = notes.readNote(argv.title)
	if (theNote) {
		console.log(`Title: ${theNote.title}`)
		console.log(`Content: ${theNote.body}`)
	} else {
		console.log(`Sorry there's no note like that`)
	}

} else if(command === 'list') {

	notes.getAll()
	console.log('Listing')

} else if(command === 'add') {

	const note = notes.addNote(argv.title, argv.body)
	note !== undefined ? 
	console.log(`${note.title} is added`) :
	console.log(`Note title '${argv.title}' already exists`)

} else if(command === 'delete') {

	const deletedNote = notes.deleteNote(argv.title)
	const message = deletedNote ? `It is deleted` : `There's no title like '${argv.title}'`
	console.log(message)

} else {
	console.log('error')
}
