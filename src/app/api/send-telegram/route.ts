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
    
    // Логуємо для діагностики (тільки в development)
    if (process.env.NODE_ENV === "development") {
      console.log("TELEGRAM_CHAT_ID from env:", chatId ? "✅ Set" : "❌ Not set");
    }
    
    if (!chatId) {
      console.log("Attempting to auto-detect chat_id...");
      const autoChatId = await getChatId();
      if (autoChatId) {
        chatId = autoChatId.toString();
        console.log(`✅ Auto-detected chat_id: ${chatId}`);
      } else {
        // Логуємо детальну інформацію для розробника
        console.error("❌ Chat ID не знайдено. Для налаштування:");
        console.error("1. Напишіть будь-яке повідомлення вашому боту в Telegram");
        console.error("2. Відкрийте /api/get-chat-id для отримання вашого chat_id");
        console.error("3. Додайте TELEGRAM_CHAT_ID=ваш_chat_id в файл .env.local (локально) або в налаштуваннях Vercel (production)");
        console.error("4. Перезапустіть сервер після додавання змінної");
        
        // Повертаємо загальне повідомлення для користувача
        return NextResponse.json(
          { 
            error: "Сервіс тимчасово недоступний. Будь ласка, спробуйте пізніше або зв'яжіться з нами безпосередньо.",
            isConfigError: true // Прапорець для розробника
          },
          { status: 503 }
        );
      }
    }
    
    // Перевіряємо, чи chatId валідний
    if (!chatId || chatId.trim() === "") {
      console.error("❌ Chat ID порожній або невалідний");
      return NextResponse.json(
        { 
          error: "Сервіс тимчасово недоступний. Будь ласка, спробуйте пізніше або зв'яжіться з нами безпосередньо.",
          isConfigError: true
        },
        { status: 503 }
      );
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
      console.error("❌ Telegram API error:", JSON.stringify(data, null, 2));
      console.error("Chat ID used:", chatId);
      
      // Якщо помилка через невірний chat_id або бот заблокований
      if (data.error_code === 400 || data.description?.includes("chat not found") || data.description?.includes("bot was blocked")) {
        console.error("❌ Помилка: Бот заблокований або chat_id невірний");
        return NextResponse.json(
          { 
            error: "Сервіс тимчасово недоступний. Будь ласка, спробуйте пізніше або зв'яжіться з нами безпосередньо.",
            isConfigError: true,
            hint: "Перевірте налаштування бота та chat_id"
          },
          { status: 503 }
        );
      }
      
      // Інші помилки Telegram API
      console.error("❌ Інша помилка Telegram API:", data.description || "Unknown error");
      return NextResponse.json(
        { 
          error: "Сервіс тимчасово недоступний. Будь ласка, спробуйте пізніше або зв'яжіться з нами безпосередньо.",
          isConfigError: true
        },
        { status: 503 }
      );
    }
    
    console.log("✅ Повідомлення успішно відправлено в Telegram");

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
