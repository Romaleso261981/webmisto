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

    // Знаходимо всі chat_id з різних типів повідомлень
    const updates = data.result || [];
    const chatIds = new Set<number>();
    
    updates.forEach((update: any) => {
      // Перевіряємо різні типи повідомлень
      const chatId = 
        update.message?.chat?.id ||
        update.edited_message?.chat?.id ||
        update.channel_post?.chat?.id ||
        update.edited_channel_post?.chat?.id ||
        update.callback_query?.message?.chat?.id;
      
      if (chatId) {
        chatIds.add(chatId);
      }
    });

    const chatIdsArray = Array.from(chatIds);

    return NextResponse.json({
      success: true,
      chatIds: chatIdsArray,
      recommendedChatId: chatIdsArray.length > 0 ? chatIdsArray[0] : null,
      message: chatIdsArray.length > 0
        ? `✅ Знайдено ${chatIdsArray.length} chat_id. Рекомендований: ${chatIdsArray[0]}`
        : "❌ Chat ID не знайдено. Напишіть боту будь-яке повідомлення в Telegram і оновіть цю сторінку.",
      instructions: chatIdsArray.length > 0
        ? `Додайте в .env.local файл:\nTELEGRAM_CHAT_ID=${chatIdsArray[0]}\n\nАбо система автоматично використає перший знайдений chat_id.`
        : "1. Відкрийте вашого бота в Telegram\n2. Напишіть будь-яке повідомлення (наприклад: 'Привіт')\n3. Оновіть цю сторінку",
      envExample: chatIdsArray.length > 0
        ? `TELEGRAM_CHAT_ID=${chatIdsArray[0]}`
        : null,
    });
  } catch (error) {
    console.error("Error getting chat ID:", error);
    return NextResponse.json(
      { error: "Внутрішня помилка сервера" },
      { status: 500 }
    );
  }
}
