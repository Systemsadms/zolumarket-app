<?php
/*
$productos = array(	
	
	'Bolígrafo Azul' => array(
		'marca' => "Bic",
		'precio'  => "0.75€",
		'referencia'  => "552BIC12"
	),
	
	'Pegamento' => array(
		'marca' => "Pritt",
		'precio'  => "1.75€",
		'referencia'  => "567PRI13"
	)
);

	echo json_encode($productos);
*/

//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);

$correo =  $obj['cucharilla1'];
$clave 	=  $obj['cucharilla2'];

$mensaje = 'usuario logueado3';

//decodifica the message into JSON format.
echo json_encode($correo);
//echo 'test';



?>