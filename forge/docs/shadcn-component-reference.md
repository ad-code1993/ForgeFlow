# Shadcn Component Reference

## Purpose

This document defines approved shadcn/ui components, their purpose, recommended usage, anti-patterns, and TemplateForge-specific applications.

---

# Layout Components

| Component    | Use For                               | Avoid                 |
| ------------ | ------------------------------------- | --------------------- |
| Aspect Ratio | Image previews, thumbnails            | General layout        |
| Card         | Content containers, template previews | Deep nesting          |
| Resizable    | Editor panels                         | Simple page layouts   |
| Scroll Area  | Long content areas                    | Replacing page scroll |
| Separator    | Visual grouping                       | Excessive decoration  |
| Sheet        | Mobile navigation, side panels        | Large workflows       |
| Sidebar      | Application navigation                | Temporary menus       |
| Drawer       | Mobile-first workflows                | Desktop primary UI    |

---

## Aspect Ratio

Install:

```bash
pnpm dlx shadcn@latest add aspect-ratio
```

Use:

* Template thumbnails
* Resume previews

TemplateForge:

* Template gallery

---

## Card

Install:

```bash
pnpm dlx shadcn@latest add card
```

Use:

* Dashboard widgets
* Upload status
* Template previews
* Empty states

TemplateForge:

* Core UI container

---

## Resizable

Install:

```bash
pnpm dlx shadcn@latest add resizable
```

Use:

* Resume editor layout

TemplateForge:

* Left navigation
* Editor canvas
* Properties panel

---

## Scroll Area

Install:

```bash
pnpm dlx shadcn@latest add scroll-area
```

Use:

* Long lists
* Sidebar content

TemplateForge:

* Resume section list
* Template list

---

## Separator

Install:

```bash
pnpm dlx shadcn@latest add separator
```

Use:

* Section separation
* Toolbar grouping

---

## Sheet

Install:

```bash
pnpm dlx shadcn@latest add sheet
```

Use:

* Mobile sidebar
* Quick settings

---

## Sidebar

Install:

```bash
pnpm dlx shadcn@latest add sidebar
```

Use:

* Main application shell

TemplateForge:

* Dashboard
* Upload
* Templates
* Editor
* Settings

---

# Navigation Components

| Component       | Use For         | Avoid            |
| --------------- | --------------- | ---------------- |
| Breadcrumb      | Deep navigation | Main navigation  |
| Menubar         | Desktop tools   | Mobile UI        |
| Navigation Menu | Marketing sites | App shell        |
| Pagination      | Large lists     | Small datasets   |
| Tabs            | Related views   | Route navigation |
| Toggle Group    | View switching  | Main actions     |

---

## Breadcrumb

Install:

```bash
pnpm dlx shadcn@latest add breadcrumb
```

Use:

* Nested editor navigation

---

## Tabs

Install:

```bash
pnpm dlx shadcn@latest add tabs
```

Use:

* Editor modes
* Settings categories

Avoid:

* Main navigation

---

## Pagination

Install:

```bash
pnpm dlx shadcn@latest add pagination
```

Use:

* Large template libraries

---

# Form Components

| Component     | Use For              |
| ------------- | -------------------- |
| Button        | Actions              |
| Button Group  | Related actions      |
| Calendar      | Date selection       |
| Checkbox      | Multiple choice      |
| Combobox      | Searchable selection |
| Date Picker   | Date input           |
| Field         | Form composition     |
| Input         | Text input           |
| Input Group   | Combined inputs      |
| Input OTP     | Verification codes   |
| Label         | Accessible forms     |
| Native Select | Simple selects       |
| Radio Group   | Single choice        |
| Select        | Advanced selection   |
| Slider        | Numeric ranges       |
| Switch        | Toggles              |
| Textarea      | Long text            |
| Toggle        | Single state button  |

---

## Button

Install:

Built-in.

Use:

* Save
* Upload
* Continue
* Export

Avoid:

* Navigation links

---

## Calendar

Install:

```bash
pnpm dlx shadcn@latest add calendar
```

Use:

* Experience dates
* Education dates

---

## Checkbox

Install:

```bash
pnpm dlx shadcn@latest add checkbox
```

Use:

* Preferences
* Filters

---

## Combobox

Install:

```bash
pnpm dlx shadcn@latest add combobox
```

Use:

* Skill selection
* Searchable lists

---

## Date Picker

Install:

```bash
pnpm dlx shadcn@latest add date-picker
```

Use:

* Resume timeline editing

---

## Input

Install:

```bash
pnpm dlx shadcn@latest add input
```

Use:

* Name
* Email
* Search

---

## Input OTP

Install:

```bash
pnpm dlx shadcn@latest add input-otp
```

Rarely needed.

---

