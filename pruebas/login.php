<?php




//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);

$correo =  $obj['usuario'];
$password 	=  $obj['contrasena'];


//$correo =  'enriquemendoza162@gmail.com';
//$password 	=  '123';




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




if ($correo=== '' || $password=== '' )
{
	echo json_encode('complete');
}
else
{
	$consulta = "SELECT * FROM usuarios WHERE email='$correo' AND password='$password' ";
	$hacerconsulta2 = $conexion->query($consulta); 
	
	if (mysqli_num_rows($hacerconsulta2)>0){
		
		while ($fila =mysqli_fetch_array($hacerconsulta2)){
			echo json_encode	($arreglo []= array(
			"id" 		=> $fila["id"], 
			"nombre"	=> $fila["nombre"],
			"apellido"	=> $fila["apellido"],
			"email"		=> $fila["email"],
			"password"	=> $fila["password"],
			"telefono"	=> $fila["telefono"],
			"direccion"	=> $fila["direccion"],
			"pais"		=> $fila["pais"],
			"fecha"		=> $fila["fecha"]
		));
		}
	}
	else
	{
		echo json_encode('rejected');
	}
}







/*

	echo json_encode($login);


	$mensaje = 'rejected';
	echo json_encode($mensaje);
*/










?>