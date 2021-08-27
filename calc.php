<?php

$numberMouns = date('n', strtotime($_POST['date']));
$dateFor = date('Y-m-d', strtotime($_POST['date']));
$summn = $_POST['sum-dep'];
$percent = 0.1;
$summadd = $_POST['added-dep'];
$years = $_POST['term-dep'];
$radio = $_POST['radio'];
$currentMouns = $years * 12 + $numberMouns;
$date = date_create($dateFor);

for ($i = $numberMouns; $i < $currentMouns; $i++) {

    $date1 = date_format($date, 'Y-m-d');

    if (date('L', strtotime($date1))) {
        $daysPerYear = 366;
    } else {
        $daysPerYear = 365;
    }

    if ($radio == 'no') {
        $summadd = 0;
    }

    $summn = $summn + ($summn + $summadd)*date('t', strtotime($date1))*($percent/$daysPerYear);

    date_modify($date, '1 month');

}

echo $summn;