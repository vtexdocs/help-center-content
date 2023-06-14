---
title: 'How to integrate the Navegg solution'
id: frequentlyAskedQuestions_590
status: DRAFT
createdAt: 2017-04-27T22:33:23.709Z
updatedAt: 2019-12-31T14:25:17.464Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:23.530Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slug: how-to-integrate-the-navegg-solution
legacySlug: 
---

Navegg is a company of the Buscapé group totally devoted to the online audience segment. Through analysis of browsing behaviors, its solutions create audience segments that are prepared to receive customized contents and advertising anywhere on the web. These segments include social and demographic groups, purchase intention, and content interest.

Prior to integrating Navegg to the VTEX platform, you must set up Google Tag Manager in accordance with the steps described in the article [Integration with Google Tag Manager](/hc/pt-br/articles/204902998 "Integration with Google Tag Manager").
Then, just enter the Navegg tag on Google Tag Manager according to the steps below:
**Attention:** entering the Navegg tag on Google Tag Manager has some peculiarities and details that must be respected for the integration to be successful. Observe the following guidance carefully.

1. You must use the entire Navegg tag, according to the example below:

`
&lt;script type="text/javascript"&gt;
var nvgId = "ID_NAVEGG";
var nvgAsync = false;
(function() {
var nvg = document.createElement('script');
nvg.id="navegg";
nvg.type = 'text/javascript';
nvg.async = nvgAsync;
nvg.src = document.location.protocol+'//tag.navdmp.com/tm'+nvgId+'.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(nvg, s);
})();
&lt;/script&gt;`

* The `ID NAVEGG` indicated on the tag is unique to your account, being informed upon your registration with Navegg. Additionally, it is always available on the settings of the control panel.

2. Go to Google Tag Manager, log in, and go to “Overview;”

3. Click on the **New tag** button and fill out the information requested on each field, according to the example below;

[![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM.png "![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)")
A rule must be created for the tag to be printed.

4. Add a rule to start printing the tag by clicking on **Add Rule**:

[![Adiciona_tag_GMT_regra](/wp-content/uploads/help-antigo/2014/02/Adiciona_tag_GMT_regra-560x459.png)](/wp-content/uploads/help-antigo/2014/02/Adiciona_tag_GMT_regra.png "![Adiciona_tag_GMT_regra](/wp-content/uploads/help-antigo/2014/02/Adiciona_tag_GMT_regra-560x459.png)")

* We suggest including the Navegg tag on all pages for the analysis to be complete.

5. Save the settings and wait for the generation of the first report, which should take place within approximately 72 hours. Prior to integrating Navegg to your VTEX e-commerce platform, you must set up Google Tag Manager in accordance with the steps described in the article [Integration with Google Tag Manager](/hc/pt-br/articles/204902998 "Integration with Google Tag Manager").
Then, just enter the Navegg tag on Google Tag Manager according to the steps below:

* NOTE: entering the Navegg tag on Google Tag Manager has some peculiarities and details that must be followed for the integration to be successful. Observe the following guidance carefully.

1. You must use the entire Navegg tag, according to the example below:

`
&lt;script type="text/javascript"&gt;
var nvgId = "ID_NAVEGG";
var nvgAsync = false;
(function() {
var nvg = document.createElement('script');
nvg.id="navegg";
nvg.type = 'text/javascript';
nvg.async = nvgAsync;
nvg.src = document.location.protocol+'//tag.navdmp.com/tm'+nvgId+'.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(nvg, s);
})();
&lt;/script&gt;`

* The ID NAVEGG indicated on the tag is unique to your account, being informed upon your registration with Navegg. Additionally, it is always available on the settings of the control panel.

2. Go to Google Tag Manager, log in, and go to “Overview;”

3. Click on the “New tag” button and fill out the information requested on each field, according to the example below;

[![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM.png "![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)")

* Attention: A rule must be created for the tag to be printed.

4. Add a rule to start printing the tag by clicking on “**Add Rule**:”

[![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM1-560x456.png)](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM1.png "![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM1-560x456.png)")

* We suggest including the Navegg Tag on all pages for the analysis to be complete.

5. Save the settings and wait for the generation of the first report, which should take place within approximately 72 hours.

