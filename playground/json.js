// const obj = {
// 	name: 'Wonmi',
// 	age: 30,
// 	married: true,
// 	kids: null
// }

// const jsonObj = JSON.stringify(obj)
// console.log(jsonObj) // {"name":"Wonmi"} 이렇게 출력됨

// const jsonString = '{"name": "Josh", "age": 30}'
// const parsedJSON = JSON.parse(jsonString)
// console.log(parsedJSON) // { name: 'Josh', age: 30 } 이렇게 출력됨


const fs = require('fs')

// note 오브젝트가 있다
var originalNote = {
	title: 'Wonmi and Josh',
	body: 'They loved each other'
}

// JSON string으로 바꾸어준다
var originalNoteJSON = JSON.stringify(originalNote)

// fs모듈로 note.json에 저장한다
fs.writeFileSync('note.json', originalNoteJSON)

// fs모듈로 note.json을 읽어온다
var noteString = fs.readFileSync('note.json')

// 읽어온 노트(object)를 parse한다
var note = JSON.parse(noteString)

// 노트의 title이나 body에 접근한다.
console.log(typeof note)
console.log(note.title)