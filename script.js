
function timeDiff(str){
    const date = new Date();
    const start = new Date(str);
    let diff = date.getTime()-start.getTime();

    diff = (diff/1000/60/60/24);
    let yd = date.getFullYear() - start.getFullYear();
    let md = date.getMonth() - start.getMonth();

    if (md < 0){
        yd = yd -1;
        md = md + 11;
    }
    let dd = diff -(365*yd + 30*md);
    dd = parseInt(dd);

    return [yd,md,dd];

}

const ad = timeDiff("8/29/2021");
console.log(`${ad[0]}y ${ad[1]}m ${ad[2]}d`);
document.getElementById("tenure").textContent =`${ad[0]}y ${ad[1]}m ${ad[2]}d`