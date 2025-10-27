# content-portal-content

Repository containing VTEX's Content Style Guide documentation, providing comprehensive guidelines for writing clear, consistent, and effective content across all VTEX products and services.

## Table of Contents

- [In this Repository](#in-this-repository)
- [Repository Structure](#repository-structure)
- [Content Organization](#content-organization)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Localization](#localization)
- [Image Guidelines](#image-guidelines)
- [Adding Download Files](#adding-download-files)

## In this Repository

This repository contains:

- **Style Guide Documentation**: Grammar, formatting, and writing guidelines in multiple languages
- **Documentation Templates**: Reusable templates for announcements, tutorials, release notes, and more
- **Interface Copy Guidelines**: Best practices for writing UI text, labels, messages, and descriptions
- **Brand Voice Guidelines**: Tone of voice, inclusive language, and product naming conventions
- **Supporting Images**: Localized images and illustrations for documentation

## Repository Structure

```
content-portal-content/
├── docs/                    # Main documentation folder
│   ├── en/                  # English documentation
│   │   ├── documentation/   # Templates and writing guides
│   │   ├── formatting/      # Formatting guidelines
│   │   ├── grammar/         # Grammar rules and standards
│   │   ├── guides/          # Brand and style guides
│   │   └── interface-copy/  # UI writing guidelines
│   ├── es/                  # Spanish documentation (same structure)
│   └── pt/                  # Portuguese documentation (same structure)
├── images/                  # Localized images for documentation
│   ├── en/                  # English images (249 files)
│   ├── es/                  # Spanish images (191 files)
│   └── pt/                  # Portuguese images (232 files)
├── readme-images/           # Images used in this README
├── crowdin.yml              # Localization configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Content Organization

### Documentation Categories

The style guide is organized into five main categories, available in English (en), Spanish (es), and Portuguese (pt):

#### 1. **Documentation** (`docs/documentation/`)
Templates and best practices for creating different types of documentation:
- Announcement templates
- App documentation templates
- Contribution guidelines
- How-to guides
- Known issues documentation
- Onboarding guides
- Release notes
- Troubleshooting guides
- Tutorial templates

#### 2. **Formatting** (`docs/formatting/`)
Guidelines for consistent formatting:
- Computer interfaces and code formatting
- Headings and titles structure
- Lists and tables best practices

#### 3. **Grammar** (`docs/grammar/`)
Language-specific grammar rules and conventions:
- Abbreviations
- Adjectives
- Articles
- Capitalization
- Contractions
- Pronouns
- Punctuation
- Verbs

#### 4. **Guides** (`docs/guides/`)
Overarching brand and writing principles:
- Inclusive language guidelines
- Product and feature naming conventions
- Tone of voice standards
- US English standard (for English content)

#### 5. **Interface Copy** (`docs/interface-copy/`)
Specific guidelines for UI text:
- Action labels (buttons, links)
- Content labels
- Data formats
- Descriptions
- Messages (errors, success, warnings)
- Placeholder texts
- Titles and headings

## Contributing

We're so glad you're here! Thanks for being interested in contributing to the VTEX Content Style Guide.

### How to Contribute

1. Clone the repository and create a new branch for your changes
2. Make your changes following the existing structure and style
3. Test your changes to ensure all links and references work correctly
4. Submit a Pull Request with a clear description of your changes

### Contribution Guidelines

- Follow the existing documentation structure and markdown formatting
- Ensure consistency with the established tone and style
- Update images in the appropriate language-specific folder
- Keep image file sizes under 50 MB
- Use clear, descriptive file names
- Add references to any new images in the relevant documentation

## Localization

This repository uses **Crowdin** for localization management. The `crowdin.yml` file configures the translation workflow.

### Supported Languages

- **English (en)**: Primary language and source for translations
- **Spanish (es)**: Complete translation of core guidelines
- **Portuguese (pt)**: Complete translation of core guidelines

When adding new content, please ensure it's added to all language versions or flagged for translation.

## Image Guidelines

### What is the maximum image size I can use?

In some situations, it may be necessary to insert images, GIFs, or videos into an article to help the user understand complex procedures.

To ensure efficient page load times and adhere to [GitHub space storage best practices](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), we set a maximum file size limit of **50 MB**.

If you need to use an illustration that exceeds this value, you can compress it using tools such as [ILoveImg](https://www.iloveimg.com/pt) or [FreeConvert](https://www.freeconvert.com/pt), to reduce the final file size. Additionally, you can also adjust the article content to allow the illustration to be split into smaller file sizes.

> ⚠️ Whenever you use an image compressor, check the visual quality of the file after compression.

### Image Organization

Images are organized by language in the `images/` directory:
- `images/en/` - English images (249 files)
- `images/es/` - Spanish images (191 files)
- `images/pt/` - Portuguese images (232 files)

### Best Practices

- Use PNG format for screenshots and diagrams
- Use GIF format for animations and demonstrations
- Use JPG format for photographs
- Optimize images before committing
- Use descriptive file names that match the content
- Keep file sizes reasonable for web performance

## License

This project is maintained by VTEX and is intended for internal use and public reference for VTEX documentation and UX writing standards.

## Support

For questions or issues:
- Open an issue in this repository
- Contact the VTEX team
