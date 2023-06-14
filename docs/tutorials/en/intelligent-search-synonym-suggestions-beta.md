---
title: 'Intelligent Search synonym suggestions (Beta)'
id: 18A9JTCPrMsHWpFntNoKEr
status: PUBLISHED
createdAt: 2023-06-01T20:18:10.087Z
updatedAt: 2023-06-01T20:44:40.993Z
publishedAt: 2023-06-01T20:44:40.993Z
firstPublishedAt: 2023-06-01T20:33:35.148Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: intelligent-search-synonym-suggestions-beta
locale: en
legacySlug: intelligent-search-synonym-suggestions-beta
subcategory: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
  <p>This feature is in closed beta, which means that only specific customers can access it now. If you want to implement it in the future, please contact <a href="https://support.vtex.com/hc/pt-br/requests">our support</a>.</p>
  <p>For selected customers, the functionality is available for free use in the VTEX Admin during its Beta period, or until decided by VTEX. Extra fees may apply in the future.</p>
</div>

The [Synonyms](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV) feature of [VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) allows you to add words, or similar sentences, as synonyms for customer search terms, increasing the chance of successful searches.

The **Synonyms** page in the VTEX Admin now provides intelligent suggestions of terms for approval and manual configuration of synonyms. The platform leverages artificial intelligence to suggest synonyms based on customer search behavior in your store.

VTEX Intelligent Search achieves this by counting how many times in the last 30 days  customers have searched for a term that returned few or no search results and replaced the original term with an alternative one.

> _Example:_ Suppose five customers typed `facial soap` in their search but later changed it to `face soap`. The system records this behavior, and the most rewritten terms will be displayed as suggested synonyms.

You can review the suggestions and choose one of three actions: decline, edit, or approve. See the steps in the next section.

![syn-sug-en](https://images.ctfassets.net/alneenqid6w5/3bDrkDw6O6d8mHvvBKwWGm/7bb4dc43cc0ef0c5cf439d57f1ef7d1b/syn-sug-en.png)

## Reviewing suggestions

Follow these instructions to view the synonym suggestions and choose whether to decline, edit, or approve them:

1. In the VTEX Admin, go to **Storefront**, or type **Storefront** in the search bar at the top of the page.
2. In **Intelligent Search**, click **Synonyms**.
    If there are suggestions for you to review, a modal will pop up, indicating the number of generated suggestions.
3. Click `Review` to continue. A modal will display the first synonym suggestion. Each suggestion shows the searched term, the proposed synonym, and the number of times customers have used the second term to replace the original term in the last 30 days.
4. To review the suggestion, choose one of the following actions:
    * <i class="fas fa-times-circle"></i> **Decline**: Rejects the proposed suggestion.
    * <i class="fas fa-pencil"></i> **Edit**: Changes the suggested synonym configuration fields. After editing, you need to click <i class="fas fa-check-circle"></i> to save. To learn more about the available fields, read the[ Configuring Synonyms](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL) article.
    * <i class="fas fa-check-circle"></i> **Approve**: Applies and saves the proposed suggestion.
5. After reviewing all suggestions, close the modal to access the list of synonyms configured in your store.

<div class="alert alert-error">
  <p>Once an action is performed, it cannot be undone, as the next available suggestion will be displayed immediately.</p>
</div>

## Learn more

* [Synonyms](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV)
* [Configuring Synonyms](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL)
* [VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)
