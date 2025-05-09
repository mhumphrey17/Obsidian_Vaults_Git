---
title: "AI Guide to Algebra_S2_Vault"
aliases: ["AI README", "AI Guide", "Vault Documentation"]
tags: [meta, documentation, AI]
date_created: 2023-05-09
---

# AI Guide to the Algebra_S2_Vault

## Introduction

This document provides comprehensive instructions for AI assistants working with this Obsidian vault. It contains guidelines on vault navigation, note creation, and maintaining the established structure and conventions to ensure a consistent and valuable experience for the student.

## Vault Structure

The Algebra_S2_Vault is structured as follows:

- **📁 00_Meta**: Navigation, indexes, and documentation
  - MOC_Course.md - Map of Content for the entire course
  - Glossary.md - Key terms with brief definitions and links
  - Tags_Index.md - An overview of all tags used in the vault
  - AI_README.md - This document

- **📁 01_Atomic_Notes**: Individual concept notes organized by chapter
  - 📁 Ch01_VectorSpaces - Atomic notes for Chapter 1
  - 📁 Ch02_Determinants - Atomic notes for Chapter 2
  - ... (Additional chapters as processed)

- **📁 02_Topic_Notes**: Summary notes for topics and subtopics
  - 📁 Ch01_VectorSpaces - Topic notes for Chapter 1
  - 📁 Ch02_Determinants - Topic notes for Chapter 2
  - ... (Additional chapters as processed)

- **📁 03_Problem_Bank**: Problem sheets questions and solutions
  - 📁 PS01 - Problem Sheet 1 files
  - 📁 PS02 - Problem Sheet 2 files
  - ... (Additional problem sheets as processed)

- **📁 04_Practice_Collections**: Thematic collections of practice problems
  - 📁 ByTopic - Organized by mathematical topic
  - 📁 ByDifficulty - Organized by difficulty level

- **📁 _Templates**: Templates for creating new notes
  - Atomic_Note.md - Template for concept notes
  - Topic_Note.md - Template for topic summary notes
  - Problem.md - Template for problem notes
  - Solution.md - Template for solution notes

## Note Types and Their Purpose

### Atomic Notes
Atomic notes capture single mathematical concepts in detail. Each atomic note should focus on one specific concept, providing its definition, properties, examples, theorems, and connections to other concepts.

Key components:
- Clear definition
- Properties and characteristics
- Illustrative examples
- Related theorems or results
- Bidirectional links to related concepts
- References to practice problems

### Topic Notes
Topic notes synthesize multiple atomic concepts to provide an overview of a subject area. They serve as a "zoom out" view of related concepts and help the student understand how individual concepts fit together.

Key components:
- Overview of the topic
- List of key concepts with brief descriptions and links
- Core results and their significance
- Applications of the topic
- Common problem patterns and solution strategies
- Curated list of practice problems

### Problem Notes
Problem notes document individual problems from problem sheets, connecting them to relevant concepts and providing a structured approach to solving them.

Key components:
- Clear problem statement
- Identification of key concepts involved
- General approach to solving the problem
- Link to the solution
- References to similar problems

### Solution Notes
Solution notes provide detailed solutions to problems, highlighting key insights and potential pitfalls.

Key components:
- Link to the original problem
- Step-by-step solution process
- Key insights or techniques demonstrated
- Alternative approaches (if applicable)
- Common mistakes to avoid

## Naming Conventions

Consistent naming is crucial for effective organization and search in the vault. Follow these conventions:

### Atomic Notes
- Format: `ConceptName.md`
- Examples: `VectorSpace.md`, `LinearIndependence.md`, `RankNullityTheorem.md`

### Topic Notes
- Format: `Topic_TopicName.md`
- Examples: `Topic_VectorSpacesAndSubspaces.md`, `Topic_BasesAndDimension.md`

### Problem Notes
- Format: `PS[XX]-Q[YY].md` (XX = week number, YY = question number)
- Examples: `PS01-Q03.md`, `PS02-Q05.md`

### Solution Notes
- Format: `PS[XX]-Q[YY]-Solution.md`
- Examples: `PS01-Q03-Solution.md`, `PS02-Q05-Solution.md`

## Tagging System

Tags help organize and filter content in the vault. Use the following tagging system:

### Content Type Tags
- `#concept` - For atomic concept notes
- `#topic` - For topic summary notes
- `#problem` - For problem notes
- `#solution` - For solution notes
- `#meta` - For organizational notes

### Course Organization Tags
- `#algebra-s2` - Applied to all notes in this vault
- `#MOC` - Map of Content pages
- `#reference` - Reference materials like glossaries and indexes

### Chapter and Section Tags
- `#ch-1`, `#ch-2`, etc. - For chapter-level organization
- `#sec-1-1`, `#sec-1-2`, etc. - For section-level organization

