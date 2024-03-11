<?php
header('Content-Type: application/json');
require_once("user.php");
require_once("utils/database.php");
require_once("utils/json.php");
$json = json::getData();
$login = trim($json->email);
$password = trim($json->password);
$loginFiltered = str_replace(' ', '', $login);
$database = new Database("156.17.72.125", "root", "haslo", "besthacks");
$status;
if(!($_SERVER['REQUEST_METHOD'] == "POST")) {
    $status = '{"status":"ERROR","message":"Błąd połączenia! Brak danych"}';
    print_r(json_encode($status));
    exit();
}
if(!(isset($login) && isset($password))) {
    $status = '{"status":"ERROR","message":"Nie wysłano pól e-mail/telefon oraz hasło"}';
    print_r(json_encode($status));
    exit();
}
if(is_numeric($loginFiltered))
{
    $query = $database->connection->prepare("SELECT * FROM users WHERE phone_number= :login");
}
else {
    $query = $database->connection->prepare("SELECT * FROM users WHERE email= :login");
    if (!filter_var($login, FILTER_VALIDATE_EMAIL)) {
        $status = '{"status":"ERROR","message":"E-mail/numer telefonu jest niepoprawny"}';
        print_r(json_encode($status));
        exit();
    }   
}
if(((strlen($loginFiltered) < 5) || (strlen($loginFiltered) > 50)) || ((strlen($password) < 5) || (strlen($password) > 64 ))) {
    $status = '{"status":"ERROR","message":"Długość e-maila lub hasła jest niepoprawna"}';
    print_r(json_encode($status));
    exit();
}
$user = new user($loginFiltered, $password);
$jsonUser = $user->getJson();

$query->bindValue(":login", $loginFiltered);

$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
if(count($result) == 0) {
    $status = '{"status":"ERROR","message":"Taki użytkownik nie istnieje"}';
    print_r(json_encode($status));
    exit();
}
$salt = substr($result[0]["password"], 5, 16);
$passwordToCheck = hash('sha256', hash('sha256', $password).$salt);
$substrPass = substr($result[0]["password"], 21);
if(!($passwordToCheck == $substrPass))
{
    $status = '{"status":"ERROR","message":"Niepoprawne hasło"}';
    print_r(json_encode($status));
    exit();
}
$token = hash('sha256', hash('sha256', $password).$result[0]["name"]);
// if($result[0]["isCompany"] == "1") {
//     $status = '{"status":"OK","token":"'.$token.'","isCompany":"TRUE"}';
// } else {
// //    $status = '{"status":"OK","token":"'.$token.'","isCompany":"FALSE"}';
// }
$status = '{"status":"OK","token":"'.$token.'"}';
print_r(json_encode($status));
