//Stack (Primitive)=ekhan theke copy pawa jay.
// Heap (Non-Primitive) = ekhan theke reference pawa jay

 let name = "Mamun"
 name[0] = "R"// output hbe Mamun bcz but string immutable → change hoy nai
 
 /*
let str = "mamun";
str = "rahim";

console.log(str);
✅ Output:rahim

👉 ekhane ki holo?
"mamun" change hoy nai ❌
notun string "rahim" create hoise ✅
variable name now new value dhorlo
 */

 let myFb_IdName = "MA MU N"
 let anotherName = myFb_IdName
 anotherName = "ahmed Mamun"

 console.log(myFb_IdName);
 console.log(anotherName);
 
 let userOne = {
    name:"Mamun",
    age:20
 }
 
 let userTwo = userOne
 userTwo.name = "ahmed Mamun"