//STEP 1
const favMovies1 = ["Inception", "Interstellar", "The Dark Knight", "Spirited Away", "Arrival"];
console.log("STEP 1 -> Second movie:", favMovies1[1]);

//STEP 2
const movies2 = new Array(5);
movies2[0] = "Inception";
movies2[1] = "Interstellar";
movies2[2] = "The Dark Knight";
movies2[3] = "Spirited Away";
movies2[4] = "Arrival";
console.log("STEP 2 -> First movie:", movies2[0]);

//STEP 3
const movies3 = new Array(5);
movies3[0] = "Inception";
movies3[1] = "Interstellar";
movies3[2] = "The Dark Knight";
movies3[3] = "Spirited Away";
movies3[4] = "Arrival";
movies3.splice(2, 0, "Blade Runner 2049"); // insert into 3rd position
console.log("STEP 3 -> Length after insert:", movies3.length);

//STEP 4
let movies4 = ["Inception", "Interstellar", "The Dark Knight", "Spirited Away", "Arrival"];
delete movies4[0]; // leaves an empty slot (undefined) at index 0
console.log("STEP 4 -> After delete:", movies4);

//STEP 5
const movies5 = ["Inception", "Interstellar", "The Dark Knight", "Spirited Away", "Arrival", "Dune", "Whiplash"];
console.log("STEP 5 -> For loop:");
for (let i = 0; i < movies5.length; i++) console.log(movies5[i]);

//STEP 6
console.log("STEP 6 -> For-in loop:");
for (const idx in movies5) console.log(movies5[idx]);

//STEP 7
console.log("STEP 7 -> Sorted (for-in loop):");
const sorted7 = [...movies5].sort();
for (const i in sorted7) console.log(sorted7[i]);

//STEP 8
const moviesILike = ["Inception", "Interstellar", "The Dark Knight", "Spirited Away", "Arrival", "Dune", "Whiplash"];
const leastFavMovies = ["Movie 43", "Dragonball Evolution", "The Last Airbender"];
console.log("\nMovies I like:\n");
for (const m of moviesILike) console.log(m);
console.log("\n\nMovies I regret watching:\n");
for (const m of leastFavMovies) console.log(m);

//STEP 9
let movies = moviesILike.concat(leastFavMovies);
let reverseSorted = [...movies].sort().reverse();
console.log("STEP 9 -> Reverse sorted:", reverseSorted);

//STEP 10
const lastItem = reverseSorted.slice(-1)[0];
console.log("STEP 10 -> Last item:", lastItem);
