<?php
	$AllImages = [];

	$bags = scandir('./img/items/bags/');
	foreach($bags as $image) {
		if(stripos($image,'.png')) $AllImages[] = '<img src="/img/items/bags/'.$image.'"/>';
	}

	$camps = scandir('./img/items/camps/');
	foreach($camps as $image) {
		if(stripos($image,'.png')) $AllImages[] = '<img src="/img/items/camps/'.$image.'"/>';
	}

	$cameras_and_tripods = scandir('./img/items/cameras_and_tripods/');
	foreach($cameras_and_tripods as $image) {
		if(stripos($image,'.png')) $AllImages[] = '<img src="/img/items/cameras_and_tripods/'.$image.'"/>';
	}

	$cameras_lens = scandir('./img/items/cameras_lens/');
	foreach($cameras_lens as $image) {
		if(stripos($image,'.png')) $AllImages[] = '<img src="/img/items/cameras_lens/'.$image.'"/>';
	}

	header('Content-type: application/json; charset=utf-8');
	echo json_encode ($AllImages);

	//echo json_encode (stripslashes(json_encode($AllImages)), true);
?>