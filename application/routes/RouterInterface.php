<?php
namespace App/routes;

interface RouterInterface {
    public function callController(string $name = "index", $params = []);
}
