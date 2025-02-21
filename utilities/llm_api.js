const axios = require('axios');
require('dotenv').config();

const API_URL = 'https://llm.y-4.jp/api/chat';
const API_KEY = process.env.AI_CHAT_API_KEY;
function formatText(text) {
    return  text.replace(/\n/g, '\\n');
  }
/**
 * Call the AI Chat API
 * @param {string} userContent - The user's message content
 * @param {string} systemContent - Optional system message content
 * @returns {Promise<Object>} - The API response
 */
async function callAIChatAPI(userContent, systemContent) {
    const user_text_format = formatText(userContent)
    try {
        const response = await axios.post(API_URL, {
            model: 'qwen2.5:7b',
            messages: [
                {
                    role: 'system',
                    content: systemContent
                },
                {
                    role: 'user',
                    content: user_text_format
                }
            ],
            stream: false
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error calling AI Chat API:', error.response?.data || error.message);
        throw error;
    }
}

// Export the function
module.exports = {
    callAIChatAPI
};