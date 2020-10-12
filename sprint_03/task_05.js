function showFullName(fullName) {
    const Names = fullName.split(" ");
    let firstName = Names[0];
    let lastName = Names[1];
    return lastName;

    function nameIncludes() {
        return firstName == data ? "Good!" : "Yaik!";
    }
}



let name = "Ivan Petrenko";

console.log(showFullName(name));
console.log(nameIncludes());