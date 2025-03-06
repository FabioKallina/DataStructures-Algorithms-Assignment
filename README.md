# DataStructures-Algorithms-Assignment

# Family Tree Project

## Overview
This project implements a **Family Tree** using JavaScript classes. It allows users to:
- Add family members with their names and birth dates.
- Define parent-child relationships.
- Find all descendants of a specific family member.

## Installation
To run this project locally:
1. Clone the repository:
   ```sh
   git clone https://github.com/FabioKallina/DataStructures-Algorithms-Assignment.git
   ```
2. Navigate to the project folder:
   ```sh
   cd DataStructures-Algorithms-Assignment
   ```
3. Run the JavaScript file using Node.js:
   ```sh
   node familyTree.js
   ```

## Usage
Here’s an example of how the Family Tree works:

```javascript
const myFamily = new FamilyTree();

myFamily.addMember("Alice", "06-21-1988");
myFamily.addMember("Bob", "06-21-1989");
myFamily.addMember("Frank", "06-21-1990");

myFamily.defineRelationship("Alice", "Bob");
myFamily.defineRelationship("Alice", "Frank");

console.log("Descendants of Alice: ", myFamily.findDescendants("Alice"));
```

### Expected Output:
```
Descendants of Alice:  [ 'Bob', 'Frank' ]
```

## Code Structure
### `Person` Class
Represents an individual in the family tree.
- Stores name, birth date, and children.
- Includes a method to add children.

### `FamilyTree` Class
Manages family relationships.
- `addMember(name, birthDate)`: Adds a new family member.
- `defineRelationship(parentName, childName)`: Defines a parent-child relationship.
- `findDescendants(name)`: Finds all descendants of a given family member.