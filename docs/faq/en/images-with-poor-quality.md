---
title: Why are the images in my store being displayed with poor quality?
id: 5LxgbF8S2cIUOCaCO00GcK
status: PUBLISHED
createdAt: 2018-02-22T19:10:35.567Z
updatedAt: 2019-12-31T14:25:33.320Z
publishedAt: 2019-12-31T14:25:33.320Z
firstPublishedAt: 2018-02-22T22:03:18.347Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slug: images-with-poor-quality
legacySlug: images-with-poor-quality
---

If the problem has been identified when you visited your store using __Google Chrome__, the answer is probably the compression format used by that browser to display images. 

Known as [__WebP__](/en/tutorial/how-the-automatic-compacting-of-images-works), it was created by Google to decrease loading times of websites and avoid crashes. To do this, it uses a process that can compress the image in two ways:

- __Lossy:__ compresses images with quality reduction.
- __Lossless:__ compresses image without reducing quality.

In VTEX, the system that renders the images on the screen converts the files into __WebP__ automatically and in real time, provided that a compatible browser is being used. For _.jpg_ files, the process used is __lossy__. For the _.png_, we apply the __lossless__ process. When the browser does not recognize __WebP__, the images are rendered in their original format.

If you use images with the _.jpg_ extension on your web site, it's normal for them to experience some loss of quality. However, this difference should not be very sensitive. To fix it, you should upload the files again, but with a slightly higher resolution.

Now if it's critical for your store to display images with the highest quality, we recommend that you use the _.png_ format. They rely on __lossless__ automatic compression, which retains the quality of the original file.

### Related articles
- [How the automatic compacting of images works for the WebP format](/en/tutorial/how-the-automatic-compacting-of-images-works)
