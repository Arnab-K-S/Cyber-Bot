document.getElementById("JumpButton").addEventListener("click",function jump() {
    document.getElementById("jump").style.transform= "translateY(-14rem)";
    document.getElementById("jump3").style.transform= "translateY(-14rem)";
    
    setTimeout(function knee() {
        document.getElementById("jump3").style.display= "block";
        document.getElementById("jump").style.display= "none";
    },1000);
    
    setTimeout(function back() {
        document.getElementById("jump3").style.display= "none";
        document.getElementById("jump").style.display= "block";
        document.getElementById("jump").style.transform= "translateY(0rem)";
        document.getElementById("jump3").style.transform= "translateY(0rem)";
    },1000);
a
})
document.getElementById("SwingButton").addEventListener("click",function jump() {
    document.getElementById("swing").style.transform= "translateY(-14rem) translateX(14rem)";
    setTimeout(function swing() {
        document.getElementById("swing").style.transform= "translateY(0rem) translateX(28rem)";
},1000);
setTimeout(function blank() {
        // document.getElementById("swing").style.transform= "translateY(0rem) translateX(0rem)";
    },1000);
})