# AI-Editor

Проєкт [Remotion](https://www.remotion.dev/) для монтажу коротких вертикальних відео: 1080×1920, 30 fps, для Reels, TikTok і Shorts.

## 1. Підготовка Mac (один раз)

Відкрийте **Термінал** (Spotlight → «Terminal»). Вставляйте команди по одній.

**Крок 1. Перевірте, що вже встановлено.** Якщо команда показує версію, програма є. Якщо пише `command not found`, її треба встановити.

```bash
brew --version; node -v; python3 --version; ffmpeg -version | head -1; yt-dlp --version; whisper --help | head -1
```

**Крок 2. Homebrew** — «магазин» програм для терміналу, через нього ставиться решта. Встановлюйте, тільки якщо `brew` не знайдено:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Наприкінці інсталятор покаже дві команди «Next steps». Виконайте їх, щоб термінал побачив `brew`.

**Крок 3. Node.js, Python, FFmpeg, yt-dlp.** Node запускає Remotion. FFmpeg ріже й конвертує відео. yt-dlp завантажує відео з інтернету. Python потрібен для Whisper.

```bash
brew install node python ffmpeg yt-dlp
```

**Крок 4. Whisper** перетворює мову з відео на текст субтитрів. Найпростіше поставити його через `pipx`, тоді він не заважатиме іншим програмам на Python:

```bash
brew install pipx && pipx ensurepath && pipx install openai-whisper
```

Після цього закрийте і знову відкрийте Термінал.

## 2. Запуск проєкту

```bash
cd AI-Editor
npm install        # завантажує Remotion (один раз)
npm run dev        # відкриває Remotion Studio в браузері: попередній перегляд і редагування
npm run render     # збирає готове відео в out/short.mp4
```

## 3. Як змонтувати своє відео

1. Покладіть кліп у папку `public/`, наприклад `public/clip.mp4`.
2. Зробіть субтитри через Whisper:
   ```bash
   whisper public/clip.mp4 --model small --language uk --output_format json --output_dir public
   ```
3. У Studio (`npm run dev`) в правій панелі **Props** вкажіть:
   - `videoFile`: `clip.mp4`
   - `title` і `subtitle`: текст угорі
   - `captions`: вставте масив `segments` із `public/clip.json` (поля `start`, `end`, `text` збігаються)
4. `npm run render`, і готове відео з'явиться в `out/short.mp4`.

Завантажити відео з YouTube тощо (якщо маєте на нього права):

```bash
yt-dlp -f "mp4" -o "public/clip.mp4" "ПОСИЛАННЯ"
```

## Структура

- `src/Root.tsx` — формат відео (розмір, fps, тривалість)
- `src/ShortVideo.tsx` — сцена: фон або кліп, заголовок, плавне зникнення в кінці
- `src/Captions.tsx` — анімовані субтитри у форматі Whisper
