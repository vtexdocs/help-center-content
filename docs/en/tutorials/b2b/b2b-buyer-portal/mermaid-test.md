---
title: 'Mermaid test'
createdAt: '2025-02-12T10:00:00.000Z'
updatedAt: '2025-03-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: b2b-contracts
locale: en
---

## Mermaid Diagram Test

Below is a simple flowchart:

```mermaid
flowchart TB
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> A
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser: Request Page
    Browser->>Server: HTTP Request
    Server->>Browser: HTML Response
    Browser->>User: Render Page
```

## Regular Markdown Content

### Subtitle

Text Template: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

[📣 Link Example](https://help.vtex.com/)

## Bullet points

- First item
  - subtopic
- **Second (Bold)** item
- *Third (Italic)* item
- `Fourth (Code)` item

**Code Block**

```json
{
  "test": "value",
  "number": 123
}
```
