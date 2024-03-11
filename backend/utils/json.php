<?php
Class json {
    public static function getData() {
        if(!($_SERVER['REQUEST_METHOD'] == "POST")) {
            $status = '{status:"ERROR",message:"Błąd połączenia! Brak danych"}';
            return $status;
        }
        $request_body = file_get_contents('php://input');
        $json = json_decode($request_body);
        return $json;
    }
}