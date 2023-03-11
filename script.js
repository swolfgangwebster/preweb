
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

const arrdate = timeDiff("9/13/2020");
document.getElementById("tenure").textContent =`${arrdate[0]}y ${arrdate[1]}m ${arrdate[2]}d`

const arrage = timeDiff("6/1/1995");
document.getElementById("age").textContent=`${arrage[0]}yo | `;
/**************/

const card = document.getElementById("badge");
card.addEventListener("click", async () => {
    card.classList.add("fade");
    await sleep(4000);
    document.body.classList.add("black");
    document.getElementById("sidebar").classList.add("hide")
    document.getElementById("back").classList.remove("hide")
    document.getElementById("back").classList.add("fadeIn")
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const back = document.getElementById("pic2");
back.addEventListener("click", async () => {
    card.classList.remove("fade");
    document.body.classList.remove("black");
    document.getElementById("back").classList.add("hide")
    document.getElementById("sidebar").classList.remove("hide")
});