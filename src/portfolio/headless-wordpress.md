---
title: Peppergrove
order: "2"
tools:
- Wordpress
- PHP
- REST API
featured: true
thumbnail:
- src: "/v1614988656/sts/peppergrove.jpg"
  alt: Grove of peppertrees
excerpt: A Headless Wordpress Theme

---
For the past few years in the web development world, there has been this growing trend of a headless content management system. Traditionally a CMS would provide the database, a content management backend, as well as the templating code. WordPress falls in this category as an all encompassing system. A few versions back, the REST API was added to the core release. This allows a query to be made over HTTP and returned with neatly formatted JSON. Now, developers can use this JSON with any kind of templating system or static site generator that they choose. It makes it really easy to develop a React or Vue driven front-end with your data managed by a familiar system like WordPress.

I have begun rolling out a Headless WordPress setup at Cal Lutheran to replace our aging, homegrown internal database system. This old system was used to drive all sorts of data types like the Homecoming events schedule, program testimonial quotes, and lot of other public facing information that doesn’t live in our main CMS (OUCampus). WordPress was a clear choice in replacing the old system as it was something our institution was already familiar with.

We have WordPress set up as a multi-site network. Each department that will be accessing their data here will have their own site with their own user permissions. In the WP Admin area, each data type is set up as a different custom post type. Advanced Custom Fields is used to create a set of extra fields needed beyond the basic post editor. Custom taxonomies are created for each post type if a category system is needed. The headless theme I developed sets up the Admin area to only show their custom post types. This greatly simplifies the admin area for our users.

On the OUCampus side, there is a PHP script that includes a variety of functions used to call up the WordPress site for that department using the REST API. OUCampus Components (which is a fairly new feature in v10.10) are used to place the PHP function call on the public facing pages. What’s great about this too is that OU Components also you to pass in the parameters you want for the query. This then inserts the HTML needed to display the data.

This solution will work out great as more departments move over to this new system over time. The only piece of this I haven’t decided yet is what to do about Gutenberg. So far, I have decided to stay away from that yet and have enabled the Classic Editor plugin for the foreseeable future.

<a href="https://github.com/cal-lutheran-web/peppergrove" class="btn">View on GitHub</a>

---

#### WordPress Plugins Used

* [Advanced Custom Fields](https://www.advancedcustomfields.com/) - This is such a key piece of this system, and I am also happy that it stores the data in WP’s native custom fields. I don’t feel as locked down to ACF because of this.
* [ACF to REST API](http://github.com/airesvsg/acf-to-rest-api) - This injects the ACF field data into the API response.
* [Classic Editor](https://wordpress.org/plugins/classic-editor/) - Most of the data does not need the Gutenberg Block Editor, so we are sticking to the Classic Editor for now.
* [Custom Post Type UI](https://github.com/WebDevStudios/custom-post-type-ui/) - Manages the custom post types and taxonomies. This could all be done in functions.php, but every site is going to be different and making child themes each time would be too much overhead.
* [Really Simple CSV Importer](http://wordpress.org/plugins/really-simple-csv-importer/) - Used for importing data from the old database system. It’s really only needed for the initial setup for a site.
* [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) - Provides a really flexible page caching system to speed things up.