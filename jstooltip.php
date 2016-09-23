<html>
     <head>
            <meta charset="UTF-8" >
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,700' rel='stylesheet' type='text/css'>
            <link rel="stylesheet" type="text/css" href="styles/style1.css">
            <script>
                function attention() {
                    
                    document.getElementById("attention").classList.toggle("unchange");
                    
                    window.setTimeout(document.getElementById("attention").classList.toggle("change"), 500);
                    
                } 
                </script>    
            </head>
         <body>
             <button onclick="attention()" class="button2"><span>Click me!</span></button>
             <div class="attention unchange" id="attention">
                 Hello world!
                 </div>
                 <endora>