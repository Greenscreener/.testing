<html>
     <head>
         <meta charset="UTF-8" >
         <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,700' rel='stylesheet' type='text/css'>
         <link rel="stylesheet" type="text/css" href="styles/style1.css">
         <script type="text/javascript">
          var mailvalid;
          function validmail() {
                var x = document.forms["form"]["email"].value;
                var atpos = x.indexOf("@");
                var dotpos = x.lastIndexOf(".");
                if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
                  mailvalid = 0;
                  document.getElementById("j").innerHTML = "<div class='mail" + mailvalid + "' > X</div>" ;
                  return false;
                  
                  } else {
                    mailvalid = 1;
                    document.getElementById("j").innerHTML = "<div class='mail" + mailvalid + "' >√</div>" ;
                    return true;
                  }
                
                }
          function submit() {
            if (mailvalid == 1) {
            document.getElementById("form").submit;
            } else {
             alert("Not valid. Please check your input.")
            }
          
          }
          function button() {
            document.getElementById("formdiv").classList.toggle("change");
            document.getElementById("formdivshadow").classList.toggle("change");  
          }
         
         
         </script>
         </head>
         <body>
         <div id="formdivshadow" onclick="button()"></div>
         <div id="formdiv">
         <div class="greenback"><h1> Some cool stuff above the page! </h1></div>
         cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff cool stuff <br> 
         </div>
         <button class="button2" onclick="button()"><span>Click me!</span></button>
            
         