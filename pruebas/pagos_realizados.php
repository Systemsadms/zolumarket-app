<?php








//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);


$cliente 	=  $obj['usuario'];
//$cliente 	=  'admin@admin.com';



//Datos de Conexino con e servidor local
/*
$servidor = 'localhost';
$usuario = 'root';
$clave= '';
$bd = 'zolumarket_bd';
*/

//Datos de Conexino con e servidor

$servidor = '158.69.227.160';
$usuario = 'zolumark_admin';
$clave= 'hdwtnkue456';
$bd = 'zolumark_bd';

$conexion = new mysqli ($servidor,$usuario,$clave,$bd);






$consulta = "SELECT * FROM pagos WHERE usuario='$cliente'";
$hacerconsulta2 = $conexion->query($consulta); 


$arreglo=array();


while ($fila =mysqli_fetch_array($hacerconsulta2)){
	/*
	echo "<p>";
	echo $fila ["id"];
	echo "-"; // un separador
	echo $fila["idunique"];
	echo "-"; // un separador
	echo $fila ["usuario"];
	echo "-"; // un separador
	echo $fila["monto"];
	echo "</p>";
*/
	$id = $fila ["id"];

	$ssql = "SELECT * FROM pagos WHERE usuario='$cliente' AND id='$id' ";
	$dossql = $conexion->query($ssql);
	while ($fila =mysqli_fetch_array($dossql)){

		$arreglo []= array("id" => $fila["id"], "monto"=> $fila["monto"],"estatus"=> $fila["estatus"],"fecha"=> $fila["fecha"]);
	}


	}


	//print_r ($arreglo);

echo json_encode($arreglo);


	
















?>