<?php

$productos = array(
	array(
		'key'        => "13",
		'producto'	 => "Bistec Boliche",
		'precio'  	 => "154",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Bistec Boliche de Res por Libras.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/carnes/Bistec%20Boliche%20de%20Res%20por%20Libras.%20RD$%20154.jpg"
	),
	
	array(
		'key'        => "14",
		'producto'	 => "Churrasco de Res",
		'precio'  	 => "479",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Churrasco de Res Angus Choice por Libras.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/carnes/Churrasco%20de%20Res%20Angus%20Choice%20por%20Libras.%20RD$%20479.jpg"
	),
	
	array(
		'key'        => "15",
		'producto'	 => "Pecho de Res",
		'precio'  	 => "83",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Pecho de Res Corriente por Libras.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/carnes/Pecho%20de%20Res%20Corriente%20por%20Libras.%20RD$%2083.jpg"
	),
	
	array(
		'key'        => "16",
		'producto'	 => "Pollo Entero",
		'precio'  	 => "79",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Pollo Entero por Libras.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/carnes/Pollo%20Entero%20por%20Libras.%20RD$%2079.jpg"
	),
	
	array(
		'key'        => "17",
		'producto'	 => "Pulpa de Res",
		'precio'  	 => "168",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Pulpa de Res por Libras.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/carnes/Pulpa%20de%20Res%20por%20Libras.%20RD$%20168.jpg"
		)
			);
echo json_encode($productos);




//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);

$correo =  $obj['cucharilla1'];
$clave 	=  $obj['cucharilla2'];

$mensaje = 'Aqui va el arreglo Json con la lista';

//decodifica the message into JSON format.
//echo json_encode($mensaje);




?>