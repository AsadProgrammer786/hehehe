



// // const sharp = require("sharp");
// // var i = 335;
// // var j = 241;
// // setInterval(() => {
// // sharp(`memes-images/Screenshot (${j}).png`).extract({width:1600, height:1080,left:160,top:0}).toFile(`memes-images/${i}.png`)
// // .then(function(new_file_info){
// // 	console.log(`File No. ${i} Edited!`);
// //     i++;
// //     j++;
// // })
// // .catch(function(err){
// // 	console.log(err);
// // });
// // }, 1000);


// // // // // var a = 500;
// // // // // var i = 5;
// // // // // setInterval(() => {
// // // // //     try{
// // // // //         fs.rename(`memes-images/${i}.png`, `memes-images/${i}-copy.png`, (err) => {
// // // // //             console.log("File No. "+i+" Renamed!");
// // // // //             i++;
// // // // //         });
// // // // //     } catch(err) {
// // // // //         console.log("Error Occured!");
// // // // //         a = 1000000;
// // // // //     }
// // // // // }, a);
// const fs = require("fs");
// var i = 146;
// setInterval(() => {
//     try{
//     fs.unlink(`memes-images/Screenshot (${i}).png`, () => {
//         console.log("File No. "+i+" Was Removed");
//         i++;
//     });
// } catch(err) {
//     console.log("Error Occured!");
// }
// }, 100);
