<?php

$productos = array(
				array(
					'key'  => "1",
					'producto'	 => "Vegetales 1",
					'precio'  	 => "2",
					'proveedor'  => "ZoluMarket",
					'descripcion' => "Esta es la la descripcio del producto lorem ipsum text...",
					'unidad' 	 => "libra",
					'foto'       => "https://cdn.potatopro.com/sites/default/files/styles/1200_wide/public/field/image/argenpapa1.jpg?itok=NWWFFJ65"
				),
				array(
					'key'  => "2",
					'producto'	 => "Vegetales 2",
					'precio'  	 => "5",
					'proveedor'  => "ZoluMarket",
					'descripcion' => "Esta es la la descripcio del producto lorem ipsum text...",
					'unidad' 	 => "libra",
					'foto'       => "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59144d795cafe812663c986a/razonescomermanzana-int.jpg"
				),
				array(
					'key'  => "3",
					'producto'	 => "Vegetales 3",
					'precio'  	 => "5",
					'proveedor'  => "ZoluMarket",
					'descripcion' => "Esta es la la descripcio del producto lorem ipsum text...",
					'unidad' 	 => "libra",
					'foto'       => "https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-2000w/public/aguacate-partido_0.jpg?ramen_itok=iqwQftIcTf"
				),
				array(
					'key'  => "4",
					'producto'	 => "Vegetales 4",
					'precio'  	 => "5",
					'proveedor'  => "ZoluMarket",
					'descripcion' => "Esta es la la descripcio del producto lorem ipsum text...",
					'unidad' 	 => "libra",
					'foto'       => "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/propiedades-de-la-pera-salud-belleza.jpg"
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