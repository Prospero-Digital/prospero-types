import * as z from 'zod';

const question = z.object({
  id: z.string().meta({ description: 'Unique identifier for the question' }),
  question: z
    .string()
    .meta({ description: 'The question text to be presented to the user' }),
  answer: z
    .string()
    .meta({ description: 'The user-provided answer to the question' })
    .optional(),
  stage: z.number().min(1).max(5).meta({
    description:
      'The stage of the research project this question is associated with (1-5)',
  }),
  questionNumber: z.number().min(1).max(8).meta({
    description:
      'The sequential number of the question within its stage (1-8)',
  }),
});

export type ResearchQuestion = z.infer<typeof question>;
export { question };
