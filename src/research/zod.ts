import * as z from 'zod';
import { report } from './reports';
import { evidence } from './evidence';

const research = z.object({
  id: z.string().optional(),
  attributes: z
    .object({
      alias: z.string().optional(),
      channel: z.boolean().optional(),
      guest: z.boolean().optional(),
      group: z.boolean().optional(),
      hasShared: z.number().optional(),
      library: z.boolean().optional(),
      members: z.number().optional(),
    })
    .optional(),
  researchGroupId: z.string().optional().meta({
    description:
      'The research group identifier used for sharing to specific Prospero users.',
  }),
  coverImage: z.object({}).optional(), // Placeholder for MediaImage
  // createdAt: z.date(),
  description: z.string().optional(),
  docs: z.array(z.object({})).optional(), // Placeholder for MediaPdf[]
  groupId: z.string(),
  groupName: z.string().optional(),
  notes: z.string().optional(),
  producerId: z.string(),
  producerName: z.string().optional(),
  producerAvatar: z.object({}).optional(), // Placeholder for MediaImage
  smartscriptIds: z.array(z.string()),
  tags: z.array(z.string()).optional(),
  themeId: z.string().optional(),
  thumbnail: z.object({}).optional(), // Placeholder for MediaImage
  title: z.string(),
  userId: z.string(),
  userName: z.string().optional(),
  video: z.object({}).optional(),
  identity: z.string().meta({
    description: 'The individual or subject being researched in the project.',
  }),
  url: z.string().optional().meta({
    description:
      'URL link to contextualise the individual and/or subject of the research project.',
  }),
  targetOutcome: z.string().meta({
    description: 'The desired outcome or goal of the research project.',
  }),
  context: z.string().meta({
    description: 'Background information or context for the research project.',
  }),
  tone: z.string().optional().meta({
    description:
      'The desired tone or style for the research report (e.g., formal, conversational, etc.).',
  }),
  evidence: evidence.meta({
    description:
      'Evidence setup including field descriptions or starting questions for evidence gathering for the research project.',
  }),
  report: report.meta({
    description:
      'Report structure including section descriptors and prompt instructions for generating the research report.',
  }),
});

export default research;
