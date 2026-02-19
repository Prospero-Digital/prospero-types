import * as z from 'zod';

const chartAxisType = z.literal(['x', 'y']);

const chartDataMapping = z.object({
  evidenceId: z
    .string()
    .describe('ID of the specific evidence document'),
  questionId: z
    .string()
    .describe('The ID of the question/field to map'),
  axis: chartAxisType,
  // The 'autoAxis' handles the unassigned side (e.g., time or count)
  autoAxis: z.enum(['time', 'frequency', 'sum', 'average']).describe('Applied to the axis NOT defined by the questionId'),
});

const reportSectionType = z
  .literal(['summary', 'findings', 'nextSteps', 'charts'])
  .describe(`
    - 'summary': A brief overview of the report.
    - 'findings': Detailed insights and observations.
    - 'nextSteps': Recommended actions or a set of follow-up questions based on the report.
    - 'charts': Visual representations of data.
  `);

const reportSection = z.object({
  id: z.string(),
  variant: reportSectionType,
  // Instruction remains for text sections, mapping is used for charts
  instruction: z.string().optional(),
  dataMapping: chartDataMapping.optional(),
});

const report = z.object({
  id: z.string(),
  evidenceSourceIds: z.array(z.string()).describe(
    'The IDs of the evidence documents this report should analyse.',
  ),
  sections: z.array(reportSection).describe('Array of report sections to be included in the report.'),
});

export type ResearchReport = z.infer<typeof report>;
export type ResearchReportSection = z.infer<typeof reportSection>;
export type ResearchReportSectionType = z.infer<typeof reportSectionType>;
export { report, reportSection, reportSectionType };
