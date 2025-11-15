Migracja Ting Tong do Next.js (App Router)
Ten projekt to migracja aplikacji Ting Tong WordPress PWA do nowoczesnego i skalowalnego stosu technologicznego opartego na Next.js (App Router), TypeScript i Vercel.

Cel Migracji i Docelowy Wygląd
Głównym i bezwzględnym celem jest wierne odtworzenie całego wyglądu (UI/UX) i działania oryginalnej aplikacji Ting Tong. Obejmuje to dynamiczny feed wideo, wszystkie modale (Napiwek, Konto, Pierwsze Logowanie) oraz panele boczne.

🗃️ Punkt Referencyjny UI/UX (Legacy Code)
Wszelkie komponenty UI oraz ich stylizacja muszą być odtworzone na podstawie plików z archiwalnego motywu WordPress.

Kluczowa Referencja UI/UX: Pełna struktura HTML i wszystkich modali znajduje się w pliku: archive/ting-tong-theme/index.php.

Kluczowa Referencja Stylów: Do osiągnięcia docelowego wyglądu niezbędne są style z pliku: archive/ting-tong-theme/style.css.

📋 Plan Migracji (Next.js App Router)
ETAP 1: Fundament Architektoniczny, Typowanie i UI Base
Status: Architektura Next.js, TypeScript i podstawowe style są gotowe.

Szkielet Next.js: ZREALIZOWANO. Ustanowienie struktury projektu (App Router, TS).

Typowanie Kodu (TypeScript): ZREALIZOWANO. Modele danych (User, Comment, Slide, Donation) są na miejscu.

Styling i RWD: W TRAKCIE. Wdrożenie Tailwind CSS jest w trakcie. PRIORYTETEM jest pełna migracja stylów CSS (zgodnie z referencją) i usunięcie problemu nieostylowanego widoku.

UI Component Library (MODYFIKACJA): Wdrożenie Shadcn UI lub biblioteki headless.

Assets: Migracja Globalnych Stylów CSS i kluczowych assetów graficznych do katalogu public/.

Wczesna Konfiguracja Internacjonalizacji (PRZYSPIESZONA): Wdrożenie biblioteki i18n (next-intl) i konfiguracja routingu pod obsługę języków (np. /[lang]/app/*) jako priorytet.

ETAP 2: Backend Core, Autoryzacja i Czytanie Danych (Server-First)
Status: Modele danych i Route Handlers są na miejscu.

Baza Danych (WERYFIKACJA STABILNOŚCI): Upewnienie się, że połączenie z bazą danych (Mongoose) jest zoptymalizowane pod Serverless (np. użycie memoizacji).

Autoryzacja / Zabezpieczenia (Middleware): ZREALIZOWANO (Custom JWT). Wdrożenie Next.js Middleware do weryfikacji JWT/sesji i ochrony ścieżek.

Logika Uwierzytelniania: ZREALIZOWANO. Logika logowania/rejestracji jest przeniesiona do Route Handlers.

Pobieranie Danych (Server Components - MODYFIKACJA): Przeniesienie głównej logiki pobierania danych (SLIDES, USERS) do asynchronicznych Server Components (read-only), wykorzystując natywne funkcje fetch i Next.js Caching.

Logika Użytkownika: Implementacja logiki wymuszenia uzupełnienia profilu (First Login Modal).

ETAP 3: Infrastruktura i Logika Zapisu (KRYTYCZNA KONWERSJA NA SERVER ACTIONS)
Status: Logika mutacji jest w API Routes – MUSI zostać przeniesiona do Server Actions.

Mutacje Danych (KONWERSJA NA SERVER ACTIONS - KLUCZOWA ZMIANA): Przekształcenie logiki z Route Handlers POST/PUT/DELETE (np. polubienia, komentarze, aktualizacje profilu) na funkcje Server Actions ('use server').

Wdrożenie revalidatePath i revalidateTag wewnątrz Server Actions do natychmiastowej rewalidacji danych.

Dostarczanie Wideo (KRYTYCZNE): Wdrożenie CDN (Cloudflare Stream/AWS S3) i ustawienie transkodowania Adaptive Streaming (HLS/DASH).

Oddzielny Storage Assetów + Optymalizacja Obrazów: Zmigrowanie zasobów statycznych (avatary, wideo, obrazy) na Oddzielny Storage (S3/Vercel Blob) i wdrożenie komponentu next/image.

Własny System Komentarzy (Backend): Konwersja logiki komentarzy na Server Actions.

Płatności i Zewnętrzne API (API Routes): Utrzymanie API Routes tylko dla operacji zewnętrznych: Logika inicjowania płatności Stripe i obsługa webhooka Stripe.

Rate Limiting: Zaimplementowanie Rate Limiting na krytycznych Server Actions i API Routes.

ETAP 4: Funkcjonalności Zaawansowane i Wiernie Odtworzenie Komponentów
Status: Komponenty (np. CommentsSection.tsx, TippingModal.tsx) są przeniesione i gotowe do integracji.

Global State & Video UX: Wdrożenie Zustand do zarządzania lekkim stanem UI (modal komentarzy, stan gracza wideo).

Zarządzanie Formularzami: Wdrożenie React Hook Form do walidacji i kontroli pól.

React Query (MODYFIKACJA STRATEGII): Integracja React Query tylko na Client Components, aby obsługiwać złożony stan klienta, polegając na Server Actions do mutacji i rewalidacji danych serwera.

Real-Time Updates: Zintegrowanie External Service (Pusher/Ably) do obsługi Real-Time (dla polubień slajdów i komentarzy).

Własny System Komentarzy (Frontend): Odtworzenie komponentu CommentsSection.jsx i jego integracja z logiką Server Actions / Real-Time.

Notyfikacje Web Push (Pełne Wdrożenie): Wdrożenie Service Worker (sw.js), implementacja UI oraz logika subskrypcji/anulowania na stronie klienta.

UI/UX Wiernie Odtworzone: Odtworzenie wizualne kluczowych komponentów i interfejsu strony konta.

ETAP 5: Optymalizacja i Wygładzanie (Produkcja)
Monitorowanie Błędów: Zintegrowanie Sentry do monitorowania błędów serwera (Server Actions) i klienta.

Analityka: Dodanie Google Analytics 4 / Amplitude w app/layout.tsx.

SEO i Metadane: Wprowadzenie Dynamicznych Metadanych Next.js (Open Graph/Twitter Cards) dla każdej strony wideo.

Internacjonalizacja (i18n): Wypełnienie wszystkich brakujących tłumaczeń (na podstawie wczesnej struktury z Etapu 1).

Generowanie Zasobów: Automatyczne generowanie map witryny (sitemaps) i kanałów RSS.

🛠️ Instrukcje dla przyszłych agentów
PRIORYTET Wizualny: Pracuj z plikiem archive/ting-tong-theme/index.php jako jedyną prawdą o docelowym wyglądzie i strukturze.

Krytyczna Konwersja: Skup się na szybkiej konwersji logiki mutacji na Server Actions (Etap 3).

Błędy UI: Upewnij się, że Etap 1 został zakończony, a żaden z widocznych elementów aplikacji nie jest nieostylowany.
