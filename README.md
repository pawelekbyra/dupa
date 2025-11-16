lan Migracji Projektu Ting Tong do Next.js (App Router)
ETAP 1: Fundament Architektoniczny, Typowanie i UI Base
ZREALIZOWANO (Fundamenty)

Ustanowienie szkieletu projektu w oparciu o Next.js (App Router) i TypeScript.

Typowanie Kodu (TypeScript): Modele danych (User, Comment, Slide, Donation) są na miejscu.

Przeniesienie podstawowych stylów (np. VideoPlayerPage.css, AuthPages.css).

Migracja Globalnych Stylów CSS i kluczowych assetów graficznych do katalogu public/.

W TRAKCIE / DO ZROBIENIA (Wizualizacja i I18n)

PRIORYTET WIZUALNY: Pełne wdrożenie Tailwind CSS i migracja pozostałych stylów, aby zapewnić wierne odtworzenie wyglądu (na podstawie referencji archive/ting-tong-theme/index.php) i usunięcie problemu nieostylowanego widoku.

Wdrożenie Shadcn UI lub innej biblioteki headless dla komponentów UI (MODYFIKACJA).

Wczesna Konfiguracja Internacjonalizacji (next-intl) i konfiguracja routingu pod obsługę języków (np. /[lang]/app/*) jako priorytet.

ETAP 2: Backend Core, Autoryzacja i Czytanie Danych (Server-First)
ZREALIZOWANO (Uwierzytelnianie)

Wdrożenie Autoryzacji/Zabezpieczeń (Custom JWT) oraz Next.js Middleware do weryfikacji sesji i ochrony ścieżek.

Przeniesienie logiki uwierzytelniania (tworzenie konta/logowanie/rejestracja) do Route Handlers (/api/auth/).

DO ZROBIENIA (Logika Czytania Danych)

Baza Danych (WERYFIKACJA): Upewnienie się, że połączenie z bazą danych Neon (PostgreSQL) jest w pełni stabilne i zoptymalizowane pod Serverless, bez problemów z connection poolingiem.

Przeniesienie głównej logiki pobierania danych (SLIDES, USERS) do asynchronicznych Server Components (read-only), wykorzystując natywne funkcje fetch i Next.js Caching.

Implementacja logiki wymuszenia uzupełnienia profilu (First Login Modal).

ETAP 3: Infrastruktura i Logika Zapisu (KRYTYCZNA KONWERSJA)
DO ZROBIENIA (Kluczowe Mutacje i Infrastruktura)

PRIORYTET (KRYTYCZNA KONWERSJA): Przekształcenie logiki z Route Handlers POST/PUT/DELETE (np. polubienia slajdów, komentarze, aktualizacje profilu) na funkcje Server Actions ('use server').

Wdrożenie revalidatePath i revalidateTag wewnątrz Server Actions do natychmiastowej rewalidacji danych w Server Components po mutacji.

Dostarczanie Wideo (KRYTYCZNE): Wdrożenie CDN (Cloudflare Stream/AWS S3) i ustawienie transkodowania Adaptive Streaming (HLS/DASH).

Migracja zasobów statycznych (avatary, wideo, obrazy) na Oddzielny Storage (S3/Vercel Blob) i wdrożenie komponentu next/image.

Konwersja logiki Własnego Systemu Komentarzy (Backend) na Server Actions.

Zaimplementowanie Rate Limiting na krytycznych Server Actions i API Routes.

ETAP 4: Funkcjonalności Zaawansowane i Komponenty
DO ZROBIENIA (Wdrożenie Komponentów i Stanu)

Wdrożenie Zustand do zarządzania lekkim stanem UI (np. modal komentarzy, stan gracza wideo).

Wdrożenie React Hook Form do walidacji i kontroli pól formularzy.

Odtworzenie komponentu CommentsSection.jsx i integracja z logiką Server Actions / Real-Time.

Odtworzenie komponentu TippingModal.tsx (Modal Napiwku) i jego integracja z logiką Stripe (umożliwiając dostęp do treści ekskluzywnych/sekretnych slajdów, kontrolowany na podstawie modelu Donation).

Integracja zewnętrznego serwisu (Pusher/Ably) do obsługi Real-Time Updates (dla polubień slajdów i komentarzy).

Pełne wdrożenie Notyfikacji Web Push (Service Worker, UI oraz logika subskrypcji/anulowania).

Wizualne odtworzenie kluczowych komponentów i interfejsu strony konta.

ETAP 5: Optymalizacja i Wygładzanie (Produkcja)
DO ZROBIENIA (Finalizacja)

Monitorowanie Błędów: Zintegrowanie Sentry do monitorowania błędów serwera (Server Actions) i klienta.

Analityka: Dodanie Google Analytics 4 / Amplitude w app/layout.tsx.

SEO i Metadane: Wprowadzenie Dynamicznych Metadanych Next.js (Open Graph/Twitter Cards) dla każdej strony wideo.

Internacjonalizacja (i18n): Wypełnienie wszystkich brakujących tłumaczeń.

Generowanie Zasobów: Automatyczne generowanie map witryny (sitemaps) i kanałów RSS.
Brakujace biblioteki
Dostarczanie Wideo (HLS/DASH)	Dedykowany odtwarzacz wideo (np. hls.js, react-player z obsługą HLS, lub video.js i jego Reactowy wrapper)	Brakuje narzędzia, które efektywnie obsłuży strumienie adaptacyjne (HLS/DASH), niezbędne dla krytycznego dostarczania wideo.
Storage Assetów (S3/Vercel Blob)	SDK dla chmury (np. @aws-sdk/client-s3 lub @vercel/blob)	Do zarządzania i przesyłania zasobów (avatary, wideo, obrazy) na Oddzielny Storage.
Rate Limiting	Dedykowana biblioteka (np. rate-limiter-flexible, upstash/redis + logika)	Do wdrożenia Rate Limiting na krytycznych Server Actions/API Routes w celu ochrony przed nadużyciam
1. Pełna Adopcja Shadcn UI dla Standardowych Elementów
Ponieważ priorytetem jest spójność, Shadcn UI staje się Pańskim podstawowym źródłem dla wszystkich standardowych elementów interfejsu.

Co zastąpić Shadcn UI: Wszystkie elementy formularzy (Input, Select), przyciski (Button), modale (Dialog), menu (Dropdown Menu), powiadomienia (Alert, Toast) i elementy nawigacyjne. Shadcn dostarcza nie tylko style (Tailwind), ale też kluczową, dostępną logikę (Radix UI).

Jak to działa: Wszystkie te komponenty będą korzystać z tej samej bazy CSS/Tailwind, co automatycznie nadaje im spójny wygląd, cienie, zaokrąglenia i kolory.

2. Centralne Zarządzanie Kolorami i Kształtami (Klucz do Spójności)
Spójność całego interfejsu jest gwarantowana przez jednolite zarządzanie wartościami wizualnymi w Pańskim pliku globals.css.

Zmienne CSS: Pańska aplikacja już definiuje zmienne CSS w bloku :root i .dark.

Kolory Akcentu: Zdefiniowane zmienne, takie jak --accent-color: #ff0055;, powinny być używane przez wszystkie przyciski i interaktywne elementy. Zmieniając kolor w tym jednym miejscu, zmienia Pan go w całej aplikacji.

Zaokrąglenia (Radius): Zmienna --radius: 0.625rem; definiuje spójny poziom zaokrąglenia dla wszystkich elementów Shadcn (i całego UI).

Zmiana Motywu: Ponieważ w globals.css ma Pan już zdefiniowane style dla light (:root) i dark (.dark), wystarczy przełączyć klasę na body/kontenerze, aby cała aplikacja przeszła na inny, ale w pełni spójny, motyw.

3. Komponenty Unikalne (Feed)
Mimo przyjęcia Shadcn, unikalne elementy "TikTok-like" (które nie są standardowymi przyciskami czy inputami) powinny być budowane ręcznie, ale z użyciem Tailwind i Pańskich centralnych zmiennych CSS, co zapewni im spójność z resztą aplikacji.

Co zachować: MainFeed, PostItem, Sidebar, BottomBar.

Jak je ujednolicić: Proszę upewnić się, że klasy Tailwind używane w tych komponentach (np. text-primary, bg-secondary, border-border) odwołują się do kolorów zdefiniowanych przez Shadcn/zmienne CSS, co automatycznie włączy je do nowego, spójnego systemu wizualnego.
