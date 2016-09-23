function ecology () {
    ecologyrunning = 1;
    window.trees = 1000;
    window.wood = 0;
    window.food = 0;
    window.foodfactory = 0;
    window.population = 10;
    document.getElementById("userprefix").innerHTML = "Ecology Command:";
    inputfield();
    document.getElementById("outputtext").innerHTML = 'Welcome to:<div style="fixed; font-weight: bold;"> <span style="">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span><br /> <span style="">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&quot;&quot;#&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span><br /> <span style="">&#160;&#160;mmm&#160;&#160;&#160;&#160;mmm&#160;&#160;&#160;&#160;mmm&#160;&#160;&#160;&#160;&#160;#&#160;&#160;&#160;&#160;&#160;mmm&#160;&#160;&#160;&#160;mmmm&#160;&#160;m&#160;&#160;&#160;m&#160;</span><br /> <span style="">&#160;#&quot;&#160;&#160;#&#160;&#160;#&quot;&#160;&#160;&quot;&#160;&#160;#&quot;&#160;&quot;#&#160;&#160;&#160;&#160;#&#160;&#160;&#160;&#160;#&quot;&#160;&quot;#&#160;&#160;#&quot;&#160;&quot;#&#160;&#160;&quot;m&#160;m&quot;&#160;</span><br /> <span style="">&#160;#&quot;&quot;&quot;&quot;&#160;&#160;#&#160;&#160;&#160;&#160;&#160;&#160;#&#160;&#160;&#160;#&#160;&#160;&#160;&#160;#&#160;&#160;&#160;&#160;#&#160;&#160;&#160;#&#160;&#160;#&#160;&#160;&#160;#&#160;&#160;&#160;#m#&#160;&#160;</span><br /> <span style="">&#160;&quot;#mm&quot;&#160;&#160;&quot;#mm&quot;&#160;&#160;&quot;#m#&quot;&#160;&#160;&#160;&#160;&quot;mm&#160;&#160;&quot;#m#&quot;&#160;&#160;&quot;#m&quot;#&#160;&#160;&#160;&quot;#&#160;&#160;&#160;</span><br /> <span style="">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;m&#160;&#160;#&#160;&#160;&#160;m&quot;&#160;&#160;&#160;</span><br /> <span style="">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&quot;&quot;&#160;&#160;&#160;&quot;&quot;&#160;&#160;&#160;&#160;</span><br /> </div> A text-based game simulating a planet\'s ecology while the population is slowly growing.'

}
function ecologyoutput (texttodisplay) {
    document.getElementById("outputtext").innerHTML = "Trees:" + trees + "<br />Wood:" + wood + "<br />Food:" + food + "<br />Food Factories:" + foodfactory + "<br />Population:" + population + "<br /><br />" + texttodisplay + "<br />";
}
function ecologyformsubmit () {
    var input = document.getElementById("inputtext").value;
    document.getElementById("inputtext").value = "";
    comm = input.split(" ");
    switch (comm[0]) {
        default:
            ecologyoutput(input);
            break;
        }
}
