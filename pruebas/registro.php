<?php


//Obtener el JSON recibido en el variable $ json.
$json = file_get_contents('php://input');

//decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json, true);


$nombre 	=  $obj['nombre'];
$apellido 	=  $obj['apellido'];
$email 		= 	$obj['email'];
$password 	=  $obj['password'];
$telefono 	= 	$obj['telefono'];
$fecha = date('d-m-Y');



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




$ssql = "SELECT * FROM usuarios WHERE email='$email'";
$rs = $conexion->query($ssql);

		if (mysqli_num_rows($rs)>0)
		{ 
			echo json_encode('error');
		}
		else if ($nombre === '' || $apellido ==='' || $email ==='' || $usuario ==='' || $password ==='' || $telefono ==='')
		{

			echo json_encode('completar');

		}
		else
		{

			$conexion->query("INSERT INTO usuarios VALUES (
							'',
							'$nombre',
							'$apellido',
							'$email',
							'$password',
							'$telefono',
							'',
							'',
							'$fecha'
							)");

				error_reporting(0);
				echo json_encode('registrado');


		}


	




/*
$host 		="158.69.227.160";
$db_user 	="zolumark_admin";
$db_pass 	="hdwtnkue456";
$db_name 	="zolumark_bd";
$db_table 	="usuarios";

$conexion = new mysqli($host, $db_user, $db_pass, $db_name);

  if($conexion->connect_errno)
			        {
			        	die("La conexion fallo". $conexion->connect_errno);

			        }else{
						echo 'conexion exitosa';
					}
					*/
?>