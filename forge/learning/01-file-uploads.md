# File Uploads in React & Next.js

This document explains the concepts and best practices used for handling file uploads in the ForgeFlow application, specifically focusing on the client-side uploading of `.docx` files.

## 1. Drag and Drop vs. File Input
Modern web applications often provide two ways to upload a file:
- **Standard `<input type="file">`**: A simple button that opens the system file dialog.
- **Drag & Drop Zone**: A designated area where users can drop files directly from their OS.

In our UI, we use a hidden `<input>` wrapped in a stylized `<div>` or `<label>` that acts as a dropzone. We capture React's `onDragOver`, `onDragLeave`, and `onDrop` events to manage the UI state (e.g., highlighting the dropzone) and to retrieve the `File` object from `e.dataTransfer.files[0]`.

## 2. Client-Side Processing
Because we need to extract contents from a DOCX file, we are performing this processing **client-side**.
- **Privacy & Security**: The user's resume data doesn't hit the server until they explicitly save or process it.
- **Performance**: We offload the unzip and XML parsing tasks to the user's browser, saving server resources.

## 3. The `File` Object
When a user uploads a file, the browser provides a `File` object.
- The `File` object is a specific type of `Blob` that contains metadata like `name`, `size`, and `type`.
- In our pipeline, we pass this `File` object directly to `jszip` to extract its contents without needing to convert it or send it over the network.

## 4. Error Handling & Validation
When accepting files, it's crucial to validate:
- **File Type**: We restrict uploads to `.docx` files using the `accept` attribute (`accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"`). We also check `file.name.endsWith('.docx')` in javascript just in case.
- **File Size**: Resumes should be small. We can optionally add size limits (e.g., < 5MB).

## 5. Usage in the App
The primary component for this is `docx-uploader.tsx`. It acts as a "Feature" component that coordinates the UI state and then passes the selected `File` up to its parent or directly into the parser.
