function Overlay (image, time, value) {

    this.element = document.createElement("DIV");
    //this.valueNode = document.createTextNode(value);
    this.textElement = document.createElement("DIV");
    this.textElement1 = document.createElement("DIV");
    //this.textElement1.appendChild(this.valueNode);
    this.textElement1.innerHTML = value;
    this.textElement.appendChild(this.textElement1);
    this.element.appendChild(this.textElement);
    this.imgElement = document.createElement("IMG");
    this.element.appendChild(this.imgElement);

    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '<link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700" rel="stylesheet">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;


    this.element.style.width = "800px";
    this.element.style.position = "fixed";
    this.element.style.left = "calc(50% - 400px)";
    this.element.style.height = "160px";
    this.element.style.top = "50px";
    this.element.style.backgroundColor = "white";
    this.element.style.borderRadius = "4px";
    this.element.style.boxShadow = "0 0 5px 2px grey";
    this.element.style.fontFamily = "'Noto Sans'";
    this.textElement.style.height = "140px";
    this.textElement.style.overflow = "auto";
    this.textElement.style.padding = "10px";
    this.textElement.style.float = "right";
    this.textElement.style.width = "calc(80% - 20px)";
    this.imgElement.style.float = "left";
    //this.imgElement.style.backgroundColor = "red";
    this.imgElement.style.height = "100%";
    this.imgElement.style.width = "20%";
    this.imgElement.style.borderTopLeftRadius = "4px";
    this.imgElement.style.borderBottomLeftRadius = "4px";
    this.imgElement.src = image;


    document.body.appendChild(this.element);


    var that = this;
    var remove = function () {
        that.element.parentNode.removeChild(that.element);
        //console.log(that.element);
    };
    this.remove = function () {
        that.element.parentNode.removeChild(that.element);
        //console.log(that.element);
    };

    setTimeout(remove, time);




}
