# Google Analytics Setup Guide

## كيفية الحصول على Google Analytics ID

### الخطوة 1: إنشاء حساب Google Analytics

1. اذهب إلى: https://analytics.google.com
2. سجل الدخول بحساب Google الخاص بك
3. اضغط على **"Start measuring"** أو **"بدء القياس"**

### الخطوة 2: إعداد الحساب والموقع

1. **اسم الحساب**: اختر أي اسم (مثل: "Jumaa Portfolio")
2. اضغط **Next** أو **التالي**
3. **اسم الموقع**: مثل "Portfolio Website"
4. اختر **Time zone**: (Europe/Berlin)
5. اختر **Currency**: EUR - Euro
6. اضغط **Next**

### الخطوة 3: إضافة Data Stream

1. اختر **Web** (للموقع الإلكتروني)
2. أدخل عنوان الموقع بعد النشر، مثل:
   - `https://jumaa-portfolio.vercel.app`
   - أو النطاق الخاص بك
3. اسم الـ Stream: "Portfolio Site"
4. اضغط **Create stream**

### الخطوة 4: الحصول على Measurement ID

بعد إنشاء الـ Stream، ستجد:

```
Measurement ID: G-XXXXXXXXXX
```

هذا هو الرقم الذي تحتاجه!

### الخطوة 5: إضافة الـ ID للمشروع

1. أنشئ ملف `.env.local` في مجلد المشروع:

```bash
cd /Users/jumaaalmarrzouk/Desktop/portfolio
touch .env.local
```

2. افتح الملف وأضف:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

استبدل `G-XXXXXXXXXX` بالرقم الحقيقي من Google Analytics

3. **مهم**: أعد تشغيل السيرفر بعد إضافة الملف:

```bash
npm run dev
```

### التحقق من التثبيت

1. افتح الموقع في المتصفح
2. افتح DevTools (F12)
3. اذهب إلى tab **Network**
4. ابحث عن طلب إلى `google-analytics.com/g/collect`
5. إذا وجدته، فالتثبيت صحيح! ✅

### بعد النشر على Vercel

1. اذهب إلى لوحة تحكم Vercel
2. اختر المشروع
3. اذهب إلى **Settings** → **Environment Variables**
4. أضف:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX`
5. اضغط **Save**
6. أعد نشر الموقع (Redeploy)

## ملاحظات مهمة

- الـ ID يبدأ دائماً بـ `G-`
- قد يستغرق ظهور البيانات في Google Analytics من 24-48 ساعة
- يمكنك استخدام **Real-time** في Google Analytics لرؤية الزوار الآن

## روابط مفيدة

- Google Analytics: https://analytics.google.com
- دليل البدء: https://support.google.com/analytics/answer/9304153
- Vercel Environment Variables: https://vercel.com/docs/environment-variables

---

✅ **الكود جاهز في المشروع - تحتاج فقط لإضافة الـ ID!**
