---
pageTitle: Pictures
navTitle: Pictures
images:
  - apples.png
  - apples-red.png
  - apples-group.png
pageClass: pictures
---

{% for filename in images %}
![alt info goes here](/img/{{ filename }})
{% endfor %}