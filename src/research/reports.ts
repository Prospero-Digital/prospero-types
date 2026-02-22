import * as z from 'zod';

/**
 * Report Section Variant Types
 */
const reportSectionType = z
  .enum(['introductory', 'graph', 'followOn', 'summary'])
  .describe(`
    - 'introductory': Overview of the report and what it contains.
    - 'graph': Visual representation of numerical data sourced from evidence.
    - 'followOn': Follow-up questions for further exploration.
    - 'summary': A concise summary of findings and insights.
  `);

/**
 * Chart Data Mapping
 */
const chartAxisType = z.enum(['x', 'y']);

const chartDataMapping = z.object({
  evidenceId: z
    .string()
    .describe('ID of the specific evidence document'),
  questionId: z
    .string()
    .describe('The ID of the question/field to map'),
  axis: chartAxisType,
  autoAxis: z
    .enum(['time', 'frequency', 'sum', 'average'])
    .describe('Applied to the axis NOT defined by the questionId'),
});

/**
 * Section Options Schema
 */
const reportSectionOptions = z
  .object({
    // Graph/Chart specific fields
    chartType: z.enum(['bar', 'pie', 'line', 'scatter']).optional(),
    mappings: z.array(chartDataMapping).optional(),
    
    // Introductory / Summary fields
    showTableOfContents: z.boolean().optional(),
    
    // FollowOn fields
    maxQuestions: z.number().optional(),
  })
  .describe('Configuration for the section variant.');

/**
 * Individual Report Section Schema
 */
const reportSection = z.object({
  id: z.string().describe('Unique identifier for the section'),
  variant: reportSectionType,
  title: z.string().optional().describe('Section title'),
  content: z.string().optional().describe('The generated content for this section (markdown supported)'),
  prompt: z
    .string()
    .optional()
    .describe('AI guidance for generating or redefining this specific section'),
  delta: z.number().describe('Position index (0, 1, 2...)'),
  options: reportSectionOptions.optional(),
});

/**
 * Metadata and Attributes
 */
const reportAttributes = z.object({
  processing: z.record(z.string(), z.boolean().optional()).describe('Indicates if a section is currently being generated'),
  ready: z.record(z.string(), z.boolean().optional()).describe('Indicates if a section content is ready'),
  status: z.enum(['draft', 'active', 'archived']),
  alias: z.string().describe('A human readable pathname used for URL slugs and sharing'),
});

/**
 * Main Report Schema
 */
const report = z.object({
  id: z.string(),
  researchId: z.string().describe('Link to the parent research project'),
  userId: z.string(),
  userName: z.string().optional(),
  groupId: z.string(),
  groupName: z.string().optional(),
  producerAvatar: z.any().optional(),
  producerId: z.string(),
  producerName: z.string().optional(),
  title: z.string().describe('Title of the report'),
  description: z.string().optional().describe('Describes what you are trying to achieve with the report'),
  evidenceSourceIds: z
    .array(z.string())
    .describe('The IDs of the evidence gatherers to use as data sources'),
  sections: z.array(reportSection).optional(),
  attributes: reportAttributes,
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  prompt: z.string().optional().describe('Global AI prompt for the entire report'),
});

// Types
export type ResearchReport = z.infer<typeof report>;
export type ResearchReportSection = z.infer<typeof reportSection>;
export type ResearchReportSectionType = z.infer<typeof reportSectionType>;
export type ResearchReportAttributes = z.infer<typeof reportAttributes>;
export type ResearchReportSectionOptions = z.infer<typeof reportSectionOptions>;

export {
  report,
  reportSection,
  reportSectionType,
  reportAttributes,
  reportSectionOptions,
};
