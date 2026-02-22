import * as z from 'zod';
import { report, reportSection, reportSectionOptions } from './reports';
import {
  evidence,
  evidenceQuestion,
  evidenceQuestionOptions,
} from './evidence';
import { question } from './questions';

export const attributes = z.object({
  processing: z.record(z.string(), z.boolean().optional()).describe(
    'Indicates if content for the research project document is currently being generated.',
  ),
  ready: z.record(z.string(), z.boolean().optional()).describe(
    'Indicates if the content for the research project document is ready and available.',
  ),
  evidence: z.number().optional().describe(
    'The number of evidence items associated with the research project.',
  ),
  reports: z.number().optional().describe('The number of reports associated with the research project.'),
  alias: z.string().optional().describe(
    'A cloud function generated alias using the title of the research project which is used for human readable link sharing.',
  ),
});

const research = z.object({
  id: z.string().optional(),
  attributes: attributes.optional(),
  context: z.string().describe('Background information or context for the research project.'),
  createdAt: z.date(),
  description: z.string(),
  groupId: z.string(),
  groupName: z.string().optional(),
  notes: z.string().optional(),
  producerAvatar: z.object({}).optional(), // Placeholder for MediaImage
  producerId: z.string(),
  producerName: z.string().optional(),
  researchGroupId: z.string().optional().describe(
    'The research group identifier used for sharing to specific Prospero users.',
  ),
  smartscriptIds: z.array(z.string()),
  summary: z.string().optional().describe(
    'A concise summary of the research project, highlighting key findings and insights.',
  ),
  teaser: z.string().describe(
    'A brief teaser or summary to entice readers about the research project.',
  ),
  thumbnail: z.object({}).optional(), // Placeholder for MediaImage
  title: z.string(),
  tone: z.string().describe(
    'The desired tone or style for the research report (e.g., formal, conversational, etc.).',
  ),
  updatedAt: z.date().optional(),
  userId: z.string(),
  userName: z.string().optional(),
});

export {
  report,
  reportSection,
  reportSectionOptions,
  evidence,
  evidenceQuestion,
  evidenceQuestionOptions,
  question,
};
export default research;
