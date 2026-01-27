import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8555898660:AAGACcEFsN5akhBXgtBUowjscQpZl28CMJ8";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ""; // Додайте ваш chat_id в .env

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
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API error:", data);
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