## Radio Group

Install:

```bash
pnpm dlx shadcn@latest add radio-group
```

Use:

* Single option selection

---

## Select

Install:

```bash
pnpm dlx shadcn@latest add select
```

Use:

* Filters
* Sort options

---

## Switch

Install:

```bash
pnpm dlx shadcn@latest add switch
```

Use:

* Settings

---

## Textarea

Install:

```bash
pnpm dlx shadcn@latest add textarea
```

Use:

* Experience descriptions
* Project descriptions

---

# Overlay Components

| Component     | Use For             |
| ------------- | ------------------- |
| Alert Dialog  | Destructive actions |
| Context Menu  | Right click menus   |
| Dialog        | Focused workflows   |
| Dropdown Menu | Secondary actions   |
| Hover Card    | Additional info     |
| Popover       | Small contextual UI |
| Tooltip       | Hints               |

---

## Alert Dialog

Install:

```bash
pnpm dlx shadcn@latest add alert-dialog
```

Use:

* Delete template
* Remove resume

---

## Dialog

Install:

```bash
pnpm dlx shadcn@latest add dialog
```

Use:

* Create template
* Rename template

---

## Dropdown Menu

Install:

```bash
pnpm dlx shadcn@latest add dropdown-menu
```

Use:

* Edit
* Duplicate
* Delete

---

## Tooltip

Install:

```bash
pnpm dlx shadcn@latest add tooltip
```

Use:

* Icon-only buttons

---

# Feedback Components

| Component | Use For             |
| --------- | ------------------- |
| Alert     | Warnings            |
| Progress  | Progress indicators |
| Skeleton  | Loading UI          |
| Sonner    | Notifications       |
| Spinner   | Loading indicators  |
| Toast     | Notifications       |

---

## Alert

Install:

```bash
pnpm dlx shadcn@latest add alert
```

Use:

* Validation warnings
* Upload errors

---

## Progress

Install:

```bash
pnpm dlx shadcn@latest add progress
```

Use:

* Upload progress
* Parsing progress

---

## Skeleton

Install:

```bash
pnpm dlx shadcn@latest add skeleton
```

Use:

* Loading states

Preferred over spinners.

---

## Sonner

Install:

```bash
pnpm dlx shadcn@latest add sonner
```

Required.

Use:

* Success messages
* Error messages

---

# Data Display Components

| Component   | Use For             |
| ----------- | ------------------- |
| Accordion   | Expandable content  |
| Avatar      | User profile        |
| Badge       | Status              |
| Carousel    | Visual galleries    |
| Chart       | Analytics           |
| Collapsible | Hidden sections     |
| Data Table  | Complex datasets    |
| Empty       | Empty states        |
| Item        | Reusable list items |
| Kbd         | Keyboard shortcuts  |
| Table       | Tabular data        |
| Typography  | Rich text styles    |

---

## Accordion

Install:

```bash
pnpm dlx shadcn@latest add accordion
```

Use:

* FAQs
* Advanced settings

---

## Avatar

Install:

```bash
pnpm dlx shadcn@latest add avatar
```

Use:

* User profile

---

## Badge

Install:

```bash
pnpm dlx shadcn@latest add badge
```

Use:

* ATS score
* Status labels

---

## Data Table

Install:

```bash
pnpm dlx shadcn@latest add data-table
```

Use:

* Template management
* Resume lists

---

## Empty

Use:

* No templates
* No resumes
* No search results

Create custom implementation.

---

## Kbd

Use:

* Keyboard shortcuts
* Command palette help

---

## Table

Install:

```bash
pnpm dlx shadcn@latest add table
```

Use:

* Structured data display

---

## Typography

Use:

* Consistent text hierarchy

Create custom primitives.

---

# Recommended Install Set For TemplateForge

```bash
pnpm dlx shadcn@latest add sidebar
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add form
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add textarea
pnpm dlx shadcn@latest add select
pnpm dlx shadcn@latest add checkbox
pnpm dlx shadcn@latest add radio-group
pnpm dlx shadcn@latest add switch
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add alert-dialog
pnpm dlx shadcn@latest add dropdown-menu
pnpm dlx shadcn@latest add sheet
pnpm dlx shadcn@latest add tabs
pnpm dlx shadcn@latest add tooltip
pnpm dlx shadcn@latest add scroll-area
pnpm dlx shadcn@latest add separator
pnpm dlx shadcn@latest add progress
pnpm dlx shadcn@latest add skeleton
pnpm dlx shadcn@latest add sonner
pnpm dlx shadcn@latest add table
pnpm dlx shadcn@latest add resizable
pnpm dlx shadcn@latest add command
```

These components cover nearly all TemplateForge requirements through the upload, editor, template management, and Gemini integration phases.
