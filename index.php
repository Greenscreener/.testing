<html>
     <head>
         <meta charset="UTF-8" >
         <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,700' rel='stylesheet' type='text/css'>
         <link rel="stylesheet" type="text/css" href="styles/style1.css">
         </head>
         <body>
              
              <h3>Hello! Welcome to texting.greenscreener.tk!</h3>
              This page is made for testing various css/php/js features. Mostly for our later use. These are all the pages that are contained within this subdomain:<br />
              
              <?php
                $adresar=opendir("./"); 
                while($jmenosouboru = readdir($adresar)) {
                    if ($jmenosouboru != "." && $jmenosouboru != ".." && $jmenosouboru != "styles" ) {
                    echo "<a href='";
                    echo "$jmenosouboru";
                    echo "'>";
                    echo "$jmenosouboru";
                    echo "</a> <br />";
                    }
                    }
                closedir($adresar); 
              ?>
                  
              <h4>Have a nice day</h4>
              
              <div id="endora"><endora></div>
               </body>
               </html>