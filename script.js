var my_src = 0;
var t_src = 10;
var s_eq = "";
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var sign = "+*-";
// main function activating the application
init = () => {

    document.getElementById("my_scr").innerText = my_src;
    document.getElementById("t_scr").innerText = t_src;

    s_eq = (num[Math.floor((Math.random() * num.length))]);
    s_eq += sign[Math.floor((Math.random() * sign.length))];
    s_eq += (num[Math.floor((Math.random() * num.length))]);
    document.getElementById("eq").value = s_eq;

    var given_anses = [(eval(s_eq)*3),(eval(s_eq)),(eval(s_eq)+1),(eval(s_eq)+5)]
    // console.log(given_anses)
    
    document.getElementById( 'g_ans').innerHTML = "";
    given_anses_fun(given_anses);
}
given_anses_fun = (given_anses) =>{
    var ready_anserse =[];
    for (let i = 0; i < given_anses.length; i++) {
        index = Math.floor((Math.random() * given_anses.length));
        // console.log(index)
        const ans = given_anses[index];
        

        for (let key in ready_anserse) {
            // if (ready_anserse[key] == ans) {
                // given_anses_fun(given_anses)
                // console.log("item found");
                
            // }
                console.log(ready_anserse);

        }
        ready_anserse += ans;
        var x = "<span onclick='check("+ans+")' class=' btn bg-warning border border-danger rounded text-lg p-3 shadow ml-2 my-3 mx-3 '>"+ans+"</span>";
        
        document.getElementById( 'g_ans').innerHTML += x;
    }
}
check = (ans) => {
    var g_eq = document.getElementById("eq").value;
    var my_ans = ans;

    if (eval(g_eq) == my_ans) {
        my_src += 1;
        document.getElementById("eq").value = "";
        if (my_src == t_src) {
            alert("welldone! You Completed The Test ");
        }

        init();
    }
}

init();