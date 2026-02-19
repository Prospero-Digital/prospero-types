import * as z from 'zod';

const evidenceSession = z.object({
  id: z.string(),
  userId: z.string(),
  userName: z.string().optional(),
  data: z.string().describe('Serialized data collected during the session'),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  completed: z.boolean().describe('Whether the session was completed'),
});

/**
 * UI Variant Types
 */
const evidenceUiType = z
  .enum(['starter', 'slider', 'radio', 'checkbox', 'file', 'text', 'textarea'])
  .describe(`
  - 'starter': Initial question for a discussion.
  - 'slider': Range input (e.g., 1-10).
  - 'radio': Single choice (e.g., Yes/No).
  - 'checkbox': Multiple choice.
  - 'file': Document or photo upload.
  - 'text': Short open feedback.
  - 'textarea': Long feedback with character limits.
`);

/**
 * Flattened Options Schema
 * This is easier for LLMs to parse than a nested discriminated union.
 * We include all possible configuration fields here.
 */
const evidenceQuestionOptions = z
  .object({
    // Slider fields
    min: z.number().optional().describe('Minimum value for slider'),
    max: z.number().optional().describe('Maximum value for slider'),
    step: z
      .number()
      .optional()
      .describe('Step increment for slider (default 1)'),
    marks: z
      .array(
        z.object({
          value: z.number(),
          label: z.string(),
        })
      )
      .optional()
      .describe('Visual marks/labels for slider positions'),

    // Radio / Checkbox fields
    labels: z
      .array(z.string())
      .optional()
      .describe('Display labels for choices'),
    values: z
      .array(z.union([z.string(), z.number()]))
      .optional()
      .describe('Values corresponding to the labels'),

    // File fields
    fileType: z
      .enum(['image', 'video', 'audio', 'pdf'])
      .optional()
      .describe('Specific file type constraint'),

    // Textarea fields
    maxLength: z
      .number()
      .optional()
      .describe('Maximum character limit for textarea'),
    placeholder: z
      .string()
      .optional()
      .describe('Placeholder text for input fields'),
  })
  .describe(
    'Configuration for the UI variant. Only include fields relevant to the chosen variant.'
  );

/**
 * Individual Question Schema
 */
const evidenceQuestion = z.object({
  id: z.string().describe('Unique identifier for the question'),
  text: z.string().describe('the question label or prompt shown to the user'),
  variant: evidenceUiType,
  options: evidenceQuestionOptions.optional(),
  delta: z.number().describe('Position index (0, 1, 2...)'),
  prompt: z
    .string()
    .optional()
    .describe('AI guidance for generating this specific question content'),
});

/**
 * Metadata and Attributes
 */
const evidenceType = z.enum(['structured', 'discussion']).describe(`
  - 'structured': Multiple questions in a form.
  - 'discussion': Chat-like interface with a starter question.
`);

const evidenceAttributes = z.object({
  processing: z.record(z.string(), z.boolean().optional()),
  ready: z.record(z.string(), z.boolean().optional()),
  status: z.enum(['draft', 'active', 'archived']),
  alias: z.string().describe('A human readable pathname used for URL slugs'),
  sessionsCompleted: z
    .number()
    .describe('Total number of completed evidence collection sessions'),
  sessionsStarted: z
    .number()
    .describe('Total number of evidence collection sessions started'),
});

/**
 * Main Evidence Schema
 */
const evidence = z.object({
  id: z.string(),
  variant: evidenceType,
  attributes: evidenceAttributes,
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  userId: z.string(),
  userName: z.string().optional(),
  groupId: z.string(),
  groupName: z.string().optional(),
  producerAvatar: z.any().optional(),
  producerId: z.string(),
  producerName: z.string().optional(),
  framework: z
    .string()
    .describe('The research framework to use (e.g., Theory of Change)'),
  context: z
    .string()
    .optional()
    .describe('Background info to guide the AI question generation'),
  researchId: z.string(),
  smartscriptId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  introduction: z
    .string()
    .optional()
    .describe('Intro text shown before the question or questions'),
  prompt: z
    .string()
    .optional()
    .describe('Global AI prompt for the entire gatherer'),
  // If you are passing this schema to Vercel AI 'generateObject',
  // include the questions array here:
  questions: z.array(evidenceQuestion).optional(),
});

// Types
export type ResearchEvidence = z.infer<typeof evidence>;
export type ResearchEvidenceType = z.infer<typeof evidenceType>;
export type ResearchEvidenceQuestionItem = z.infer<typeof evidenceQuestion>;
export type ResearchEvidenceUiType = z.infer<typeof evidenceUiType>;
export type ResearchEvidenceAttributes = z.infer<typeof evidenceAttributes>;
export type ResearchEvidenceQuestionOptions = z.infer<
  typeof evidenceQuestionOptions
>;
export type ResearchEvidenceSession = z.infer<typeof evidenceSession>;

export {
  evidence,
  evidenceType,
  evidenceQuestion,
  evidenceUiType,
  evidenceAttributes,
  evidenceQuestionOptions,
  evidenceSession,
};
