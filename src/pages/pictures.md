---
pageTitle: Apples
navTitle: Pictures
singleImage: /img/apples.png
images:
  - apples.png
  - apples-red.png
  - apples-group.png
pageClass: pictures
---

![a red apple]({{ singleImage }})

<img src="/img/apples.png" alt="apple" />

{% for filename in images %}
![alt info goes here](/img/{{ filename }})
{% endfor %}