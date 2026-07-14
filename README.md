# Yol Radarı

Uzun yol süren sürücüler için geliştirilen, bilinen sabit radar/kontrol noktalarını
harita üzerinde gösteren ve yaklaşıldığında uyaran bir web uygulaması.

Bu proje **radar sinyali algılamaz**. Kamuya açık, bilinen sabit denetim noktası
verilerini GPS konumuyla karşılaştırarak çalışır.

## Özellikler (v0.1)
- Dairesel/pusula tarzı canlı harita
- Rota seçimi (İstanbul → Ordu, İstanbul → Lüleburgaz)
- Geçilen şehirlerin takibi
- Radara yaklaşınca sesli + görsel uyarı
- Hız limiti karşılaştırması
- Demo modu (GPS olmadan test)

## Kullanılan teknolojiler
- HTML / CSS / JavaScript
- Leaflet.js (harita)
- Geolocation API
## Veri kaynağı ve sınırlamalar
Radar/EDS noktaları, EGM ve trafik hukuku kaynaklarından derlenen **isim bazlı bilgilerdir**;
resmi kurumlar hassas GPS koordinatı yayınlamadığı için koordinatlar yaklaşıktır.
Mobil (taşınabilir) radarlar bu listede yer almaz, konumları gün içinde değişir.
Seyahat öncesi güncel kontrol için: https://www.icisleri.gov.tr/iller-arasi-radar-ve-kontrol-noktasi-uygulama-sayilari
Radar verisi ayrıca OpenStreetMap katkıda bulunanlarından çekilmektedir (© OpenStreetMap contributors, ODbL lisansı).

## Durum
🚧 Geliştirme aşamasında