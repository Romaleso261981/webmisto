import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8555898660:AAGACcEFsN5akhBXgtBUowjscQpZl28CMJ8";

// Функція для отримання chat_id з getUpdates
async function getChatId(): Promise<number | null> {
  try {
    const updatesUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=-10&limit=10`;
    const response = await fetch(updatesUrl);
    const data = await response.json();

    if (data.ok && data.result && data.result.length > 0) {
      // Шукаємо chat_id в усіх типах повідомлень
      for (let i = data.result.length - 1; i >= 0; i--) {
        const update = data.result[i];
        // Перевіряємо різні типи повідомлень
        const chatId = 
          update.message?.chat?.id ||
          update.edited_message?.chat?.id ||
          update.channel_post?.chat?.id ||
          update.edited_channel_post?.chat?.id ||
          update.callback_query?.message?.chat?.id;
        
        if (chatId) {
          return chatId;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error getting chat ID:", error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, niche, budget } = body;

    // Валідація даних
    if (!name || !phone || !niche || !budget) {
      return NextResponse.json(
        { error: "Всі поля обов'язкові для заповнення" },
        { status: 400 }
      );
    }

    // Отримуємо chat_id з .env або автоматично з getUpdates
    let chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!chatId) {
      const autoChatId = await getChatId();
      if (autoChatId) {
        chatId = autoChatId.toString();
        console.log(`Auto-detected chat_id: ${chatId}`);
      } else {
        return NextResponse.json(
          { 
            error: "Chat ID не знайдено. Для налаштування виконайте один з кроків:\n\n1. Напишіть будь-яке повідомлення вашому боту в Telegram\n2. Відкрийте http://localhost:3000/api/get-chat-id для отримання вашого chat_id\n3. Додайте TELEGRAM_CHAT_ID=ваш_chat_id в файл .env.local в корені проекту",
            hint: "Після налаштування перезапустіть сервер розробки"
          },
          { status: 400 }
        );
      }
    }

    // Формуємо повідомлення для Telegram
    const message = `🎯 *Нова заявка з сайту WebMisto*

👤 *Ім'я:* ${name}
📞 *Телефон/Telegram:* ${phone}
💼 *Ніша/Послуга:* ${niche}
💰 *Бюджет:* ${budget}

_Час заявки: ${new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kyiv",
    })}_`;

    // Відправляємо повідомлення в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API error:", data);
      
      // Якщо помилка через невірний chat_id, надаємо підказку
      if (data.error_code === 400) {
        return NextResponse.json(
          { 
            error: "Помилка відправки повідомлення. Перевірте, чи правильно налаштований chat_id.",
            hint: "Відкрийте /api/get-chat-id для отримання вашого chat_id"
          },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: "Помилка відправки повідомлення. Спробуйте пізніше." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Заявка успішно відправлена!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return NextResponse.json(
      { error: "Внутрішня помилка сервера" },
      { status: 500 }
    );
  }
}
