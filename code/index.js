// console.log("hello")

$(document).ready(function() {

    $("#switch").on("click", function() {
      $("#calculator").css({ transform: "rotate(0deg)" });
      $("#switch").fadeOut("slow");
      $("#calculator").css({ "margin-top": "120px" });
    });
  
    
    function convertHtmlCollectionToArray(collection) {
      return Array.from(collection)
    }
    const entry = this.getElementById("entry")
    const numbers = this.getElementsByClassName("num")
    const operands = this.getElementsByClassName("operator")
    // console.log(convertHtmlCollectionToArray(operands))
    // const arrayOfNumbers = Array.from(numbers);
    
    convertHtmlCollectionToArray(numbers).map(function(buttonValue, index, arr){
      buttonValue.addEventListener("click", function(){
        // if (entry.innerText.length < 15){
          entry.innerText += buttonValue.value
        // }else {alert("Only 15 digit is allowed")}
      });
    })


    convertHtmlCollectionToArray(operands).map(function(currentValue, index, arr){
      currentValue.addEventListener("click", function(){
        // if (entry.innerText.length < 15){
          entry.innerText += currentValue.value
        // }else {alert("Only 15 digit is allowed")}
      });
    })
    
    // $(function() {
    //   $("#calculator").draggable();
    // });
  
    // $(".draggable").each(function() {

    //   var elem = $(this);
    //   elem
    //     .fadeOut(1000)
    //     // .fadeIn(500)
    //     // .fadeOut(500)
    //     // .fadeIn(500)
    //     // .fadeOut(500)
    //     // .fadeIn(700)
    //     // .fadeOut(4000);
    //     console.log(elem)
    // });
  
//     var entry = "";
//     var ans = "";
//     var current = "";
//     var log = "";
//     var decimal = true;
//     var reset = "";
  
//     // round function if answer includes a decimal
//     function round(val) {
//       val = val.toString().split("");
//       if (val.indexOf(".") !== -1) {
//         var valTest = val.slice(val.indexOf(".") + 1, val.length);
//         val = val.slice(0, val.indexOf(".") + 1);
//         var i = 0;
//         while (valTest[i] < 1) {
//           i++;
//         }
//         valTest = valTest.join("").slice(0, i + 2);
//         if (valTest[valTest.length - 1] === "0") {
//           valTest = valTest.slice(0, -1);
//         }
//         return val.join("") + valTest;
//       } else {
//         return val.join("");
//       }
//     }
  
//     $("button").click(function() {
//       entry = $(this).attr("value");
//       console.log("entry: " + entry);
  
//       //reset for log after answer to equation.
//       if (reset) {
//         if (entry === "/" || entry === "*" || entry === "-" || entry === "+") {
//           log = ans;
//         } else {
//           ans = "";
//         }
//       }
//       reset = false;
  
//       // All clear or Clear Entry
//       if (entry === "ac" || (entry === "ce" && current === "noChange")) {
//         ans = "";
//         current = "";
//         entry = "";
//         log = "";
//         $("#history").html("0");
//         $("#answer").html("0");
//         decimal = true;
//       } else if (entry === "ce") {
//         $("#history").html(log.slice(0, -current.length));
//         log = log.slice(0, -current.length);
//         ans = ans.slice(0, -current.length);
//         current = ans;
//         if (log.length === 0 || log === " ") {
//           $("#history").html("0");
//         }
//         $("#answer").html("0");
//         entry = "";
//         decimal = true;
//       }
  
//       // prevents more than one deciminal in a number
//       if (entry === "." || entry === "0.") {
//         if (!decimal) {
//           entry = "";
//         }
//       }
  
//       // prevents improper use of first digit
//       if (
//         (ans.length === 0 && isNaN(entry) && entry !== ".") ||
//         (ans.length === 0 && entry === "0")
//       ) {
//         entry = "";
//         ans = "";
//       }
  
//       // prevents extra operators
//       if (current !== "noChange") {
//         if (
//           (current === "" && isNaN(entry) && entry !== ".") ||
//           (isNaN(current) && isNaN(entry) && entry !== ".")
//         ) {
//           entry = "";
//         }
//       }
  
//       // digit combining
//       while (Number(entry) || entry === "0" || current === ".") {
//         if (isNaN(current) && entry === "0" && current !== ".") {
//           entry = "";
//         } else if (isNaN(current) && Number(entry) && current !== ".") {
//           current = "";
//         }
//         if (entry === ".") {
//           decimal = false;
//         }
//         if (current === "0." && isNaN(entry)) {
//           entry = "";
//         } else {
//           if (current[current.length - 1] === ".") {
//             current = current.concat(entry);
//           } else {
//             current += entry;
//           }
//           ans += entry;
//           $("#answer").html(current);
//           log += entry;
//           $("#history").html(log);
//           entry = "";
//         }
      // }
  
      // Operation list
  
    //   if (entry === ".") {
    //     if (current === "" || isNaN(current[current.length - 1])) {
    //       current = "0.";
    //       ans += entry;
    //       $("#answer").html("0.");
    //       log += current;
    //       $("#history").html(log);
    //     } else {
    //       current = current.concat(".");
    //       ans = ans.concat(".");
    //       log = ans;
    //       $("#history").html(ans);
    //       $("#answer").html(current);
    //     }
    //     entry = "";
    //     decimal = false;
    //   } else if (entry === "/") {
    //     current = "/";
    //     ans = round(eval(ans)) + current;
    //     log += current;
    //     $("#history").html(log);
    //     $("#answer").html("/");
    //     entry = "";
    //     decimal = true;
    //   } else if (entry === "*") {
    //     current = "*";
    //     ans = round(eval(ans)) + current;
    //     log += "x";
    //     $("#history").html(log);
    //     $("#answer").html("x");
    //     entry = "";
    //     decimal = true;
    //   } else if (entry === "-") {
    //     current = "-";
    //     ans = round(eval(ans)) + current;
    //     log += current;
    //     $("#history").html(log);
    //     $("#answer").html("-");
    //     entry = "";
    //     decimal = true;
    //   } else if (entry === "+") {
    //     current = "+";
    //     ans = round(eval(ans)) + current;
    //     log += current;
    //     $("#history").html(log);
    //     $("#answer").html("+");
    //     entry = "";
    //     decimal = true;
    //   } else if (entry === "=") {
    //     if (current[current.length - 1] === ".") {
    //       entry = "";
    //     } else {
    //       current = eval(ans).toString();
    //       $("#answer").html(round(eval(ans)));
    //       ans = round(eval(ans));
    //       log += entry + ans;
    //       $("#history").html(log);
    //       log = ans;
    //       entry = "";
    //       reset = true;
    //       decimal = true;
    //     }
    //     current = "noChange";
    //   }
    //   entry = "";
  
    //   if (reset) {
    //     log = "";
    //   }
  
    //   // max digits on screen
    //   if (
    //     $("#entry")
    //       .children()
    //       .text().length > 8 ||
    //     $("#history").text().length > 22
    //   ) {
    //     $("#answer").html("0");
    //     $("#history").html("Digit Limit Met");
    //     current = "";
    //     ans = "";
    //     log = "";
    //     decimal = true;
    //   }
  
    //   console.log("decimal: " + decimal);
    //   console.log("current: " + current);
    //   console.log("answer: " + ans);
    //   console.log($("#history").text().length);
    // });
}); 
// end doc ready function
  
  




