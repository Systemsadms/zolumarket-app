<?php




//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);


$direccion 	=  $obj['direccion'];
$codigo 	=  $obj['codigoUnique'];





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



$conexion->query("UPDATE delivery SET direccionenvio=$direccion WHERE idunique=$codigo ")









echo json_encode('Hola Mapa');







?>