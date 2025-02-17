  
<?php
$containerName = gethostname();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Load Balancer</title>
    <style>
        body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #f4f4f4; font-family: Arial, sans-serif; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); width: 300px; text-align: center; margin: 10px; }
        .logo { width: 80px; margin: 10px auto; }
    </style>
</head>
<body>
    <div class="card">
        <h2>Nombre: Edwin Espinal</h2>
        <p>Matrícula: 2-19-0521</p>
    </div>
    <div class="card">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" />
        <p>Contenedor: <?php echo $containerName; ?></p>
        <p>Request recibido</p>
    </div>
</body>
</html>

