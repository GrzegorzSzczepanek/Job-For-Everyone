<?php
Class Database {
    protected $server;
    protected $user;
    protected $password;
    protected $database;
    public $connection;

    public function __construct($server, $user, $password, $database) {
        $this->server = $server;
        $this->user = $user;
        $this->password = $password;
        $this->database = $database;
        $this->connect();
    }

    public function connect() {
        try {
            $pdo = new PDO("mysql:host=$this->server;dbname=$this->database;port=3306", "$this->user", "$this->password");
        } catch (PDOException $error) {
            echo $error;
        }
        $this->connection = $pdo;
        return $pdo;
    }

}

