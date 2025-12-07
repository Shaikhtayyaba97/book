# Data Model: Textbook Content

This document defines the data model for the content of the "Physical AI & Humanoid Robotics Textbook". The primary data entity is a **Chapter**.

## Entity: Chapter

A Chapter is a single `.mdx` file within the Docusaurus project.

### Fields

| Field | Type | Description | Required |
|---|---|---|---|
| `title` | String | The title of the chapter, specified in the front-matter. | Yes |
| `sidebar_label` | String | The label for the chapter in the Docusaurus sidebar. | Yes |
| `theory` | Markdown | The main instructional text of the chapter. | Yes |
| `code_snippets` | Array<CodeSnippet> | A list of code snippets demonstrating concepts. | No |
| `diagrams` | Array<Diagram> | Placeholders for diagrams to be included. | No |
| `exercises` | Array<Exercise> | A list of exercises for the reader. | Yes |
| `urdu_translation` | TransBlock | The Urdu translation of the chapter content. | Yes |

### Sub-Entities

#### CodeSnippet
-   `language`: The programming language (e.g., `python`, `bash`).
-   `code`: The code to be displayed.

#### Diagram
-   `placeholder_text`: Text describing the diagram to be created.
-   `alt_text`: The alt-text for the image.

#### Exercise
-   `question`: The text of the exercise.
-   `answer`: A suggested answer or solution (optional).

#### TransBlock
-   `lang`: "ur"
-   `content`: The translated Markdown content. The structure inside this block should mirror the English content.
