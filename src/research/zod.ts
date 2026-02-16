import * as z from 'zod';
import { report } from './reports';
import { evidence } from './evidence';

export const attributes = z.object({
  alias: z.string().optional().meta({
    description:
      'An alias for the research project - used in the sharable link.',
  }),
  processing: z.boolean().optional().meta({
    description:
      'Indicates if content for the research project document is currently being generated.',
  }),
  stage: z.number().min(1).max(5).optional().meta({
    description: 'The current stage of the research project.',
  }),
});

const research = z.object({
  id: z.string().optional(),
  attributes: attributes.optional(),
  context: z.string().meta({
    description: 'Background information or context for the research project.',
  }),
  createdAt: z.date(),
  description: z.string().optional(),
  evidence: evidence.meta({
    description:
      'Evidence setup including field descriptions or starting questions for evidence gathering for the research project.',
  }),
  groupId: z.string(),
  groupName: z.string().optional(),
  notes: z.string().optional(),
  producerAvatar: z.object({}).optional(), // Placeholder for MediaImage
  producerId: z.string(),
  producerName: z.string().optional(),
  reports: report.meta({
    description:
      'Report structure including section descriptors and prompt instructions for generating the research report.',
  }),
  researchGroupId: z.string().optional().meta({
    description:
      'The research group identifier used for sharing to specific Prospero users.',
  }),
  smartscriptIds: z.array(z.string()),
  targetOutcome: z.string().meta({
    description: 'The desired outcome or goal of the research project.',
  }),
  teaser: z.string().meta({
    description:
      'A brief teaser or summary to entice readers about the research project.',
  }),
  thumbnail: z.object({}).optional(), // Placeholder for MediaImage
  title: z.string(),
  tone: z.string().meta({
    description:
      'The desired tone or style for the research report (e.g., formal, conversational, etc.).',
  }),
  updatedAt: z.date().optional(),
  userId: z.string(),
  userName: z.string().optional(),
});

export default research;
