import * as z from 'zod';
import { report } from './reports';
import { evidence } from './evidence';
import { question } from './questions';

export const attributes = z.object({
  processing: z.record(z.string(), z.boolean().optional()).meta({
    description:
      'Indicates if content for the research project document is currently being generated.',
  }),
  ready: z.record(z.string(), z.boolean().optional()).meta({
    description:
      'Indicates if the content for the research project document is ready and available.',
  }),
  evidence: z.number().optional().meta({
    description:
      'The number of evidence items associated with the research project.',
  }),
  reports: z.number().optional().meta({
    description: 'The number of reports associated with the research project.',
  }),
});

const research = z.object({
  id: z.string().optional(),
  attributes: attributes.optional(),
  context: z.string().meta({
    description: 'Background information or context for the research project.',
  }),
  createdAt: z.date(),
  description: z.string(),
  groupId: z.string(),
  groupName: z.string().optional(),
  notes: z.string().optional(),
  producerAvatar: z.object({}).optional(), // Placeholder for MediaImage
  producerId: z.string(),
  producerName: z.string().optional(),
  researchGroupId: z.string().optional().meta({
    description:
      'The research group identifier used for sharing to specific Prospero users.',
  }),
  smartscriptIds: z.array(z.string()),
  summary: z.string().optional().meta({
    description:
      'A concise summary of the research project, highlighting key findings and insights.',
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

export { report, evidence, question };
export default research;
