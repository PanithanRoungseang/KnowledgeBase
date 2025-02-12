---
title: Two-factor authentication
sidebar_position: 3
---

Two-factor authentication (or 2FA) is an authentication method that requires an additional piece of evidence from the user to log in, on top of the usual login and password pair. Bu, güvenlik amacıyla yapılır. Siteler genellikle SMS veya özel bir kimlik doğrulayıcı uygulamasıyla gönderilen bir kod gibi 2FKD yöntemleri sunar.

We see adding a 2FA option as a benefit. We also understand that enforcing it may irritate some users. Bu nedenle adguard.com'daki kişisel hesabınız için bunu isteğe bağlı hâle getirdik — yeni bir hesap açtığınızda varsayılan olarak 2FKD devre dışıdır. Ayarlarda elle etkinleştirebilirsiniz. As for the currently available authentication methods, we use the tried and tested one: an authenticator app for Android or iOS. You can use almost any such app, and there are plenty of them.

We recommend setting up two-factor authentication for your AdGuard account. Bu işlem uzun sürmez ancak lisans anahtarlarınızı, aboneliklerinizi ve en önemlisi hesapla ilişkili tüm kişisel bilgilerinizi korumanıza yardımcı olur.


## How to set it up

1) [AdGuard hesabınıza](https://auth.adguard.com/login.html) giriş yapın ve Ayarlar sekmesine gidin:

![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/account_settings.png)

2) *Parola ve 2FKD* bölümüne ilerleyin ve **Etkinleştir** öğesine tıklayın:

![The Change button *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_new.png)

3) Kimlik doğrulama uygulaması yüklemek ve QR kodunu taramak için ekrandaki talimatları takip edin:

![The verification code](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_enable.png)

***Important***
* Save the second-factor backup code somewhere, it will be necessary to recover your account in case your mobile phone gets lost or stolen;

If everything is done right, you will see this when you log into your account the next time:

![The result *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_success.png)

Use your mobile authenticator app to read the code and enter it. You should be logged in now!

***NOTE***: If you get an authentication error, check the clock on your phone. Adjust it if needed, as an unsynchronized clock may be the cause of the error.