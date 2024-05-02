import axios from 'axios';

const translateText = async (text, sourceLang = 'en', targetLang = 'es') => {
  const url = 'https://libretranslate.com/translate';
  
  try {
    const response = await axios.post(url, {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    return response.data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
};

export default translateText;
