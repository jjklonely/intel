const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Раздача статических файлов (HTML, CSS, JS)

// OpenAI API ключ из переменных окружения
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Endpoint для обработки вопросов
app.post('/ask', async (req, res) => {
    try {
        const { question } = req.body;

        // Валидация
        if (!question || typeof question !== 'string' || question.trim().length === 0) {
            return res.status(400).json({ 
                error: 'Question is required and must be a non-empty string' 
            });
        }

        // Проверка наличия API ключа
        if (!OPENAI_API_KEY) {
            console.error('OPENAI_API_KEY is not set in environment variables');
            return res.status(500).json({ 
                error: 'Server configuration error: OpenAI API key is not configured' 
            });
        }

        // Формирование промпта
        // GPT автоматически определит язык вопроса и ответит на том же языке
        const systemPrompt = `You are a helpful assistant that provides information about Intel processors. 
Detect the language of the user's question and respond in the SAME language that the user used.
Be concise, accurate, and informative. 
If the question is not about Intel processors, politely redirect the conversation to Intel-related topics.
Always match the language of your response to the language of the user's question.`;

        // Запрос к OpenAI API (используем нативный fetch)
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini', // Самая дешевая модель
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: question.trim()
                    }
                ],
                max_tokens: 300, // Ограничено для экономии
                temperature: 0.5 // Снижено для экономии и более точных ответов
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('OpenAI API error:', response.status, errorData);
            
            return res.status(response.status).json({ 
                error: `OpenAI API error: ${errorData.error?.message || 'Unknown error'}` 
            });
        }

        const data = await response.json();

        // Извлечение ответа
        if (data.choices && data.choices[0] && data.choices[0].message) {
            const answer = data.choices[0].message.content;
            
            return res.json({ 
                answer: answer 
            });
        } else {
            return res.status(500).json({ 
                error: 'Invalid response format from OpenAI API' 
            });
        }

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ 
            error: 'Internal server error: ' + error.message 
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        hasApiKey: !!OPENAI_API_KEY 
    });
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    
    if (!OPENAI_API_KEY) {
        console.warn('⚠️  WARNING: OPENAI_API_KEY is not set!');
        console.warn('   Set OPENAI_API_KEY in environment variables');
    } else {
        console.log('✅ OpenAI API key is configured');
        console.log('✅ Using model: gpt-4o-mini');
        console.log('✅ Auto language detection enabled');
    }
});
