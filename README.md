# help-center-content

Repository assembling VTEX's Help Center content

## In this repository

You will find the following folders in this repository:

-TBD

## Troubleshooting tags

We use tags in troubleshooting articles to make it easier for our readers to filter and find content.

When publishing a troubleshooting article, you can add up to five tags, by adding them in the `tags` frontmatter field, separated by comma. See an example below:

```
---
...
tags:  Orders, Integration, Marketplace, Amazon
...
---
```

## Contributing with Help Center Portal documentation

We're so glad you're here! Thanks for being interested.

### What is the maximum image size I can use in an article?

In some situations, it may be necessary to insert images, GIFs, or videos into an article to help the user understand complex procedures.

To ensure efficient page load times and adhere to [GitHub space storage best practices](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), we set a maximum file size limit of **50 MB**.

If you need to use an illustration that exceeds this value, you can compress it using tools such as [ILoveImg](https://www.iloveimg.com/pt) or [FreeConvert](https://www.freeconvert.com/pt), to reduce the final file size. Additionally, you can also adjust the article content to allow the illustration to be split into smaller file sizes.

> ⚠️ Whenever you use an image compressor, check the visual quality of the file after compression.

### How do I add a download file to my article?

1. Open a branch in the [help-portal-content](https://github.com/vtexdocs/help-center-content) repository.
2. Copy the file you want to make available for download to the same directory as the article where it will be inserted. For instance, to attach a spreadsheet within an article located at `docs/pt/tutorials/Payments/Payment Settings/list-of-payment-providers-by-country.md`, you need to save it in the directory `docs/pt/tutorials/Payments/Payment Settings.`
3. Go to the [branches page](https://github.com/vtexdocs/help-center-content/branches), and under **Your branches** section, click on the name of the branch you created.

![Branches_page](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/readme-images/readme-download-illustration-1.png)

4. Locate the folder where you saved the file and click on it.

![File_folder](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/readme-images/readme-download-illustration-2.png)

5. Right-click on the **Raw** option and select **Copy link address (Copiar endereço do link)**.

![Raw_link_information](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/readme-images/readme-download-illustration-3.png)

> ℹ️ Address link example: `https://github.com/vtexdocs/help-center-content/raw/main/docs/pt/tutorials/Payments/Payment%20Settings/Payment%20Provider%20x%20Countries%20-%20August%202024.xlsx`

6. Access the article where you want to add the file and insert the link obtained in the previous step in the desired location.

![Add_link_in_article](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/readme-images/readme-download-illustration-4.png)

7. Return to the main branch by clicking **Main** in the **Branches** tab.

![Main branch](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/readme-images/readme-download-illustration-5.png)

8. Submit your PR for review.

## Track articles

Track articles' titles must contain the reference numbers in the navigation, but not in the title of the article page.

![image](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/readme-images/readme-track-illustration-6.png)
