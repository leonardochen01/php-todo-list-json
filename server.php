<?php

  $json_string = file_get_contents('todo-list.json');

  $list = json_decode($json_string);

  var_dump($json_string);

  header('Content-Type: application/json');
  echo json_encode($list);

?>