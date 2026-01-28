# help-center-content

Welcome to the [VTEX Help Center](https://help.vtex.com/) content repository!

## Table of Contents

- [In this repository](#in-this-repository)
- [Managing Help Center documentation](#managing-help-center-documentation)
  - [Publishing a new article](#publishing-a-new-article)
    - [Adding images](#adding-images)
    - [Adding a download file to the article](#adding-a-download-file-to-the-article)
    - [Filling in front matter information](#filling-in-front-matter-information)
  - [Updating a published article](#updating-a-published-article)
  - [Creating a redirect](#creating-a-redirect)
  - [Settings for specific content](#settings-for-specific-content)
- [GitHub Actions](#github-actions)
  - [Navigation Generation](#navigation-generation)
  - [Broken Page Finder](#broken-page-finder)
  - [Changelog Generation](#changelog-generation)
  - [Retrieve Docs from Contentful](#retrieve-docs-from-contentful)

## In this repository

You will find the following folders in this repository:

- **.github/workflows**: Workflows needed to migrate content from Contentful to this repository.
- **docs-utils**: Scripts used to perform adjustments to documentation imported from Contentful.
- **docs**: Documentation files. Contains subfolders corresponding to each locale (PT, EN, and ES), and within each of them, the following categories:

  - **announcements**: Announcement markdown files.
  - **faq**: FAQ markdown files.
  - **known-issues**: Known issues markdown files.
  - **tracks**: Tracks markdown files.
  - **troubleshooting**: Troubleshooting markdown files.
  - **tutorials**: Tutorials markdown files.
- **readme-images**: Images used in the README.md file.

## Managing Help Center documentation

In this document we will address the following topics related to the Help Center Portal:

- [Publishing new articles](#publishing-a-new-article)
- [Updating published articles](#updating-a-published-article)
- [Creating redirects](#creating-a-redirect)
- [Settings for specific content](#settings-for-specific-content)

### Publishing a new article

Follow the steps below to create a new article in the Help Center:

1. Open a branch in the [help-center-content](https://github.com/vtexdocs/help-center-content) repository.
2. Add a new file in the [desired folder](#in-this-repository), and write the content of the article according to the [Template --> TBD](https://github.com/vtexdocs/dev-portal-content/blob/main/templates/guide_template.md).
    > ⚠️ Make sure the file name (slug) is unique and an exact copy of the article slug.

3. [Add images](#adding-an-image-to-the-article) to the article, if necessary.
3. Fill in the [front matter](#filling-in-front-matter-information) of the article.
4. Submit your PR for review on GitHub.
5. Send the PR link in the `#dev-portal-pr` Slack channel for review by another technical writer.
6. After review, register the PR link in the `Document Link` field of the JIRA task and request the translation of the content, moving the card status to `Translating`.
7. Once the translations are complete, check the contents of the two files created by the localization team in the folders corresponding to each locale (EN and ES) of the repository. If the article in the PT version contains images, repeat this [procedure](#adding-an-image-to-the-article) to insert them into the EN and ES versions.
8. Approve the PR and apply the merge to publish the article.
9. Follow the [instructions](#https://github.com/vtexdocs/helpcenter/blob/main/README.md#navigation-sidebar) available in the [README](https://github.com/vtexdocs/helpcenter/blob/main/README.md) file of the `help-center` repository to update the portal navigation sidebar, adding the link for the newly published article.

    >ℹ️ The [help-center-content](https://github.com/vtexdocs/help-center-content) repository only stores our documentation, it is not automatically synched to be rendered in the Help Center - yet. For now, when a new content is added to it, it is just included in the desired folder. For it to appear in the Help Center Portal, our Tech Writing team leaders must run the portal's build.

#### Adding images

If you need to use images to help the user understand procedures more easily, follow the steps below to insert them into an article:

1. Access the folder where the article is located within the repository.
2. Save the image inside this folder, naming it according to the markdown file name and slug. For instance, if the article file name and slug is "how-to-create-a-catalog-category", the image should be saved as `how-to-create-a-catalog-category_1.png`.

    > ℹ️ If the article has more than one image, they must be named in numerical sequence. For instance, `how-to-create-a-catalog-category_1.png`, `how-to-create-a-catalog-category_2.png`.

3. Open the article and add `![{{Image name}}](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/{{locale}}/{{path}}/{{image-slug-name}})`, replacing:

  - `{{Image name}}` by an image identification name of your choice
  - `{{path}}` by the path where you saved the image
  - `{{image-slug-name}}` by the image slug name

Example: `![Instalação B2B Suite - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/B2B/Overview/b2b-suite-visao-geral_1.gif)`.

   >⚠️ After localization completes the translations, you must repeat this same process in the respective article folders for the EN and ES versions, modifying the information according to the specific language.

##### Maximum image size

In some situations, it may be necessary to insert images, GIFs, or videos into an article to help the user understand complex procedures.

To ensure efficient page load times and adhere to [GitHub space storage best practices](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), we set a maximum file size limit of **50 MB**.

If you need to use an illustration that exceeds this value, you can compress it using tools such as [ILoveImg](https://www.iloveimg.com/pt) or [FreeConvert](https://www.freeconvert.com/pt), to reduce the final file size. Additionally, you can also adjust the article content to allow the illustration to be split into smaller file sizes.

> ⚠️ Whenever you use an image compressor, check the visual quality of the file after compression.

#### Adding a download file to the article

If you wish to provide a downloadable file directly within your article (such a table or PDF file), you must attach it, creating a reference as follows:

1. Open a branch in the [help-portal-content](https://github.com/vtexdocs/help-center-content) repository.
2. Copy the file you want to make available for download to the same directory as the article where it will be inserted. For instance, to attach a spreadsheet within an article located at `docs/pt/tutorials/Payments/Payment Settings/list-of-payment-providers-by-country.md`, you need to save it in the directory `docs/pt/tutorials/Payments/Payment Settings.`
3. Go to the [branches page](https://github.com/vtexdocs/help-center-content/branches), and under **Your branches** section, click on the name of the branch you created.

![Branches_page](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-1.png)

4. Locate the folder where you saved the file and click on it.

![File_folder](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-2.png)

5. Right-click on the **Raw** option and select **Copy link address (Copiar endereço do link)**.

![Raw_link_information](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-3.png)

> ℹ️ Address link example: `https://github.com/vtexdocs/help-center-content/raw/main/docs/pt/tutorials/Payments/Payment%20Settings/Payment%20Provider%20x%20Countries%20-%20August%202024.xlsx`

6. Access the article where you want to add the file and insert the link obtained in the previous step in the desired location.

![Add_link_in_article](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-4.png)

7. Return to the main branch by clicking **Main** in the **Branches** tab.

![Main branch](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-5.png)

8. Submit your PR for review.

#### Filling in front matter information

The front matter is the table with metadata about the article you are creating. It contains the following fields:

- **title:** Article title with single quotes. E.g. 'Adding SKU specifications or fields'
- **status:** Indicates whether an article is active (`PUBLISHED`) or unavailable (`ARCHIVED`) on the Help Center Portal.
- **createdAt:** Creation date (UTC) and time in this format `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}.{mmm}Z`.
- **updatedAt:** Update date (UTC) in this format `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}.{mmm}Z`.
- **publishedAt:** Most recent publication date (UTC) in this format `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}.{mmm}Z`.
- **firstPublishedAt:** First publication date (UTC) in this format `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}.{mmm}Z`.
- **contentType:** Content type (e.g., `tutorial`, `updates`, `trackArticle`, `frequentlyAskedQuestion`, `knownIssue`).
- **productTeam:** Name of the module to which the article is related.
- **slugEN:** Article reference slug in the English version. This field must always be filled in with the same value (slug in EN), even in PT and ES version files. This is required for proper locale switching on Help Center.
- **locale:** Article language (`pt`, `en`, or `es`).
- **hidden**: (Optional) Identifies whether the article should remain hidden and be accessed only through its link (`true` or `false`).

In addition to the standard fields for all articles, check the specific fields for each type of article below:

##### Announcements fields

- **announcementSynopsisEN:** Announcement Synopsis information. The name of this parameter varies according to the language of the article, for the Portuguese version it must be used `announcementSynopsisPT`, and for the Spanish version use `announcementSynopsisES`.
- **author:** Technical writer ID in Contentful.

##### Known issue fields

- **tag**: Name of the module to which the known issue is related (e.g., `B2B`, `Catalog`, `Identity`, etc).
- **kiStatus**: Known issue status (e.g., `Backlog`,`Fixed`, `No Fix`, `Open`).
- **internalReference**: Known issue Zendesk ID.

##### Track fields

- **trackId**: Track article identification.
- **trackSlugEN**: Track slug identification.

##### Troubleshooting fields

- **tags**: Troubleshooting tag information. This field must be filled in with keywords related to the problem, separated by a comma, the first letter in capital letters, and in the same location as the article (e.g. Catalog, Index, Product, SKU, Trade policy).

### Updating a published article

To update the content of an article that is already published on the Help Center Portal, follow the steps below:

1. Open a branch in the [help-portal-content](https://github.com/vtexdocs/help-center-content) repository.
2. Access and update the **PT version** of the desired file in the repository.
3. Access and update the files in the EN and ES versions with the same information (in Portuguese) inserted in the PT file.
3. Submit your PR for review.
4. Register the PR link in the `Document Link` field of the JIRA task and request the translation of the content (EN and ES versions), moving the card status to `Translating`.
6. After the translation is complete, check the content translated by the localization team in the EN and ES version files.
7. Approve the PR and apply the merge to publish the article.

### Creating a redirect

If an article published on Help Center must be archived and another article will be used in its place, it is necessary to create a redirect to allow users to access the new content.

To create a redirect, follow the [instructions](#https://github.com/vtexdocs/helpcenter/blob/main/README.md#redirects) available in the [README](https://github.com/vtexdocs/helpcenter/blob/main/README.md) file of the `help-center` repository.

### Settings for specific content

See in this section some specific settings that must be applied according to the type of article.

#### Track articles: Title information

Track articles' titles must contain the reference numbers in the navigation sidebar, but not in the title of the article page.

![image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-track-illustration-6.png)

## GitHub Actions

This repository uses GitHub Actions for automating various tasks related to content management, navigation generation, and documentation maintenance. Below are details about each workflow.

### Navigation Generation

**Source**: `.github/workflows/nav-generation.yml`

**Summary**: This workflow automatically generates the navigation structure for the VTEX Help Center by processing all markdown files in the repository. It creates a comprehensive `navigation.json` file that contains the hierarchical structure of all documentation, organized by categories, subcategories, and individual articles across all supported languages (PT, EN, ES).

**Trigger Conditions**:
- Pull request events: `opened`, `synchronize`, `reopened`
- Automatically runs when PRs are created or updated

**Process Overview**:
1. **Content Scanning**: Processes 10,000+ markdown files across all locales and content types
2. **CLI Download**: Uses multiple fallback strategies to obtain the navigation generator CLI:
   - Primary: `npx github:vtexdocs/vtexhelp-nav-cli#main` (GitHub tarball)
   - Fallback 1: `npx git+https://github.com/vtexdocs/vtexhelp-nav-cli.git#main`
   - Fallback 2: Direct git clone and local build
   - Fallback 3: Curl download + unzip (network resilience)
3. **Navigation Generation**: Creates structured JSON with:
   - 600+ categories and subcategories
   - 3,400+ individual documents
   - Full multilingual support (PT/EN/ES)
   - Cross-language document linking
4. **File Commit**: Automatically commits the generated `public/navigation.json` back to the PR branch
5. **Artifacts**: Uploads the navigation file as a downloadable artifact
6. **Reporting**: Provides detailed job summaries with statistics and file information

**Output**:
- **File**: `public/navigation.json` (~58,000+ lines, ~2.6MB)
- **Structure**: Hierarchical JSON with navbar sections, categories, subcategories, and articles
- **Metadata**: Includes titles, slugs, publication status, and cross-references for all languages
- **Coverage**: 100% language coverage for all supported locales

**Performance**:
- **Generation Time**: ~5-6 seconds for full repository scan
- **Total Workflow Time**: ~2-3 minutes including setup and commit
- **Network Resilience**: Multiple fallback mechanisms handle GitHub runner limitations

**Key Features**:
- **Robust Error Handling**: Multiple download strategies ensure reliable CLI access
- **Git Integration**: Handles detached HEAD states and automatically commits results
- **Validation**: Performs content validation and reports duplicate slugs or issues
- **Incremental Updates**: Only commits when navigation content actually changes
- **Artifact Preservation**: Generated files are available for download even if commit fails

**Dependencies**:
- actions/checkout@v4
  - Function: Checks out the PR branch for processing
- actions/setup-node@v4
  - Function: Sets up Node.js environment (version 20)
- actions/upload-artifact@v4
  - Function: Uploads generated navigation.json as downloadable artifact
- vtexdocs/vtexhelp-nav-cli (external)
  - Function: CLI tool that processes markdown files and generates navigation structure

**Usage Notes**:
- Automatically triggered on all PR activity - no manual intervention required
- Generated navigation.json is committed directly to the PR branch
- Workflow includes comprehensive logging for debugging and monitoring
- Safe for concurrent execution with other workflows due to branch-specific concurrency controls

### Broken Page Finder

**Source**: `.github/workflows/broken-page-finder.yml`

**Summary**: This workflow leverages the `vtexdocs/devportal-docsearch-action` to scrape files from the Help Center. Instead of indexing them, it logs errors to identify broken or problematic pages. It uses a specific branch version of the docsearch action that has been stripped down to only log errors.

**Trigger Conditions**:
- Manual trigger (workflow_dispatch)
- Configurable inputs:
  - directory (default: 'docs')
  - batch_size (default: 500)
  - sleep_time (default: 0)
  - files (optional comma-separated list of specific files to process)

**Process Overview**:
1. **File Discovery**: Finds all markdown files in the specified directory and subdirectories
2. **Batch Processing**: Splits files into manageable batches to avoid rate limits
3. **Error Detection**: Uses the specialized docsearch action to identify broken pages
4. **Error Logging**: Records errors to a spreadsheet for analysis

**Key Features**:
- **Batch Processing**: Handles large numbers of files by processing them in configurable batches
- **Flexible Input**: Can process all files in a directory or specific files via comma-separated list
- **Rate Limit Management**: Configurable sleep time between batches
- **Error Focus**: Specifically designed to identify and log problematic pages

**Dependencies**:
- actions/checkout@v4
  - Function: Checks out the repository code
- vtexdocs/devportal-docsearch-action@broken-page-finder
  - Function: Specialized version that logs errors instead of indexing content

### Changelog Generation

**Source**: `.github/workflows/changelog.yml`

**Summary**: This workflow automatically generates changelogs and manages version tags for the repository. It uses standard-version to create semantic versioning and generates changelog entries based on commit messages.

**Trigger Conditions**:
- Push to main branch
- Pull request closed on main branch (only when merged)

**Process Overview**:
1. **Version Detection**: Finds the next available version tag and bumps if needed
2. **Changelog Generation**: Uses standard-version to generate changelog entries
3. **Tag Creation**: Creates and pushes version tags
4. **Cleanup**: Handles tag cleanup on failure

**Key Features**:
- **Automatic Versioning**: Automatically determines and increments version numbers
- **Semantic Versioning**: Follows semantic versioning principles
- **Changelog Generation**: Creates comprehensive changelog entries
- **Failure Recovery**: Cleans up tags if the process fails
- **Git Integration**: Automatically commits and pushes changes

**Dependencies**:
- actions/checkout@v4
  - Function: Checks out the repository with full history
- actions/setup-node@v4
  - Function: Sets up Node.js environment (version 20)
- standard-version (npm package)
  - Function: Generates changelogs and manages versioning

### Retrieve Docs from Contentful

**Source**: `.github/workflows/retrieve-docs.yml`

**Summary**: This workflow fetches documentation from Contentful and updates the repository content, creating a pull request with the changes.

**Trigger Conditions**:
- Manual trigger (workflow_dispatch)

**Dependencies**:
- actions/checkout@v3
  - Function: Checks out the repository code
- actions/setup-node@v2
  - Function: Sets up Node.js environment (version 18)
- peter-evans/create-pull-request@v3
  - Function: Creates a pull request with the updated documentation
