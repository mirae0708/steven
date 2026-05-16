---
source: github
collected: 2026-05-12 10:02
category: Artificial_Intelligence/LLM
stars: 337
language: TypeScript

---

# haydenbleasel/files-sdk

⭐ **337 stars**
🔤 **TypeScript**


> A unified storage SDK for object and blob backends. One small, honest API. Web-standards I/O.

## Links
- 🔗 [Original](https://github.com/haydenbleasel/files-sdk)

## Key Takeaways

**a) What it does** — `files-sdk` is a unified TypeScript SDK providing a single, provider-agnostic API over object/blob storage backends (S3, GCS, Azure Blob, Cloudflare R2, Vercel Blob, MinIO, local filesystem, Dropbox, etc.). It wraps diverse storage services behind a small set of web-standard operations (`upload`, `download`, `head`, `exists`, `delete`, `copy`, `list`, `url`, `signedUploadUrl`) so that switching providers requires only changing the adapter import.

**b) Key features**
- **One API across providers** — Same operation signatures on S3, GCS, Azure, R2, Vercel Blob, local FS, and consumer file services.
- **Web-standards I/O** — Bodies use standard types (`Blob`, `File`, `ReadableStream`, `Uint8Array`, `ArrayBuffer`, `string`) — no provider-specific types leak into application code.
- **Escape hatch (`files.raw`)** — Every adapter exposes the native client for provider-specific functionality when needed.
- **Tree-shakeable** — Each adapter is a separate entry point; bundlers include only what's imported.
- **File handles** — `files.file(key)` returns a key-scoped handle for repeated operations on the same object.
- **AI SDK integrations** — Ready-made tool wrappers for Vercel AI SDK, OpenAI Responses/Agents SDK, and Anthropic Claude Agent SDK, letting LLMs browse, read, and optionally mutate storage through the same unified API.
- **MIT licensed.**

**c) Use cases**
- Building applications that need blob/file storage without vendor lock-in to a specific provider.
- Migrating between storage backends (e.g., S3 → R2, or cloud → local) with minimal code changes.
- Serverless/edge deployments where different providers may be optimal per environment.
- AI agent applications where LLMs need the ability to read, write, and manage files across storage backends through standard tool interfaces.

**d) Hermes relevance** — As an AI agent framework that interacts with files and storage, Hermes can leverage `files-sdk` to gain a unified, provider-agnostic way to access and manage remote blob storage. The SDK's AI tool wrappers (especially the Claude Agent SDK integration) provide a ready-made pattern for granting LLM agents controlled file system/bucket access with approval-gating defaults. The web-standards I/O model aligns with Hermes's own file-handling patterns, making this a natural fit for adding remote storage capabilities to agent workflows.

---
_Automatically collected by Hermes Tech Brain Sync_
