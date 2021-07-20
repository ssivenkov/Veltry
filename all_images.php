<?php
$allBags = [
	array(
		"category" => "bag",
		"title" => "American tourister polyester black hard-sided 28.4 inch | 72.1 cm",
		"url" => "img/items/bags/1.png"
	),
	array(
		"category" => "bag",
		"title" => "American tourister polyester black hard-sided ribbed 29.5 inch | 74.9 cm",
		"url" => "img/items/bags/2.png"
	),
	array(
		"category" => "bag",
		"title" => "Nasher miles manarola hard-sided luggage blue set of trolley/travel/tourist bag 27 inch | 68.6 cm",
		"url" => "img/items/bags/3.png"
	),
	array(
		"category" => "bag",
		"title" => "Nasher miles santorini orange PP hard-sided luggage set of 1 trolley/travel/tourist bag 27,3 inch | 69.3 cm",
		"url" => "img/items/bags/4.png"
	),
	array(
		"category" => "bag",
		"title" => "Nasher miles olivia green ribbed PP hard-sided check-in luggage bag 28.9 inch | 73.4 cm",
		"url" => "img/items/bags/5.png"
	),
	array(
		"category" => "bag",
		"title" => "American tourister x-bags soft-sided casual red fabric 65 cm gym bag 28.5 inch | 72.3 cm",
		"url" => "img/items/bags/6.png"
	)
];

$allCamps = [
	array(
		"category" => "camp",
		"title" => "Diswa quick setup all season. Standard tent quality for 4 persons",
		"url" => "img/items/camps/1.png"
	),
	array(
		"category" => "camp",
		"title" => "Dealcrox new for 4 person, tent for camping, waterproof, outdoor",
		"url" => "img/items/camps/2.png"
	),
	array(
		"category" => "camp",
		"title" => "Ozoy picnic camping portable. For 6 person, tent for camping, waterproof, outdoor",
		"url" => "img/items/camps/3.png"
	)
];

$allCameras = [
	array(
		"category" => "camera",
		"title" => "Basics 60-inch lightweight tripod with bag (black)",
		"url" => "img/items/cameras_and_tripods/1.png"
	),
	array(
		"category" => "camera",
		"title" => "Photron tripod stedy 450 with 4.5 feet pan head + extra quick release plate + foam grip + carry case",
		"url" => "img/items/cameras_and_tripods/2.png"
	),
	array(
		"category" => "camera",
		"title" => "SONY G7 mirrorless camera with LUMIX G VARIO 14-42mm f/3.5-5.6 II ASPH./MEGA O.I.S. lens - black",
		"url" => "img/items/cameras_and_tripods/3.png"
	)
];

$allLenses = [
	array(
		"category" => "lense",
		"title" => "Tamron A17E AF 70-300mm F/4-5.6 Di LD macro telephoto zoom lens with hood for canon DSLR camera (black)",
		"url" => "img/items/cameras_lens/1.png"
	),
	array(
		"category" => "lense",
		"title" => "Nikon AF 70-300mm f/4-5.6G telephoto zoom lens for Nikon DSLR camera matte black",
		"url" => "img/items/cameras_lens/2.png"
	),
	array(
		"category" => "lense",
		"title" => "Yongnuo EF YN 50mm F/1.8 1:1.8 standard prime lens for canon rebel digital camera works well with 5D, 7D, 60D, 70D, T3, T3i, T5, T5i, plus Nikon AF-S DX Nikkor 55-300mm F/4.5-5.6G ED VR telephoto zoom lens for Nikon DSLR camera",
		"url" => "img/items/cameras_lens/3.png"
	)
];

$allImages = array();
foreach($allBags as $item) {
	$allImages[] = array(
		'category' => $item[category],
		'title' => $item[title],
		'url' => $item[url],
	);
}
foreach($allCamps as $item) {
	$allImages[] = array(
		'category' => $item[category],
		'title' => $item[title],
		'url' => $item[url],
	);
}
foreach($allCameras as $item) {
	$allImages[] = array(
		'category' => $item[category],
		'title' => $item[title],
		'url' => $item[url],
	);
}
foreach($allLenses as $item) {
	$allImages[] = array(
		'category' => $item[category],
		'title' => $item[title],
		'url' => $item[url],
	);
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($allImages);
?>