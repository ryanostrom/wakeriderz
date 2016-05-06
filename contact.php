<?php

include_once 'includes/main.php';

template_layout(<<<HTML
	<div class="container narrow">
		<h3>Contacts</h3>

		<div class="grid narrow">
			<div class="grid-2">
				<h4>Jesse Gomez</h4>
				<div class="paragraph">512-809-7742</div>
			</div>

			<div class="grid-2">
				<h4>Kyle Greenfield</h4>
				<div class="paragraph">512-710-9253</div>
			</div>
		</div>

		<h3>Business Hours</h3>
		<div class="paragraph">8:00am–8:00pm</div>

		<h3>Address</h3>
		<div class="paragraph">1600 Scenic Drive</div>
		<div class="paragraph">Austin, TX 78703</div>

		<h3>Location</h3>
		<section><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.89616219749!2d-97.78574214945732!3d30.29701758170181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644caaa97262513%3A0xa671cd0a82ad26af!2s1600+Scenic+Dr%2C+Austin%2C+TX+78703!5e0!3m2!1sen!2sus!4v1460739316415" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe></section>

	</div>
HTML
);