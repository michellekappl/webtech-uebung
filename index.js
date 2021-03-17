function Person(name, age, iq) {
    this.name = name
    this.age = age
    this.iq = iq

    Object.freeze(this)
}

const elle =  new Person("Michelle", 23, 9000)

const people = [
    new Person("leon", 24, 19879),
    new Person("lucas", 20, 9000),
    new Person("josi", 26, 208)
]

console.table(people.sort((x,y) => x.age%2 - y.age%2))

console.log(people[0].name.slice(1,2))