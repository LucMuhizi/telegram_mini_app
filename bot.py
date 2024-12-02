from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler

# Replace with your actual Web App URL
WEB_APP_URL = "https://telegram-mini-app-seven.vercel.app"

# Replace with your bot token
BOT_TOKEN = "7575188550:AAFEJ98eHrqWTjwqgg_oPjpxKci_tufOYM8"

async def start(update: Update, context):
    """Handles the /start command."""
    try:
        # Create an inline keyboard with a Web App button
        keyboard = [
            [InlineKeyboardButton("Open Checkers", web_app={'url': WEB_APP_URL})]
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        await update.message.reply_text(
            "Welcome! Click the button below to play Checkers.",
            reply_markup=reply_markup,
        )
    except Exception as e:
        print(f"Error in start function: {e}")

# Create the bot application
application = Application.builder().token(BOT_TOKEN).build()

# Add the /start command handler
application.add_handler(CommandHandler("start", start))

# Start the bot
print("Bot is running. Use /start to test.")
application.run_polling()
