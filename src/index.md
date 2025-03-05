---
layout: layout.html
pageTitle: Home
navTitle: Home
tags: page
pageClass: home
---

## Amanda's Blog

{% for post in collections.post %}

<h2> <a href="{{ post.url }}"> {{ post.data.pageTitle | upcase }} </a> </h2>
<main class="post"></main>

{% endfor %}
