const FALLBACK_TELEGRAM_BOT_TOKEN = "8854718162:AAF7QHDPy2jAsnSgYNmkcJr-SY1QHe-sg98";
const FALLBACK_TELEGRAM_CHAT_ID = "1629713993";

export function getTelegramBotToken(): string {
  return process.env.TELEGRAM_BOT_TOKEN?.trim() || FALLBACK_TELEGRAM_BOT_TOKEN;
}

export function getTelegramChatId(): string {
  return process.env.TELEGRAM_CHAT_ID?.trim() || FALLBACK_TELEGRAM_CHAT_ID;
}
