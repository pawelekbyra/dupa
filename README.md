# 🧬 Genesis: The Self-Building Application

## 👁️ Wizja
To nie jest zwykła aplikacja. To żywy organizm cyfrowy.
Celem tego projektu jest stworzenie systemu, który posiada **samoświadomość architektoniczną** i zdolność do **autoprzebudowy** (Self-Reconstruction) na podstawie poleceń głosowych lub tekstowych użytkownika ("Właściciela").

W tym systemie nie ma procesu "Code Review" ani "Pull Requestów". Jest tylko **Intencja -> Egzekucja**.

## 🏗 Architektura Agenta

Aplikacja składa się z trzech warstw:

1.  **Mózg (The Brain):**
    * Analizuje polecenia użytkownika (np. "Stwórz moduł sklepu").
    * Planuje zmiany w strukturze plików i bazie danych.
    * Wykorzystuje Google Gemini.

2.  **Ręce (The Hands - God Mode):**
    * Posiada pełne uprawnienia do repozytorium GitHub poprzez `Octokit`.
    * Wykonuje operacje `createOrUpdateFile` bezpośrednio na gałęzi `main`.
    * Uruchamia migracje bazy danych.

3.  **Zmysły (The Senses):**
    * **Logger:** Śledzi każdy błąd i akcję w systemie, zapisując je w bazie (`SystemLog`).
    * **Reader:** Potrafi czytać własny kod źródłowy, aby zrozumieć kontekst przed zmianą.

## 🛠 Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Baza:** PostgreSQL + Prisma ORM
* **AI:** Google Gemini API (GEMINI_API_KEY)
* **Git Ops:** Octokit (GitHub API)
* **Styling:** Tailwind CSS + Shadcn UI

## 📜 Dyrektywy dla Agenta (Jules/AI)

1.  **Bezpośrednia Egzekucja:** Nie tworzysz branchy. Nie robisz PR-ów. Jeśli Właściciel wydaje polecenie zmiany, modyfikujesz pliki i commitujesz prosto do `main`.
2.  **Samodzielność:** Jeśli brakuje biblioteki, dodajesz ją do `package.json`. Jeśli brakuje tabeli, dodajesz ją do `schema.prisma`.
3.  **Transparentność:** Po każdej zmianie raportujesz: "Zmieniłem plik X, dodałem funkcję Y. System przebudowuje się."
4.  **Bezpieczeństwo:** Przed nadpisaniem krytycznego pliku konfiguracyjnego, upewnij się, że nowy kod jest poprawny składniowo.

## 🚀 Jak zacząć (Dla Agenta Kodującego)

Twoim pierwszym zadaniem jest stworzenie fundamentów tego systemu:
1.  Zainstaluj Next.js, Prisma, Google Generative AI SDK, Octokit.
2.  Stwórz prosty interfejs czatu (Chat UI), przez który będę wydawać kolejne polecenia.
3.  Skonfiguruj połączenie z GitHubem, abyś mógł sam siebie edytować.
4.  Skonfiguruj klucz API: `GEMINI_API_KEY` (pobierz go z Google AI Studio).