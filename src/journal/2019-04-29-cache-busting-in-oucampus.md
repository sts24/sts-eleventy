---
id: 173
title: Cache Busting in OUCampus
date: 2019-04-29
guid: https://smithscott.net/?p=173
---
<!-- wp:paragraph -->
<p>The Cal Lutheran website runs on <a href="https://developers.google.com/speed/">Google’s Pagespeed Apache module</a> to automate certain cache settings, CSS rewriting, image compression, and a host of many other page loading performance related enhancements. Since CSS stylesheets are generally considered to be static assets on a site, they aren’t expected to change often between user visits. This is where PageSpeed’s caching and rewriting helps us with getting that critical above-the-fold CSS delivered to the browser. If a page is not yet cached by PageSpeed, it will load a javascript on the client side to analyze what CSS declarations are likely to be needed to paint the page above the fold. This chunk of CSS code is then injected in a <code>style</code> tag at the top of the page. Every subsequent reload is pulling from that same cache. This greatly helps with page performance as the first visible CSS is loaded immediately.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This works great until you need to push out a new change to a stylesheet. While the cache does have a timeout until the next refresh, there are times when you need to force out an updated stylesheet out to visitors. The first way to do this is to add an additional parameter to the filename, such as <code>styles.css?v=1</code>. The browser will see this as a new file and be force to make a request to the server for a new version. Making additional changes on that version number will continue to force new versions, however this isn’t exactly sustainable to manually update every time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>How can we automate this in OUCampus? In our main XSL file used for template transforms, usually <code>common.xsl</code> or <code>template-matches.xsl</code>, I added a template match to catch all stylesheets requested off our own domain and append that version parameter to the filename. Instead of incrementing a number as I mentioned above, it is using the current timestamp as of publish as the versioning number. e.g. <code>styles.css?v=4-29-19</code></p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<script src="https://gist.github.com/sts24/aa074b6962c383d305cd77dcf59159dc.js"></script>
<!-- /wp:html -->