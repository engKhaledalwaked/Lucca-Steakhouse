// بيانات المطعم القابلة للتعديل في مكان واحد
export const site = {
  whatsapp: '962778899666', // رقم الحجوزات (من بايو إنستغرام المطعم)
  phones: [
    { tel: '+962778899666', label: '077 889 9666' },
    { tel: '+96264633355', label: '06 463 3355' },
  ],
  instagram: 'https://www.instagram.com/luccasteakhouse/',
  facebook: 'https://www.facebook.com/LuccaSteakhouse/',
  coords: { lat: 31.95262, lng: 35.9049075 },
  googleRating: '4.6',
  googleReviews: '3,693',
  tripRating: '4.8',
}

// الصور في public/img — إذا لم يوجد الملف يظهر بديل لوني تلقائياً
export const img = (name) => `/img/${name}`
