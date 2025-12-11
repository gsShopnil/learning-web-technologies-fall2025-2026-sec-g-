<?php
$length=10;
$width=5;

$area=$length* $width;

$perimeter=2* ($length + $width);
echo "Area:" . $area . "<br>";
echo "Perimeter:" . $perimeter . "<br>";


//vat
$amount= 100;
$vat= 0.15 * $amount;
echo "VAT: " . $vat ."<br>";


//Even odd
$number= 7;
if ($number% 2 == 0) {
    echo "Even<br>";
} else {
    echo "Odd<br>";
}



//find large Num
$a= 10;
$b= 20;
$c= 15;
if ($a> $b && $a > $c) {
    echo $a . "<br>";
} else if ($b > $a && $b > $c) {
    echo $b . "<br>";
} else {
    echo $c . "<br>";
}




//odd num (10-100)
for ($i = 10; $i <= 100; $i++) {
    if ($i % 2 != 0) 
        {
        echo $i ." ";
        }
}
echo "<br>";





//search element
$array= [1, 2, 3, 4, 5];
$search= 3;
$found= false;
for ($i = 0; $i < count($array); $i++) {
    if ($array[$i] == $search) {
        $found = true;
    }
}
if ($found) {
    echo "Found<br>";
} else {
    echo "Not found<br>";
}





//Print Shape
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "<br>";
}

for ($i = 3; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j . " ";
    }
    echo "<br>";
}

$letters = ['A', 'B', 'C', 'D', 'E', 'F'];
$k = 0;
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $letters[$k] . " ";
        $k++;
    }
    echo "<br>";
}





//2D array
echo "Declare 2D Array and Print Shapes\n";
$my_2d_array= array(
    array(1, 2, 3, "A"),
    array(1, 2, "B", "C"),
    array(1, "D", "E", "F")
);
$shapes_to_print= array(
    array("1", "2", "3"),
    array("1", "2"),
    array("1")
);
echo "declared 2D array:\n";
print_r($my_2d_array);
echo "\n";

echo "Shapes to print using the 2D array:\n";

for ($i= 0; $i < count($my_2d_array); $i++) {
    for ($j= 0; $j < count($shapes_to_print[$i]); $j++) {
        echo $my_2d_array[$i][$j];
    }

    $start_index = 4 - ($i + 1);
    for ($k = $start_index; $k < count($my_2d_array[$i]); $k++) {
        echo $my_2d_array[$i][$k];
    }
    echo "\n";
}
echo "\n";
?>