// <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">

// <div id="switch" class="text-center">Switch</div>

// <div class="draggable">I'm draggable!</div>

// <div class="container">
//   <div id="calculator" class="ui-widget-content">

// <!-- TITLE -->
//     <div id="title" class="text-center">
//       <h5><b>CALCULATOR-X</b></h5>
//     </div>

// <!-- ENTRY BOX -->
//     <div id="entrybox" class="text-right">
//       <div id="entry">
//         <p id="answer">0</p>
//       </div>
//       <div id="history">
//         <p>0</p>
//       </div>
//     </div>

// <!-- BUTTONS -->
//     <div id="buttons">

//       <button class="red" value="ac">AC</button>
//       <button class="red" value="ce">CE</button>
//       <button value='/'>&divide;</button>
//       <button value='*'>x</button>

//       <button value='7'>7</button>
//       <button value='8'>8</button>
//       <button value='9'>9</button>
//       <button value='-'>-</button>

//       <button value='4'>4</button>
//       <button value='5'>5</button>
//       <button value='6'>6</button>
//       <button value='+'>+</button>


//       <button value='1'>1</button>
//       <button value='2'>2</button>
//       <button value='3'>3</button>
//       <button class="invisible">N</button>

//       <button id="zeroButton" value='0'>0</button>
//       <button value='.'>.</button>
//       <button id="equalButton" value='='>=</button>
// </div>
// <!-- end buttons -->
// </div>
//   <!-- end calculator -->
// </div>
// <!-- end container -->

// <footer id="footer" class="text-center">
//   <div class="container">
//     <p>Designed by 
//       <a href="https://github.com/Allegra9" target="_blank">
//         Allegra</a></p>
//     <p>picture by 
//       <a href="https://unsplash.com/@mikeshkaos" target="_blank">@mikeshkaos</a></p>
//   </div>
// </footer>