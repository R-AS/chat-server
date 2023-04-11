import { Configuration, OpenAIApi } from 'openai';

const API_KEY = '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';

const configuration = new Configuration({
  apiKey: API_KEY,
});

export const openai = new OpenAIApi(configuration);
