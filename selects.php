<?php

require_once('connect.php');
require_once('action.php');

/**
 * Connect to data base and select collection of products
 * @return array
 */

if(isset($count) && isset($operatorId)){
    $selects = $connect->query("SELECT requests.*, operators.fio, offers.name
                                  FROM `requests` 
                                  LEFT JOIN `offers` ON requests.offer_id = offers.id
                                  LEFT JOIN  `operators` ON requests.operator_id = operators.id
                                  WHERE `count` > '$count' AND `operator_id` = '$operatorId'
                                  
                                  ");

}

if($count == null || $operatorId == null){
    $selects = $connect->query("SELECT requests.*, operators.fio, offers.name
                                  FROM `requests` 
                                  LEFT JOIN `offers` ON requests.offer_id = offers.id
                                  LEFT JOIN  `operators` ON requests.operator_id = operators.id
                                  ORDER BY requests.id
                                  ");
}

$shares = mysqli_fetch_all($selects, MYSQLI_ASSOC);

?>