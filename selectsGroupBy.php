<?php
require_once('connect.php');




    $selectsGroup = $connect->query("SELECT SUM(requests.count), SUM(requests.price), offers.name
                                  FROM `requests` 
                                  LEFT JOIN `offers` ON requests.offer_id = offers.id
                                  GROUP BY offers.name
                                  ");

    $shares = mysqli_fetch_all($selectsGroup, MYSQLI_ASSOC);
