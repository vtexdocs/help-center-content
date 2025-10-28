---
title: 'Dynamic groups'
id: 51C5xzAp6Y00sK42SAGCSL
status: PUBLISHED
createdAt: 2025-09-12T17:30:05.020Z
updatedAt: 2025-10-03T14:21:49.200Z
publishedAt: 2025-10-03T14:21:49.200Z
firstPublishedAt: 2025-10-03T14:21:49.200Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: dynamic-groups
legacySlug: dynamic-groups
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

### Dynamic group and contact searches

In the contacts tab, there is a search bar. This search bar can be used to find and filter contacts that obey the rules defined in the bar. Normally, we use contact fields and some operators to make the search expression, that is:

If my group has the contact field ""Age"" and the contact field ""Gender"" and I want to know how many male contacts are over 18 years old, I can use the following expression in the search:

**Age > 18 AND (sexo = ""M"" OR sexo = ""Male"")**

Below are some of the operators that we can use in these searches:

-    AND (-and

-  obeys both rules at the same time)

-    OR (-or

-  obeys one of the rules)

-    > , >= (Greater than, greater than or equal to)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/dynamic-groups_1.png)

That is, a dynamic group is a type of group where we cannot manually add and/or remove users. All added users enter the group if they obeyed the search rule.

In case you click on the button to save your dynamic group, a pop-up will appear to choose the name of your new group.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/dynamic-groups_2.png)

In case you want to edit the name of the group, export the participating contacts, delete the group or even modify the rule for participation, the process is the same as for static groups.
