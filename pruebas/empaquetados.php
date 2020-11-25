<?php

$productos = array(
	array(
		'key'        => "19",
		'producto'	 => "Arroz Bisonó",
		'precio'  	 => "309",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Arroz Bisonó Súper Selecto, 10 Libras.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Arroz%20Bison%c3%b3%20S%c3%baper%20Selecto,%2010%20Libras.%20RD$%20309.jpg"
	),
	
	array(
		'key'        => "20",
		'producto'	 => "Arroz Campos",
		'precio'  	 => "319",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Arroz Campos Premium, 10 Libras",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Arroz%20Campos%20Premium,%2010%20Libras.%20RD$%20319.jpg"
	),
	
	array(
		'key'        => "21",
		'producto'	 => "Arroz Don Andrés",
		'precio'  	 => "288",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Arroz Don Andrés Premium,10 Libras ",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Arroz%20Don%20Andr%c3%a9s%20Premium,10%20Libras%20RD$%20288.jpg"
	),
	
	array(
		'key'        => "22",
		'producto'	 => "Arroz Integral",
		'precio'  	 => "95",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Arroz Integral Goya 32 Oz",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Arroz%20Integral%20Goya%2032%20Oz.%20RD$%2095.jpg"
	),
	
	array(
		'key'        => "23",
		'producto'	 => "Leche Evaporada",
		'precio'  	 => "54",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Leche Evaporada Carnation, 315 g.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Leche%20Evaporada%20Carnation,%20315%20g.%20RD$%2054.jpg"
	),
	
	array(
		'key'        => "24",
		'producto'	 => "Pasta Coditos Milano",
		'precio'  	 => "32",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Pasta Coditos Milano 400 g.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Pasta%20Coditos%20Milano%20400%20g.%20RD$%2032.jpg"
	),
	
	array(
		'key'        => "25",
		'producto'	 => "Pasta Milano Mostacholis",
		'precio'  	 => "32",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Pasta Milano Mostacholis, 400 g. RD$ 32",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Pasta%20Milano%20Mostacholis,%20400%20g.%20RD$%2032.jpg"
	),
	
	array(
		'key'        => "26",
		'producto'	 => "Pasta Princesa Spaguetti",
		'precio'  	 => "29",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Pasta Princesa Spaguetti, 400 g.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Pasta%20Princesa%20Spaguetti,%20400%20g.%20RD$%2029.jpg"
	),
	
	array(
		'key'        => "27",
		'producto'	 => "Pastas Milano Lingüini",
		'precio'  	 => "32",
		'proveedor'  => "ZoluMarket",
		'descripcion' => "Pasta Princesa Spaguetti, 400 g.",
		'unidad' 	 => "gr",
		'foto'       => "http://zolumarket.com/pruebas/productos/empaquetados/Pastas%20Milano%20Ling%c3%bcini%20400%20g.%20RD$%2032.jpg"
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