### Problem Sheet Tags
- `#ps-1`, `#ps-2`, etc. - For problem sheet organization

### Difficulty Tags
- `#difficulty-warmup` - Basic application problems
- `#difficulty-homework` - Moderate difficulty problems
- `#difficulty-advanced` - Challenging problems

### Content-Specific Tags
- `#vector-space`, `#linear-map`, `#basis`, etc. - For specific mathematical concepts
- `#theorem`, `#definition`, `#property`, `#example` - For specific content types

## Linking Practices

Effective linking is essential for creating a well-connected second brain. Follow these linking guidelines:

- All concept mentions should be linked to their respective notes
- Problems should link to all relevant concepts they involve
- Concepts should link to illustrative problems
- Topic notes should link to all relevant atomic notes
- Use bidirectional links wherever possible

When creating links:
- Use the exact note title in the link: `[[VectorSpace]]`
- For display text different from the link: `[[VectorSpace|vector space]]`
- For section links: `[[VectorSpace#Properties]]`

## Processing New Content

### For New Chapters:

1. **Initial Analysis**:
   - Read through the chapter to identify all atomic concepts
   - Note the hierarchical structure of topics
   - Identify connections to previously processed chapters

2. **Creating Atomic Notes**:
   - Create a separate note for each identified concept
   - Use the Atomic_Note template
   - Fill in all sections with detailed content
   - Establish links to related concepts
   - Update the knowledge graph with new entities and relationships

3. **Creating Topic Notes**:
   - After completing all atomic notes for a section or chapter
   - Use the Topic_Note template
   - Synthesize the atomic concepts into a coherent overview
   - Create a comprehensive network of links to atomic notes
   - Update the knowledge graph with topic entities and relationships

4. **Updating Navigation**:
   - Add new concepts to the Glossary
   - Add new links to the MOC_Course
   - Add new tags to the Tags_Index

### For New Problem Sheets:

1. **Initial Analysis**:
   - Read through all problems to identify key concepts involved
   - Categorize problems by difficulty and topic
   - Note connections to course content

2. **Creating Problem Notes**:
   - Create a separate note for each problem
   - Use the Problem template
   - Include the complete problem statement
   - Identify relevant concepts and create links
   - Update the knowledge graph with problem entities

3. **Creating Solution Notes**:
   - Create a separate note for each solution
   - Use the Solution template
   - Provide detailed step-by-step solutions
   - Highlight key insights and techniques
   - Update the knowledge graph with solution entities

4. **Updating Practice Collections**:
   - Add new problems to appropriate topic collections
   - Add new problems to appropriate difficulty collections
   - Create additional collections as needed

## Knowledge Graph Maintenance

The knowledge graph serves as a structured representation of the vault's content and relationships. When processing new content:

1. **Create Entities**:
   - For each new chapter, section, concept, problem, or solution
   - Include relevant observations

2. **Establish Relationships**:
   - `contains` - For hierarchical relationships (chapter contains section)
   - `prerequisite_for` - For dependency relationships between concepts
   - `covers` - For problem sheets covering specific topics
   - `uses` - For problems using specific concepts
   - `solves` - For solutions solving specific problems
   - `illustrates` - For problems illustrating specific concepts

3. **Track Processing Status**:
   - Update entity observations with processing status
   - Ensure all relationships are properly documented

## Template Usage

Always use the appropriate template for each note type to ensure consistency:

- **Atomic_Note.md**: For individual concept notes
- **Topic_Note.md**: For topic summary notes
- **Problem.md**: For problem notes
- **Solution.md**: For solution notes

Fill in all fields in the templates, especially:
- YAML frontmatter (title, aliases, tags)
- All section headers
- Links to related content

## Quality Standards

Maintain the following quality standards for all notes:

- **Accuracy**: All mathematical definitions and properties must be precise and correct
- **Completeness**: Cover all aspects of each concept thoroughly
- **Connections**: Establish rich networks of links between related notes
- **Examples**: Include clear, illustrative examples for all concepts
- **Readability**: Use clear language and proper mathematical notation
- **Structure**: Maintain consistent formatting and organization

## Special Considerations for Mathematics Content

When working with mathematical content:

- Use LaTeX for mathematical notation: `$x^2 + y^2 = r^2$`
- Clearly distinguish between definitions, theorems, and examples
- Include visual representations where helpful
- For abstract concepts, provide concrete examples
- When discussing proofs, highlight the key steps and insights
- Emphasize both theoretical understanding and practical applications

## Troubleshooting and Maintenance

Periodically review the vault for:

- Broken or missing links
- Concepts mentioned but not linked
- Concepts without example problems
- Problems without solution notes
- Incomplete YAML frontmatter
- Missing sections in notes
- Outdated or inaccurate information

When issues are found, fix them immediately to maintain the integrity and usefulness of the vault.
