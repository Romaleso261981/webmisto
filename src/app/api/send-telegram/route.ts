import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8555898660:AAGACcEFsN5akhBXgtBUowjscQpZl28CMJ8";

// Функція для отримання chat_id з getUpdates
async function getChatId(): Promise<number | null> {
  try {
    const updatesUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`;
    const response = await fetch(updatesUrl);
    const data = await response.json();

    if (data.ok && data.result && data.result.length > 0) {
      // Отримуємо останній chat_id
      const lastUpdate = data.result[data.result.length - 1];
      return lastUpdate.message?.chat?.id || null;
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
      } else {
        return NextResponse.json(
          { 
            error: "Chat ID не знайдено. Будь ласка, напишіть боту будь-яке повідомлення в Telegram, або додайте TELEGRAM_CHAT_ID в .env.local файл.",
            hint: "Відкрийте /api/get-chat-id для отримання вашого chat_id"
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
