import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8555898660:AAGACcEFsN5akhBXgtBUowjscQpZl28CMJ8";

export async function GET() {
  try {
    // Отримуємо останні оновлення від Telegram
    const updatesUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`;
    
    const response = await fetch(updatesUrl);
    const data = await response.json();

    if (!data.ok) {
      return NextResponse.json(
        { error: "Помилка отримання оновлень", details: data },
        { status: 500 }
      );
    }

    // Знаходимо останній chat_id з повідомлень
    const updates = data.result || [];
    const chatIds = new Set<number>();
    
    updates.forEach((update: any) => {
      if (update.message?.chat?.id) {
        chatIds.add(update.message.chat.id);
      }
    });

    const chatIdsArray = Array.from(chatIds);

    return NextResponse.json({
      success: true,
      chatIds: chatIdsArray,
      message: chatIdsArray.length > 0
        ? `Знайдено ${chatIdsArray.length} chat_id. Використовуйте перший для отримання повідомлень.`
        : "Chat ID не знайдено. Напишіть боту будь-яке повідомлення і оновіть цю сторінку.",
      instructions: "Додайте TELEGRAM_CHAT_ID в .env.local файл або використовуйте перший chat_id зі списку",
    });
  } catch (error) {
    console.error("Error getting chat ID:", error);
    return NextResponse.json(
      { error: "Внутрішня помилка сервера" },
      { status: 500 }
    );
  }
}
