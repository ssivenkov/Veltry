<section id="bags" class="bags">
	<div class="white-bg">
		<div class="header-container">
			<h3 class="header text-center">bags</h3>
			<p class="subheader text-center">Find something new for your trip</p>
		</div>
		<div class="list-items list-items-2-container list-3-container list-items-4-container">

			<?php
				$bags = get_all_bags();
				foreach ($bags as $item): ?>
			
					<div class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</div>

			<?php endforeach; ?>

		</div>
	</div>
</section>
<!-- end bags -->

<section id="camps" class="camps">
	<div class="white-bg">
		<div class="header-container">
			<div class="separation-line"></div>
			<h3 class="header text-center">camps</h3>
			<p class="subheader text-center">Our camps are easy to deploy and take up minimal space</p>
		</div>
		<div class="list-items list-items-2-container">

			<?php
				$camps = get_all_camps();
				foreach ($camps as $item): ?>
			
					<div class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</div>

			<?php endforeach; ?>

		</div>
	</div>
</section>
<!-- end camps -->

<section id="cameras" class="cameras">
	<div class="white-bg">
		<div class="header-container">
			<div class="separation-line"></div>
			<h3 class="header text-center">cameras & tripods</h3>
			<p class="subheader text-center">Professional cameras for the best moments of travel</p>
		</div>
		<div class="list-items list-items-2-container">

			<?php
				$cameras = get_all_cameras();
				foreach ($cameras as $item): ?>
			
					<div class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</div>

			<?php endforeach; ?>

		</div>
	</div>
</section>
<!-- end cameras -->

<section id="lenses" class="lenses">
	<div class="white-bg">
		<div class="header-container">
			<div class="separation-line"></div>
			<h3 class="header text-center">camera lenses<h3>
			<p class="subheader text-center">Lenses are an important part of cameras, they allow you to get the best photo quality</p>
		</div>
		<div class="list-items list-items-1-container">

			<?php
				$lenses = get_all_lenses();
				foreach ($lenses as $item): ?>
			
					<div class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</div>

			<?php endforeach; ?>

		</div>
	</div>
</section>
<!-- end lenses -->
<!-- end content items -->