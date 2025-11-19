# Zadanie rekrutacyjne — Backend Developer

Repo zawiera minimalny serwer Fastify z miejscem na implementację w `src/routes/chat.route.ts`.

Celem zadania jest rozszerzenie istniejącej trasy czatu o kompletną obsługę walidacji i sanityzacji danych wejściowych oraz wywołanie API OpenAI Chat Completions w celu wygenerowania odpowiedzi, zgodnie z najlepszymi praktykami tworzenia API.

## Zasady pracy
- Możesz instalować zewnętrzne bilbioteki, z wyłączeniem OpenAI SDK.
- Możesz wykorzystywać zewnętrzne zasoby wiedzy, wyszukiwać informacji w internecie.

## Wymagania funkcjonalne
1. Rozszerz `src/routes/chat.route.ts` tak, aby obsługiwał żądania do endpointu czatu.
2. Zaimplementuj walidację danych wejściowych.
3. Zaimplementuj sanityzację danych.
4. Loguj istotne zdarzenia (przy użyciu `src/utils/logger.ts`) bez logowania wrażliwych danych (np. pełnych treści promptów w produkcji).

## Jak testować
Przykładowe wywołanie (curl w PowerShell):

```powershell
curl.exe -X POST http://localhost:3000/chat `
  -H "Content-Type: application/json" `
  -d '{ "prompt": "Napisz krótką ciekawostkę o kosmosie", "temperature": 0.7, "model": "gpt-4o-mini" }'
```

Przykładowa odpowiedź (skrót):

```text
{
  "data": { "id": "chatcmpl_...", "model": "gpt-4o-mini", "content": "..." },
  "meta": { "moderated": true }
}
```
