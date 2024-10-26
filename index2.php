<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información Recibida</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Información Recibida</h2>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $campos = ['nombre', 'apellido', 'telefono', 'correo', 'direccion', 'edad', 'genero'];
            $campos_registrados = 0;
            
            foreach ($campos as $campo) {
                if (isset($_POST[$campo]) && !empty($_POST[$campo])) {
                    $valor = htmlspecialchars($_POST[$campo]);
                    echo "<p>" . ucfirst($campo) . ": " . $valor . "</p>";
                    $campos_registrados++;
                }
            }
            
            echo "<p>Cantidad de elementos registrados: " . $campos_registrados . "</p>";
        } else {
            echo "<p>No se ha recibido información del formulario.</p>";
        }
        ?>
    </div>
</body>
</html>