import * as z from 'zod';

const evidenceUiType = z
  .literal([
    'starter',
    'slider',
    'radio',
    'checkbox',
    'file',
    'text',
    'textarea',
  ])
  .meta({
    description: `
    - 'starter': For the initial question in a discussion evidence gatherer.
    - 'slider': For measuring things (e.g. 1-10 satisfaction, or amount of items).
    - 'radio': For single choice answers (e.g. Yes/No).
    - 'checkbox': For multiple choice.
    - 'file': If they should upload a photo or document.
    - 'text': For open feedback.
    - 'textarea': For longer open feedback with an optional character limit.
    `,
  });

// Develop a conditional schema for the 'options' field in 'evidenceQuestion' based on the value of 'variant'
// The options field should be a JSON string that can be parsed into different structures depending on the variant:
const evidenceQuestionOptions = z.discriminatedUnion('variant', [
  z.object({
    variant: z.literal('slider'),
    options: z
      .object({
        min: z.number().meta({ description: 'Minimum value for the range' }),
        max: z.number().meta({ description: 'Maximum value for the range' }),
        step: z
          .number()
          .optional()
          .meta({ description: 'Step value for the range (default is 1)' }),
        marks: z
          .array(
            z.object({
              value: z.number().meta({ description: 'Value for the mark' }),
              label: z.string().meta({ description: 'Label for the mark' }),
            })
          )
          .optional()
          .meta({ description: 'Optional marks to display on the slider' }),
      })
      .meta({
        description:
          'A JSON string representing the configuration for a slider input, including min and max values, step, and optional marks.',
      }),
  }),
  z.object({
    variant: z.union([z.literal('radio'), z.literal('checkbox')]),
    options: z
      .object({
        labels: z
          .array(z.string())
          .meta({ description: 'List of option labels to choose from' }),
        values: z.array(z.union([z.string(), z.number()])).meta({
          description: 'List of option values corresponding to the labels',
        }),
      })
      .meta({
        description:
          'A JSON string representing the options for radio or checkbox inputs, including arrays of labels and corresponding values.',
      }),
  }),
  z.object({
    variant: z.literal('file'),
    options: z
      .object({
        type: z
          .union([
            z.literal('image'),
            z.literal('video'),
            z.literal('audio'),
            z.literal('pdf'),
          ])
          .optional()
          .meta({
            description:
              'The type of file to upload, which can be "image", "video", "audio", or "pdf", and is optional to allow for any file type.',
          }),
      })
      .meta({
        description:
          'A JSON string representing the configuration for a file input, specifying the type of file to upload.',
      }),
  }),
  z.object({
    variant: z.literal('text'),
  }),
  z.object({
    variant: z.literal('starter'),
  }),
  z.object({
    variant: z.literal('textarea'),
    options: z.object({
      length: z
        .object({
          max: z.number().optional().meta({
            description: 'Maximum character limit for the text input',
          }),
        })
        .optional()
        .meta({
          description:
            'A JSON string representing the configuration for a textarea input, including an optional maximum character limit.',
        }),
    }),
  }),
]);

const stringifiedOptions = z
  .string()
  .transform((str, ctx) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      ctx.addIssue({
        code: 'custom',
        message: 'Invalid JSON string',
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .pipe(evidenceQuestionOptions);

const evidenceQuestion = z.object({
  id: z
    .string()
    .meta({ description: 'Unique identifier for the question item' }),
  text: z.string().meta({ description: 'Label for the question item field' }),
  variant: evidenceUiType,
  options: stringifiedOptions.meta({
    description: `
      A JSON string representing the configuration for the question item, which varies based on the specified UI variant.
    `,
  }),
  delta: z.number().meta({
    description:
      'The relative position of the question item within the evidence gatherer (e.g. 0 for the first question, 1 for the second, etc.).',
  }),
  prompt: z.string().optional().meta({
    description:
      'An optional prompt to help the ai generate better questions based on the specified framework and context.',
  }),
});

const evidenceType = z.literal(['structured', 'discussion']).meta({
  description: `
    - 'structured': Multiple questions presented within a form.
    - 'discussion': Open-ended discussion with a single starter question.
  `,
});

const evidenceAttributes = z.object({
  processing: z.record(z.string(), z.boolean().optional()).meta({
    description:
      'Indicates if content for the evidence gatherer is currently being generated.',
  }),
  ready: z.record(z.string(), z.boolean().optional()).meta({
    description:
      'Indicates if the content for the evidence gatherer is ready and available.',
  }),
  status: z.literal(['draft', 'active', 'archived']).meta({
    description:
      'The current status of the evidence gatherer (e.g. "draft", "active", "archived").',
  }),
});

const evidence = z.object({
  id: z.string(),
  variant: evidenceType,
  attributes: evidenceAttributes,
  createdAt: z.date(),
  updatedA: z.date().optional(),
  userId: z.string(),
  userName: z.string().optional(),
  groupId: z.string(),
  groupName: z.string().optional(),
  producerAvatar: z.object({}).optional(), // Placeholder for MediaImage
  producerId: z.string(),
  producerName: z.string().optional(),
  framework: z.string().meta({
    description:
      'A description of the framework to use for generating the evidence gathering questions and/or starter question. If not specified, the Theory of Change will be used by default.',
  }),
  context: z.string().optional().meta({
    description:
      'An overview of the evidence gathering goals, including any relevant background information or specific areas of focus to guide the generation of questions and ensure the collected evidence is aligned with the research objectives.',
  }),
  researchId: z.string().meta({
    description:
      'The identifier of the research project this evidence gatherer belongs to.',
  }),
  smartscriptId: z.string().meta({
    description:
      'The data gathering smartscript autogenerated using the items listed in this evidence gatherer.',
  }),
  title: z.string().meta({
    description:
      'The title of the evidence gatherer, e.g. "Customer Feedback".',
  }),
  description: z.string().optional().meta({
    description: 'Additional details or context about the evidence gatherer.',
  }),
  prompt: z.string().optional().meta({
    description:
      'An optional prompt to help the ai generate better questions or starter question based on the specified framework and context.',
  }),
});

export type ResearchEvidence = z.infer<typeof evidence>;
export type ResearchEvidenceType = z.infer<typeof evidenceType>;
export type ResearchEvidenceQuestionItem = z.infer<typeof evidenceQuestion>;
export type ResearchEvidenceUiType = z.infer<typeof evidenceUiType>;
export type ResearchEvidenceAttributes = z.infer<typeof evidenceAttributes>;
export type ResearchEvidenceQuestionOptions = z.infer<
  typeof evidenceQuestionOptions
>;
export {
  evidence,
  evidenceType,
  evidenceQuestion,
  evidenceUiType,
  evidenceAttributes,
  evidenceQuestionOptions,
};
