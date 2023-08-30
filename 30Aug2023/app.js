// function passingNumber(value) {
//     if(value === 5) {
//         return value + 5;
//     } else if(value === 10) {
//         return value - 5;
//     }
// } 
// console.log(passingNumber(5));

// function foo(a) {
//     return 15 - a;
// }
// console.log(foo(10));

// var userFloor = 5;
// var lift1 = 2;
// var lift2 = 7;
// function lift (a) {
//     a = userFloor;
//     if ( lift2 > lift1) {
//         return lift2;
//     }else if( lift1 < lift2)  {
//         return lift1;
//     }
// }
// console.log(lift(5));

function lift(userFloor,lift1,lift2) {
    var distanceLift1 = Math.abs(lift1 - userFloor);
    var distanceLift2 = Math.abs(lift2 - userFloor);
    if(distanceLift1 > distanceLift2) {
        console.log("Lift1 arahi hai")
    } else {
        console.log("Lift2 arahi hai");
    }
    console.log("DistanceLift1: " + distanceLift1);
    console.log("DistanceLift2" + distanceLift2);
}
lift(5,4,7);