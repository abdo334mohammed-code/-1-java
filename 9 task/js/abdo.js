var userDegree = prompt("enter your degree");

if (userDegree >= 0 && userDegree <= 100) {
    if (userDegree <= 50) {
        console.log("ايه القرف ده");
    } else if (userDegree <= 65) {
        console.log("هاه عديت بالعافيه");
    } else if (userDegree <= 75) {
        console.log("شد حيلك يا ابو جبل");
    } else if (userDegree <= 85) {
        console.log("برافووووووو عليك");
    } else {
        console.log("فخم من يومك");
    }
} else {
    console.log("invalidDegree");
}