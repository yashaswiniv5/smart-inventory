import { GoogleGenAI } from '@google/genai';
try {
  const ai = new GoogleGenAI({ apiKey: 'test' });
  console.log('Success Instantiating', ai);
} catch (e) {
  console.log('Error', e.message);
}
