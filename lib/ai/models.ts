// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'mistral-small-latest',
    label: 'Mistral Small',
    apiIdentifier: 'mistral-small-latest',
    description: 'Mistral Small is a small language model trained on a mixture of internet text and books.',
  },
  {
    id: 'mistral-large-latest',
    label: 'Mistral Large',
    apiIdentifier: 'mistral-large-latest',
    description: 'Mistral Large is a large language model trained on a mixture of internet text and books.',
  },
  {
    id: 'pixtral-large-latest',
    label: 'Pixtral Large',
    apiIdentifier: 'pixtral-large-latest',
    description: 'Pixtral Large is a large multimodal model trained on a mixture of internet text and images.',
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'mistral-small-latest';
