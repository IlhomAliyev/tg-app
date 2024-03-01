const useTelegram = () => {
  //@ts-ignore
  const tg = window?.Telegram?.WebApp;
  return tg;
};

export default useTelegram;
