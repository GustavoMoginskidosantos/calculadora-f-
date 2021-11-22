function Limpar(){
    document.getElementById("xA").value = "";
    document.getElementById("xB").value = "";
    document.getElementById("yA").value = "";
    document.getElementById("yB").value = "";
    document.getElementById("display").value = "";
   
}
function calculardistancia(){
    var xA = Number (document.getElementById("xA").value);
    var yA = Number (document.getElementById("yA").value);
    var xB = Number (document.getElementById("xB").value);
    var yB = Number (document.getElementById("yB").value);

    var primeiraparte = Math.pow((xB - xA) , 2);
    var segundaparte  = Math.pow((yB - yA), 2);
    var soma = primeiraparte + segundaparte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);
}
function calcularpontomedio() {

    var xA = Number (document.getElementById("xA").value);
    var yA = Number (document.getElementById("yA").value);
    var xB = Number (document.getElementById("xB").value);
    var yB = Number (document.getElementById("yB").value);
    
    var primeiraparte = (xA + xB) / 2; 
    var segundaparte = (yA + yB) / 2;  

    document.getElementById("display").value = 'PM = (${primeiraparte})'



}

function calcularCoeficiente(){

    var xA = Number (document.getElementById("xA").value);
    var yA = Number (document.getElementById("yA").value);
    var xB = Number (document.getElementById("xB").value);
    var yB = Number (document.getElementById("yB").value);
    
    var parteSuperior = yA - yB;
    var parteInferior = xA -xB;
    var m = parteSuperior / parteInferior;
    document.getElementById("display").value = `m = ${m}`;   
    
}
function calcularequaçãodareta() {

    var xA = Number (document.getElementById("xA").value);
    var yA = Number (document.getElementById("yA").value);
    var xB = Number (document.getElementById("xB").value);
    var yB = Number (document.getElementById("yB").value);
    
    var mat = [
        [xA,xB,1,xA],
        [yA,yB,1,yA],
    ]
    var n1 = ((-1 * mat [0] [1])* mat [1] [0]);
    var x1 = ((-1 * mat [0] [2])* mat [1] [1]);
    var y1 = ((-1 * mat [0] [3])* mat [1] [2]);

    var n2 =  mat [0] [0]* mat [1] [1];
    var x2 =  mat [0] [1]* mat [1] [2];
    var y2 =   mat [0] [2]* mat [1] [3];

    var somaX = x1 + x2;
    var somay = y1 + y2;
    var somaN = n1 + n2;

    somaX = (somaX > 0 ? `+${somaX}`: somaX) ;
    somay = (somay > 0 ? `+${somay}`: somay );
    somaX = (somaN > 0 ? `+${somaN}`: somaN );

    document.getElementById("display").value = `${somaX}x ${somay}y ${somaN} = 0`
}
