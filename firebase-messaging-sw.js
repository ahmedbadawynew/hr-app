// Service Worker: استقبال إشعارات FCM في الخلفية (والتطبيق مقفول)
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
importScripts('./config.js');

firebase.initializeApp(self.HR_PWA_CONFIG.firebase);
firebase.messaging(); // الإشعارات اللي فيها notification بتتعرض تلقائيًا، والضغط عليها بيفتح رابط التطبيق

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
// معالج fetch بسيط (مطلوب لبعض متصفحات التثبيت) — بيمرّر الطلبات كما هي
self.addEventListener('fetch', function () {});
