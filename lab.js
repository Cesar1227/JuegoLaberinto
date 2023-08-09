
//Definición de variables
cantFilas=0;   //# filas de la matriz seleccionada 
cantColumnas=0;  //# columnas de la matriz seleccionada 
matriz=null; // matriz seleccionada
posF=0; //Fila de inicio o salida
posC=0; //columna de inicio o salida
largo=6; // tamaño de cada cuadro al pintar el laberinto
medio=largo/2; //punto medio para ubicar el circulo
cordX=0; //coordenada en X para mover el circulo por el canvas
cordY=0; //coordenada en Y para mover el circulo por el canvas
posFSalida=0; //Fila en que termina el laberinto o fila solución
posCSalida=0; //columna en que termina el laberinto o columna solución
terminado=false; //laberinto terminado
empezo=false;

width=300; //ancho del canvas
height=250; //largo del canvas
widthF=0;   //Ancho final del canvas
heightF=0;  //Alto final del canvas

longitudMoveX=0;  //Ancho de cada columna 
longitudMoveY=0;  //Alto de cada columna

//Elección de mando
mando="";

//canvas
var canvas=null;
var ctx=null;

canvas=document.getElementById("canvas");
ctx = canvas.getContext('2d');

function lab1(){
	let tamFil=20;
	let tamCol=30;
	let fila=10,col=0;
	
	//Estableciendo variables
	cantFilas=tamFil;
	cantColumnas=tamCol;
	posF=fila;
	posC=col;
	filaSol=9
	columnaSol=29;
	posCSalida=columnaSol;
	posFSalida=filaSol;
	width="200";
	height="120";
	widthF=500;
	heightF=330;

	//coordenadas
	cordX=medio+col*largo;
	cordY=medio+fila*largo;

	longitudMoveX=widthF/tamCol;
	longitudMoveY=heightF/tamFil;

	//MAPEO 1
	map0 = [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
			[0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		];															
	matriz=map0;
}

function lab2(){
	let tamFil=47;
	let tamCol=35;
	let fila=46,col=1;

	//Estableciendo variables
	cantFilas=tamFil;
	cantColumnas=tamCol;
	posF=fila;
	posC=col;
	filaSol=0
	columnaSol=33;
	posCSalida=columnaSol;
	posFSalida=filaSol;
	width="210";
	height="300";

	widthF=500;
	heightF=670;

	//coordenadas
	cordX=medio+col*largo;
	cordY=medio+fila*largo;

	longitudMoveX=widthF/tamCol;
	longitudMoveY=heightF/tamFil;

	//MAPEO 1
	 map0 = [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

		];
	matriz=map0;
}

function lab3(){
	let tamFil=23;
	let tamCol=23;
	let fila=19,col=0;

	//Estableciendo variables
	cantFilas=tamFil;
	cantColumnas=tamCol;
	posF=fila;
	posC=col;
	filaSol=0
	columnaSol=1;
	posCSalida=columnaSol;
	posFSalida=filaSol;
	width="140";
	height="140";
	widthF=500;
	heightF=500;

	//coordenadas
	cordX=medio+col*largo;
	cordY=medio+fila*largo;

	longitudMoveX=widthF/tamCol;
	longitudMoveY=heightF/tamFil;

	//MAPEO 1
	map0 = [
			[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
			[1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],          
			[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
			[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
			[0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
	matriz=map0;
}

function mostrar(op){
	if(op!="volver"){
		iniciar(op);
		document.getElementById("escogerLab").style.display="none";
		document.getElementById("jugar").style.display="inline-block";
	}else{
		run("reiniciar");
		document.getElementById("escogerLab").style.display="block";
		document.getElementById("jugar").style.display="none";
	}
	
}

var opcionLab="";
function iniciar(op) {
	opcionLab=op;
	
	canvas.style.background="black";

	document.getElementById("container").style.height=25+"vh";
	document.getElementById("container").style.width=100+"%";

	if(opcionLab=="op1"){
		lab1();
	}else if (opcionLab=="op2") {
		lab2();
	}else if (opcionLab=="op3"){
		lab3();
	}

	canvas.width=width;
	canvas.height=height;
	
	pintar();
	canvas.style.width=widthF+"px";
	canvas.style.height=heightF+"px";
	canvas.width = parseInt(getComputedStyle(document.getElementById('canvas')).getPropertyValue('width'));
	canvas.height = parseInt(getComputedStyle(document.getElementById('canvas')).getPropertyValue('height'));
	largo=canvas.width/cantColumnas;
	medio=largo/2;
	pintar();
	terminado=false;
}

function reiniciar(){
	mando="";
	ctx.clearRect(0,0,canvas.width,canvas.height);
	cordX=medio; 
	cordY=medio;
	terminado=false;
	run("reiniciar");
}

//Pintar laberinto seleccionado
function pintar(){
	let x=0,y=0,long=largo;
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
		ctx.fillStyle = 'gray';
		for(i=0;i<cantFilas;i++){
			for(j=0;j<cantColumnas;j++){
				if (matriz[i][j]!=0) {
					ctx.beginPath();
					ctx.fillRect(x,y, long, long);
					ctx.stroke();
					ctx.closePath();
				}
				x+=long;
			}
			y+=long;
			x=0;
		}
	}
	
}

//Verificar solucion
function verificar(){
	if(posF==posFSalida && posC==posCSalida){
		alert("ENHORABUENA \n HAS ENCONTRADO LA SOLUCIÓN");
		terminado=true;
	}else{
		alert("ESTA NO ES LA SOLUCIÓN \n SIGUE INTENTANDO");
	}
}

function verificarEnMovimiento(){
	if(posF==posFSalida && posC==posCSalida){
		alert("ENHORABUENA \n HAS ENCONTRADO LA SOLUCIÓN");
		terminado=true;
	}
}

//Mover circulo u objeto
var radio=4;
function mover(){
	if(!terminado && mando!="mouse"){
		ctx.beginPath();
		ctx.arc(cordX, cordY, radio, 0, Math.PI*2);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
		verificarEnMovimiento();
	}
}

//Borrar objeto en la posición actual
function borrar(){
	ctx.beginPath();
	ctx.clearRect(cordX-(radio+0.25),cordY-(radio+0.25),radio*2+0.5,radio*2+0.5);
	ctx.fill();
	ctx.closePath();
	rastro();
}

function rastro(){
	ctx.beginPath();
	ctx.arc(cordX, cordY, radio-1.5, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

//Movimientos del objeto
function moverDerecha(){
	if(posC<cantColumnas && matriz[posF][posC+1]==0 && !terminado){
		borrar();
		posC++;
		cordX+=largo;
		mover();
	}
}

function moverIzquierda(){
	if(posC>0 && matriz[posF][posC-1]==0 && !terminado){
		borrar();
		posC--;
		cordX-=largo;
		mover();
	}
}

function moverArriba(){
	if(posF>0 && matriz[posF-1][posC]==0 && !terminado){
		borrar();
		posF--;
		cordY-=largo;
		mover();
	}
}

function moverAbajo(){
	if(posF<cantFilas && matriz[posF+1][posC]==0 && !terminado){
		borrar();
		posF++;
		cordY+=largo;
		mover();
	}
}

//Movimiento con teclado
function accionTecla(tecla){
	if(mando!="mouse" && empezo){
		mando="keyboard";
		switch(tecla){
			case 38: moverArriba(); break;
			case 40: moverAbajo(); break;
			case 37: moverIzquierda(); break;
			case 39: moverDerecha(); break;
		}
	}
}


//Tiempo transcurrido
var horas=0,minutos=0,segundos=0;
function TimeTrans(){
	tiempo=document.getElementById('tiempo');
	if(!terminado){
		segundos++;
		if(segundos==60){
			minutos++;
			segundos=0;
			if (minutos==60) {
				horas++;
				minutos=0;
				segundos=0;
			}
		}

	hours = ( horas < 10 ) ? ("0"+horas) : horas ;
	minutes = ( minutos < 10 ) ? ("0"+minutos) : minutos ;
	seconds = ( segundos < 10 ) ? ("0"+segundos) : segundos ;

	time = hours+':'+minutes+':'+seconds;
	tiempo.value=time;
	
	}
}

var intervalo;

function run(act) {
	iniciar(opcionLab);
	mover();
	horas=0;
	minutos=0;
	segundos=0;
	if(act=="reiniciar"){
		empezo=false;
		clearInterval(intervalo);
		document.getElementById('tiempo').value="00:00:00";
		document.getElementById("init").disabled=false; 
	}else{
		empezo=true;
		intervalo=setInterval(TimeTrans, 1000);
		document.getElementById("init").disabled=true; 
	}
	mando="";
}

//Eventos
//window.addEventListener('load',iniciar,false);

document.addEventListener('keydown', function (evt) {
	evt.preventDefault();
	Press = evt.which;
	accionTecla(Press);
}, false);



//MOVIMIENTO CON EL MOUSE
var dibujar =false;  //Marcar la linea
var valido=false;   //Posición inicial es valida
var movido=false;  
var enCamino=true;  //Va dentro del camino y no ha chocado con muros
var empezoM=false; //Empezo a dibujar con el mouse


ctx.lineJoin = "round";

canvas.addEventListener('mousedown', function(evt) {
	if(empezo && mando!="keyboard"){
		mando="mouse";
		empezoM=true;
		dibujar = true;
	    enCamino=true;
	    cordX=Math.trunc(evt.layerX/longitudMoveX);
		cordY=Math.trunc(evt.layerY/longitudMoveY);
	  	if(cordX==posC && cordY==posF){
			valido=true;
			movido=true;
	  	}	
	}
}, false);

canvas.addEventListener("mousemove", function(evt) {
	let m;
  if (dibujar && valido) {
	if(enCamino){
		cordX=Math.trunc(evt.layerX/longitudMoveX);
		cordY=Math.trunc(evt.layerY/longitudMoveY);
		moverWithMouse(cordX,cordY);
		m = oMousePos(canvas, evt);
		ctx.strokeStyle="#0095DD";
		ctx.lineTo(m.x, m.y);
		ctx.stroke();
	}else{
		alert('--------GAME OVER----------');
		dibujar = false;
		valido=false;
		movido=false;
		enCamino=true;
		empezoM=false;
		run("reiniciar");
	}
  }
}, false);


canvas.addEventListener('mouseup', function(evt) {
  dibujar = false;
  if(movido){
	if(cordX==columnaSol && cordY==filaSol){
		valido=true;
		terminado=true;
		dibujar = false;
		valido=false;
		movido=false;
		enCamino=true;
		empezoM=false;
		empezo=false;

		alert("------------CONGRATULATION---------");
	}else{
		alert("------------TRY AGAIN-------------");
		dibujar = false;
		valido=false;
		movido=false;
		enCamino=true;
		mouseX=0,mouseY=0;
		empezo=false;
		empezoM=false;

		run("reiniciar");
	}
  }

  /*else{
	valido=false;
  }*/
  
}, false);

canvas.addEventListener("mouseout", function(evt) {
	if(empezoM && mando!="keyboard"){
	  alert('--------GAME OVER----------');
		dibujar = false;
		valido=false;
		movido=false;
		enCamino=true;
		empezoM=false;
		run("reiniciar");
	}
}, false);

function moverWithMouse(movX,movY){
	if(matriz[movY][movX]==1){
		enCamino=false;
	}
}

function oMousePos(canvas, evt) {
  //var ClientRect = canvas.getBoundingClientRect();
  return { 
	x: Math.round(evt.layerX),
	y: Math.round(evt.layerY)
  }
}
