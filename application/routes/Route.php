<?php
namespace App/routes;

class Route implements RouterInterface{
    function __construct() {

    }
    public function callController($name, $params) {
        echo "call ".__CLASS__." here ";
    }
}
