<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// require __DIR__ . '/vendor/autoload.php';
require './vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


//require './vendor/phpmailer/phpmailer/src/Exception.php';
//require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
//require './vendor/phpmailer/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once('Exception.php');
require_once('PHPMailer.php');
require_once('SMTP.php');

$mail = new PHPMailer();

// Email params
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$text = isset($_POST['text']) ? htmlspecialchars($_POST['text']) : '';

$username = $_ENV['SMTP_USERNAME'];
$password = $_ENV['SMTP_PASSWORD'];

//echo ' username and password = ' . $username . ' ' . $password;  die();

// SMTP configuration
$mail->isSMTP();
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = $username; // Your Yandex username
$mail->Password = $password; // Your Yandex password
$mail->SMTPSecure = 'ssl'; // Enable SSL encryption
$mail->Port = 465; // Port for SSL


// Sender (From) address
$mail->setFrom('vicka.boyarkina@yandex.ru', 'Your Name'); // Replace with your email address and name

// Recipient
$mail->addAddress('vicka.boyarkina@yandex.ru', 'rocket-buisness'); // Recipient email and name

// Email subject and body
$mail->Subject = 'Обратная связь';
$mail->Body = "Имя: $name\r\n E-mail: $email\r\n Текст: $text";

$mail->SMTPDebug = SMTP::DEBUG_CONNECTION;

// Send email
if ($mail->send()) {
    echo "Сообщение успешно отправлено";
} else {
    echo "При отправке сообщения возникли ошибки: " . $mail->ErrorInfo;
}
?>
