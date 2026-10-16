// worker.js
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ساخت آدرس مقصد در api.telegram.org با حفظ مسیر و پارامترها
    const telegramUrl = new URL(url.pathname + url.search, 'https://api.telegram.org');

    // ساخت درخواست جدید برای ارسال به تلگرام
    const newRequest = new Request(telegramUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    // ارسال درخواست به تلگرام و برگرداندن پاسخ
    return fetch(newRequest);
  },
};