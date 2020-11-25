<?php









//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);


$latitud 	=  $obj['latitud'];
$longitud 	=  $obj['longitud'];

echo json_encode('Hola Mapa');














?>