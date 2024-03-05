import { TelegramWebApps } from "telegram-webapps";

//@ts-ignore
const tg: TelegramWebApps.WebApp = window.Telegram.WebApp;

const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return { tg, user: tg.initDataUnsafe?.user, onClose, onToggleButton };
};

export default useTelegram;
