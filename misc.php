<html>
     <head>
         <meta charset="UTF-8" >
         <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,700' rel='stylesheet' type='text/css'>
         <link rel="stylesheet" type="text/css" href="styles/style1.css">
         <script type="text/javascript">
         function menu(x) {
         x.classList.toggle("change");
         }
         var i;
         var interval;
         </script>
         </head>
         <body>
         <div class="loader"> </div>
         <br><div class="container" onclick="menu(this)">
         <div class="bar1"></div>
         <div class="bar2"></div>
         <div class="bar3"></div>
         <div class="menucontents1">something</div>
         <div class="menucontents1">something</div>
         <div class="menucontents1">something</div>

         </div>
         <svg
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="svg2"
            viewBox="0 0 549.59896 495.5905"
            height="500px"
            width="590px">
         <path
            d="m 252.85715,286.64792 c 0,0 0,0 0,0 -3e-5,6e-5 -1.4e-4,0 -1.7e-4,-2e-5 -3.7e-4,-3.2e-4 4e-5,-9.3e-4 3.1e-4,-0.001 0.002,-0.001 0.004,4e-4 0.005,0.002 0.003,0.005 -0.002,0.011 -0.006,0.0131 -0.0133,0.006 -0.0269,-0.006 -0.0312,-0.0177 -0.0107,-0.0292 0.015,-0.0572 0.0414,-0.065 0.0576,-0.0172 0.10994,0.0327 0.123,0.0854 0.0259,0.10432 -0.0641,0.19577 -0.16032,0.21581 -0.17692,0.0369 -0.32796,-0.11548 -0.35694,-0.2799 -0.0502,-0.28471 0.19509,-0.52291 0.46135,-0.56282 0.43895,-0.0658 0.80038,0.31298 0.85311,0.72568 0.0834,0.65294 -0.48129,1.18376 -1.098,1.25095 -0.9423,0.10268 -1.70036,-0.71436 -1.78325,-1.60792 -0.12292,-1.32497 1.02898,-2.38168 2.28982,-2.48088 1.82154,-0.14332 3.26367,1.4445 3.37896,3.1832 0.16282,2.45526 -1.98298,4.38702 -4.33298,4.51713 -3.25226,0.18008 -5.79738,-2.66943 -5.93971,-5.78985 -0.19349,-4.2417 3.53189,-7.54566 7.61052,-7.69603 5.4559,-0.20116 9.68827,4.60163 9.84061,9.85812 0.20085,6.93045 -5.91329,12.28735 -12.60238,12.43338 -8.70447,0.19002 -15.41107,-7.50507 -15.53998,-15.92004 -0.16577,-10.82062 9.4188,-19.13383 19.89508,-19.23194 13.32532,-0.12479 23.53652,11.70022 23.5869,24.61908 0.0634,16.26886 -14.39902,28.70679 -30.1914,28.68885 -19.70559,-0.0224 -34.73928,-17.56901 -34.62841,-36.71961 0.13717,-23.69396 21.26834,-41.73582 44.31968,-41.50294 28.29678,0.28588 49.80573,25.55958 49.41684,53.11629 -0.47392,33.58126 -30.50985,59.06603 -63.24312,58.48177 -39.61919,-0.70716 -69.64166,-36.19103 -68.81684,-74.84315 0.99201,-46.48706 42.67987,-81.66573 88.0689,-80.54881 54.26622,1.33536 95.27978,50.05814 93.81238,103.08273 -1.74465,63.04298 -58.41277,110.63394 -120.05713,108.75031 -72.90876,-2.22783 -127.88725,-67.83596 -125.5137,-139.17495 2.79346,-83.96023 78.4254,-147.20779 160.62973,-144.26219 96.2994,3.45067 168.773,90.28433 165.16412,184.62595 C 433.8434,419.62625 334.53084,502.36228 226.67332,497.98926 101.39668,492.91001 7.2782571,379.73686 12.526533,256.8725 18.598477,114.72571 147.12375,8.0171207 286.60392,14.262679 447.37301,21.4615 567.97168,166.94581 560.59529,324.77469 557.46941,391.6574 532.38024,456.59333 490.54218,508.77978"
            id="path4136"
            class="path"
            style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:8.1;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:0.30000001;" />
        </svg>
        <div style="height: 20px;">

        </div>
        <div class="slider">
            <div class="sliderblue" id="sliderblue"></div>
            <div class="slidercircle"></div>
        </div>
        <script type="text/javascript">
            function loading () {
                    i = document.getElementById('sliderblue').offsetWidth;
                    i+=10;
                    document.getElementById('sliderblue').style = "width: " + i + "px;";

            }
        </script>
        <div style="height: 20px;">

        </div>
        <button class="button2" onclick="clearInterval(interval); document.getElementById('sliderblue').style = 'width: ' + 1 + 'px;';interval = setInterval(loading,100);"><span>Load it</span></button>
