<section id="bags" class="bags">
	<div id="sorting-bags-container" class="white-bg">
		<div class="header-container">
			<h3 class="header text-center">bags</h3>
			<p class="subheader text-center">Find something new for your trip</p>
		</div>

		<div class="sort-bags">
         <div class="sort-bags__buttons-container">
				<div class="sort sort-bags__cheap" data-sort="cost-bag" data-order="asc" onclick="BagsСheapActive()">
               <p>$&#65516;</p>
            </div>
            <div class="sort sort-bags__expensive" data-sort="cost-bag" data-order="desc" onclick="BagsExpensiveActive()">
               <p>$&#65514;</p>
            </div>
         </div>
      </div>

		<ul class="bags-list list-items list-items-2-container list-3-container list-items-4-container">
			<?php
				$bags = get_all_bags();
				foreach ($bags as $item): ?>
					<li id="bag<?php echo $item["id"]; ?>" class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost cost-bag">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
<!-- end bags -->

<section id="camps" class="camps">
	<div id="sorting-camps-container" class="white-bg">
		<div class="header-container">
			<div class="separation-line"></div>
			<h3 class="header text-center">camps</h3>
			<p class="subheader text-center">Our camps are easy to deploy and take up minimal space</p>
		</div>

		<div class="sort-camps">
         <div class="sort-camps__container">
            <div class="sort sort-camps__cheap" data-sort="cost-camp" data-order="asc" onclick="CampsСheapActive()">
               <p>$&#65516;</p>
            </div>
            <div class="sort sort-camps__expensive" data-sort="cost-camp" data-order="desc" onclick="CampsExpensiveActive()">
               <p>$&#65514;</p>
            </div>
         </div>
      </div>

		<ul class="camps-list list-items list-items-2-container">
			<?php
				$camps = get_all_camps();
				foreach ($camps as $item): ?>
					<li id="camp<?php echo $item["id"]; ?>" class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost cost-camp">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
<!-- end camps -->

<section id="cameras" class="cameras">
	<div id="sorting-cameras-container" class="white-bg">
		<div class="header-container">
			<div class="separation-line"></div>
			<h3 class="header text-center">cameras & tripods</h3>
			<p class="subheader text-center">Professional cameras for the best moments of travel</p>
		</div>

		<div class="sort-cameras">
         <div class="sort-cameras__container">
            <div class="sort sort-cameras__cheap" data-sort="cost-camera" data-order="asc" onclick="CamerasСheapActive()">
               <p>$&#65516;</p>
            </div>
            <div class="sort sort-cameras__expensive" data-sort="cost-camera" data-order="desc" onclick="CamerasExpensiveActive()">
               <p>$&#65514;</p>
            </div>
         </div>
      </div>

		<ul class="cameras-list list-items list-items-2-container">
			<?php
				$cameras = get_all_cameras();
				foreach ($cameras as $item): ?>
					<li id="camera<?php echo $item["id"]; ?>" class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost cost-camera">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
<!-- end cameras -->

<section id="lenses" class="lenses">
	<div id="sorting-lenses-container" class="white-bg">
		<div class="header-container">
			<div class="separation-line"></div>
			<h3 class="header text-center">camera lenses<h3>
			<p class="subheader text-center">Lenses are an important part of cameras, they allow you to get the best photo quality</p>
		</div>

		<div class="sort-lenses">
         <div class="sort-lenses__container">
            <div class="sort sort-lenses__cheap" data-sort="cost-lense" data-order="asc" onclick="LensesСheapActive()">
               <p>$&#65516;</p>
            </div>
            <div class="sort sort-lenses__expensive" data-sort="cost-lense" data-order="desc" onclick="LensesExpensiveActive()">
               <p>$&#65514;</p>
            </div>
         </div>
      </div>

		<ul class="lenses-list list-items list-items-1-container">
			<?php
				$lenses = get_all_lenses();
				foreach ($lenses as $item): ?>
					<li id="lense<?php echo $item["id"]; ?>" class="list-items__item">
						<picture><source srcset="<?php echo $item["links_webp"]; ?>" type="image/webp"><img class="list-items__image" src="<?php echo $item["links_png"]; ?>" alt="<?php echo $item["descs"]; ?>"></picture>
						<p class="list-items__description"><?php echo $item["descs"]; ?></p>
						<div class="list-items__cost-box">
							<p class="list-items__cost cost-lense">$<?php echo $item["costs"]; ?>.00</p>
							<p class="list-items__icon"><i class="fas fa-cart-plus"></i></p>
						</div>
					</li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
<!-- end lenses -->
<!-- end content items -->