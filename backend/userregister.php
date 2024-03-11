<?php
header('Content-Type: application/json');
require_once("utils/json.php");
require_once("utils/database.php");
require_once("utils/stringgenerator.php");
$database = new Database("156.17.72.125", "root", "haslo", "besthacks");
$json = json::getData();
$email = $json->email;
$name = $json->user;
$surname = $json->surname;
$password = $json->password;
$second_pass = $json->confirm_password;
 if(!(isset($email)) || !(isset($name)) || !(isset($surname)) || !(isset($password))) {
     $status = '{"status":"ERROR","message":"Błąd połączenia! Brak danych"}';
     print_r(json_encode($status));
     exit();
 }
 if(!($_SERVER['REQUEST_METHOD'] == "POST")) {
     $status = '{"status":"ERROR","message":"Błąd połączenia! Brak danych"}';
     print_r(json_encode($status));
     exit();
 }
 if($second_pass != $password) {
    $status = '{"status":"ERROR","message":"Hasła nie są takie same"}';
     print_r(json_encode($status));
     exit();
 }
//  if(strlen($phone) != 0) {
//     if(!is_numeric($phone))
//     {
//         $status = '{"status":"ERROR","message":"Niepoprawny numer telefonu"}';
//         print_r(json_encode($status));
//         exit();
//     }
// }
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
     $status = '{"status":"ERROR","message":"E-mail/numer telefonu jest niepoprawny"}';
     print_r(json_encode($status));
     exit();
 }
 if(((strlen($email) < 5) || (strlen($email) > 50))) {
     $status = '{"status":"ERROR","message":"Niepoprawna długość e-mailu"}';
     print_r(json_encode($status));
     exit();
 }
 if(((strlen($password) < 5) || (strlen($password) > 64 ))) {
     $status = '{"status":"ERROR","message":"Niepoprawna długość hasła"}';
     print_r(json_encode($status));
     exit();
 }
 if(((strlen($name) <= 0) || (strlen($name) > 50 ))) {
     $status = '{"status":"ERROR","message":"Niepoprawna długość imienia"}';
     print_r(json_encode($status));
     exit();
 }
 if(((strlen($surname) <= 0) || (strlen($surname) > 80 ))) {
     $status = '{"status":"ERROR","message":"Niepoprawna długość nazwiska"}';
     print_r(json_encode($status));
     exit();
 }
//  if(strlen($phone) != 0) {
//      if(((strlen($phone) < 9) || (strlen($phone) > 30 ))) {
//          $status = '{"status":"ERROR","message":"Niepoprawna długość numeru telefonu"}';
//          print_r(json_encode($status));
//          exit();
//      }
//  }
 $select = $database->connection->prepare("SELECT * FROM users WHERE email=:email");
 $select->bindValue(":email", $email);
 $select->execute();
 $result = $select->fetchAll(PDO::FETCH_ASSOC);
 if(count($result) > 0) {
    $status = '{"status":"ERROR","message":"Na podanym adresie e-mail jest już zarejestrowane konto"}';
    print_r(json_encode($status));
    exit();
 }

$salt = stringgenerator::generateRandomString(16);
$hashedPass = "\$SHA\$".$salt.hash('sha256', hash('sha256', $password).$salt);

$query = $database->connection->prepare("INSERT INTO users (`name`, `surname`, `email`, `password`) VALUES (:name, :surname, :email, :password)");
$query->bindValue(":name", $name);
$query->bindValue(":surname", $surname);
$query->bindValue(":email", $email);
$query->bindValue(":password", $hashedPass);
// $query->bindValue(":phone_number", $phone);
$query->execute();
if(!$query) {
    $status = '{"status":"ERROR","message":"Błąd z wysłaniem zapytania SQL"}';
    print_r(json_encode($status));
    exit();
}
$token = hash('sha256', hash('sha256', $password).$name);
$status = '{"status":"OK","token":"'.$token.'","isCompany":"FALSE"}';
print_r($status);
