---
title: 'Boolean Video/Audio HTML Properties not being validated on Legacy CMS'
id: 2WjsLZ7vw0KO023rGQd77L
status: PUBLISHED
createdAt: 2022-03-16T19:27:06.599Z
updatedAt: 2022-11-25T22:10:23.568Z
publishedAt: 2022-11-25T22:10:23.568Z
firstPublishedAt: 2022-03-16T19:27:07.097Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: boolean-videoaudio-html-properties-not-being-validated-on-legacy-cms
locale: en
kiStatus: Backlog
internalReference: 491898
---

## Summary



If you attempt to use Video/Audio optional Attributes in the CMS HTML input box that are boolean types that do not use the "=" expression, the CMS validation will incorrectly prompt a save error and stop the user from using this kind of HTML functionality. Some examples are the attributes autoplay, controls, loop, and muted.



## Simulation


1) Go to the legacy CMS application
2) Create a new HTML template
3) Insert a valid HTML tag that contains the autoplay attribute, for example:

`<video controls loop>`
`<source src="movie.mp4" type="video/mp4">`
`<source src="movie.ogg" type="video/ogg">`
`  Your browser does not support the video tag.`
`</video>`

4) An error will be prompted to the user.




## Workaround


Use a javascript with the HTMLMediaElement.loop property instead, generating the same end effect.

