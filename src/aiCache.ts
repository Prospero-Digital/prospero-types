import { z } from 'zod';

const aiUrlContext = z.object({
  id: z.string(),
  url: z
    .string()
    .describe('The URL or endpoint associated with the cached data'),
  context: z
    .string()
    .describe(
      'The contextual information or metadata related to the URL, used for AI processing'
    ),
  expireAt: z
    .date()
    .describe(
      'The date and time when this cache entry should expire and be invalidated'
    ),
});

export type AiUrlContext = z.infer<typeof aiUrlContext>;
