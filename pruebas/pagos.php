<?php









//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);


$datosfactura 	=  $obj['datosfactura'];
$datosusuario 	=  $obj['datosusuario'];
$tipoDePago 	= 	$obj['tipoPago'];


if ($tipoDePago === 'efectivo'){
		$banco 	= 	'efectivo';
		$referencia = 'efectivo';
		$fecha = date('d-m-Y');
	}else{
		$banco 	= 	$obj['banco'];
		$referencia = $obj['referencia'];
		$fecha = $obj['fecha'];
	}
/*
$referencia 	= 	$obj['referencia'];
$fecha 	= 	$obj['tipoPago'];
*/


//lista de id de productos en carro de compra
	$products = '';
	  foreach ($datosfactura as $row) {
		 $row['id'];

		$products =   strval($row['id']).','. $products;
		
	}

//Precio Total de la compra
	$precioTotal = '';
	  foreach ($datosfactura as $row) {
		 $row['precio'];

		$precioTotal =   $row['precio'] + $precioTotal;
		
	}
	


//Generar id Unique
function generateRandomString() {
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$charactersLength = strlen($characters);
	$randomString = '';
	for ($i = 0; $i < 30; $i++) {
		$randomString .= $characters[rand(0, $charactersLength - 1)];
	}
	return $randomString;
	}

$random = generateRandomString();







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






//Printing Test //Ojo con e usuario
error_reporting(0);
//$emailUsuario = $datosusuario[email];
$factura = $datosfactura;
echo json_encode($tipoDePago);








$conexion->query("INSERT INTO pagos VALUES (
	'',
	'$random',
	'$datosusuario',
	'$precioTotal',
	'$tipoDePago',
	'$banco',
	'Por Pagar',
	'$referencia',
	'$fecha'
	)");
	

$conexion->query("INSERT INTO facturas VALUES (
	'',
	'$random',
	'$products',
	'$precioTotal',
	'$datosusuario',
	'Por Pagar',
	'direccion'
	)");
	


	$conexion->query("INSERT INTO delivery VALUES (
		'',
		'$random',
		'$precioTotal',
		'Por Pagar',
		'$emailUsuario',
		'Direccion Envio',
		'Direccion Mensajero'
		)");
		














?>