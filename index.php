<?php

include_once 'includes/main.php';

echo_bootstrap(<<<HTML
  <div id="social-bar">
    <ul>
      <li>Follow Us</li>
      <li><a href="https://www.facebook.com/Wake-Riderz-1714558198760355/" data-tip="bottom" data-original-title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
      <li><a href="https://twitter.com/home?status=Check%20out%20Wake%20Riderz!%20Lake%20Austin%20Boat%20Rentals!%20http%3A//www.wakeriderz.com" data-tip="bottom" data-original-title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
      <li><a href="https://plus.google.com/share?url=http%3A//www.wakeriderz.com/lakeaustinboatrentals" data-tip="bottom" data-original-title="Google+" target="_blank"><i class="fa fa-google-plus"></i></a></li>
      <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A//www.wakeriderz.com&amp;title=lake%20austin%20boat%20rentals&amp;summary=Wake%20Riderz%20provides%20boat%20rentals%20in%20lake%20austin,%20lake%20travis%20and%20lago%20vista.&amp;source=" data-tip="bottom" data-original-title="LinkedIn" target="_blank"><i class="fa fa-linkedin"></i></a></li>
    </ul>
  </div>
  <nav>
    <div id="logo">
      <a href="/"><img src="/dist/files/logo.jpg" alt="Logo"></a>
    </div>
    <div id="header-links">
      <div id="header-links-inner">
        <ul class="menu">
          <li class="current_page_item"><a href="http://wakeriderz.com/">Home</a></li>
          <li class="page_item page-item-91"><a href="http://wakeriderz.com/contacts/">Contacts</a></li>
          <li class="page_item page-item-102"><a href="http://wakeriderz.com/resources/">Resources</a></li>
          <li class="page_item page-item-2"><a href="http://wakeriderz.com/lakeaustinboatrentals/">Services</a></li>
        </ul>
      </div>
    </div>
  </nav>
HTML
);