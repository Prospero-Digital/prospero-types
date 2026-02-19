import * as z from 'zod';

const question = z.object({
  id: z.string().describe('Unique identifier for the question'),
  question: z
    .string()
    .describe('The question text to be presented to the user'),
  answer: z
    .string()
    .describe('The user-provided answer to the question')
    .optional(),
  stage: z.number().min(1).max(5).describe(
    'The stage of the research project this question is associated with (1-5)',
  ),
  questionNumber: z.number().min(1).max(8).describe('The sequential number of the question within its stage (1-8)'),
  tag: z.string().optional().describe(
    'A tag to categorize the question, which can be used for filtering or grouping questions.',
  ),
});

export type ResearchQuestion = z.infer<typeof question>;
export { question };
