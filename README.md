# prospero-types
A repository of schemas and type definitions of Prospero programmes, smartscripts, users, producers, and everything in-between!

## Requirements
Typescript is required when importing these type definitions.
```
npm i typescript
```
## How to use
Import the types you require. Most types are available from root:
```typescript
import type { Smartscript } from 'prospero-types';
```
Other types are available via their subfolders:
```typescript
import type { SceneType } from 'prospero-types/src/render';
import type { PoseArea } from 'prospero-types/src/genres/pose';
```
