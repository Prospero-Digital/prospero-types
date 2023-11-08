export type EmailTemplate =
  | 'assignment'
  | 'bundle'
  | 'group'
  | 'invitation'
  | 'message'
  | 'storage'
  | 'tokens'
  | 'upcoming'
  | 'release';

export type EmailProps = {
  [key: string]: string;
};

export interface EmailFormatMessageProps extends EmailProps {
  subject: string;
}

export type EmailComposeProps = {
  docId?: string;
  template: EmailTemplate;
  props?: EmailProps;
};

type DefaultRenderProps = {
  template: EmailTemplate;
  origin: string;
  email: string;
};

export type EmailRenderProps = DefaultRenderProps &
  Partial<{
    subject: string;
    html: string;
    producerName: string;
    bundleName: string;
    bundleAlias: string;
  }>;
