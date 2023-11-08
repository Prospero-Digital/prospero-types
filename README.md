# prospero-types

A repository of schemas and type definitions of Prospero programmes, smartscripts, users, producers, and everything in-between!

## Installation

Typescript is required when importing these type definitions.

```sh
npm i typescript
```

To install locally, first, clone this repo:

```sh
git clone git@github.com:Prospero-Digital/prospero-types.git
```

then prepare it for linking:

```sh
cd prospero-types
npm link
```

and link to it from your project:

```sh
cd ../project
npm link ../prospero-types
```

Now you can develop new types without having to commit and push to the repo :thumbsup:

## Usage

Import the types you require. Most types are available from root:

```typescript
import type { Smartscript } from 'prospero-types';
```

Other types are available via their subfolders:

```typescript
import type { SceneType } from 'prospero-types/src/render';
import type { PoseArea } from 'prospero-types/src/genres/pose';
```
