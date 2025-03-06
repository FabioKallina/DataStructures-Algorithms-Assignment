
class Person {

    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
        this.children = [];
    }

    addChildren(child) {
        this.children.push(child);
    }
}

class FamilyTree {

    constructor() {
        this.members = new Map();
    }

    //Adding a new member to the family tree
    addMember(name, birthDate) {

        if (!this.members.has(name)) {
            const person = new Person(name, birthDate);
            this.members.set(name, person);
        } else {
            console.error("This member already exists");
        }
    }

    //Add child to parent
    defineRelationship(parentName, childName) {

        if (!this.members.has(parentName)) {
            console.log("This parent does not exist in the family tree");
        }
        else if (!this.members.has(childName)) {
            console.log("This child does not exist in the family tree");
        }
        else {
            const parent = this.members.get(parentName);
            const child = this.members.get(childName);

            parent.addChildren(child);
        }
    }

    //Finding descendants of a member
    findDescendants(name) {

        if (!this.members.has(name)) {
            console.log("This member does not exist");
            return [];
        }

        let queue = [...this.members.get(name).children];
        const descendants = [];

        while(queue.length) {
            let current = queue.shift();
            descendants.push(current.name);
            queue.push(...current.children);
        }
        return descendants;
    }
};

const myFamily = new FamilyTree();

myFamily.addMember("Alice", "06-21-1988");
myFamily.addMember("Bob", "06-21-1989");
myFamily.addMember("Frank", "06-21-1990");
myFamily.addMember("Grace", "06-21-1991");
myFamily.addMember("Jane", "06-21-1992");
myFamily.addMember("Aliah", "06-21-1993");
myFamily.addMember("Mario", "06-21-1994");

myFamily.defineRelationship("Alice", "Bob");
myFamily.defineRelationship("Alice", "Frank");
myFamily.defineRelationship("Bob", "Grace");
myFamily.defineRelationship("Bob", "Jane");
myFamily.defineRelationship("Frank", "Aliah");
myFamily.defineRelationship("Aliah", "Mario");

console.log("Descendants of Alice: ", myFamily.findDescendants("Alice"));
console.log("Descendants of Bob: ", myFamily.findDescendants("Bob"));

console.log("Descendants of Frank: ", myFamily.findDescendants("Frank"));
console.log("Descendants of Aliah: ", myFamily.findDescendants("Aliah"));

console.log("Descendants of Mario: ", myFamily.findDescendants("Mario"));

/***************************************************************************/
