# 📄 Lebenslauf / CV

## Anleitung zum Hinzufügen Ihrer PDF-Datei

1. **Fügen Sie Ihre CV-PDF-Datei in diesen Ordner ein**

   - Benennen Sie die Datei: `Jumaa-Almarzouk-CV.pdf`
   - Oder verwenden Sie einen anderen Namen und aktualisieren Sie den Link in `hero.tsx`

2. **Aktualisieren Sie den Download-Link**

   - Öffnen Sie: `components/hero.tsx`
   - Suchen Sie nach dem Button "Lebenslauf (PDF)"
   - Ersetzen Sie:
     ```tsx
     <Button variant="outline" size="lg">
       <Download className="mr-2 h-4 w-4" />
       Lebenslauf (PDF)
     </Button>
     ```
   - Mit:
     ```tsx
     <Button variant="outline" size="lg" asChild>
       <a href="/cv/Jumaa-Almarzouk-CV.pdf" download>
         <Download className="mr-2 h-4 w-4" />
         Lebenslauf (PDF)
       </a>
     </Button>
     ```

3. **Testen Sie den Download**
   - Starten Sie den Development Server: `npm run dev`
   - Klicken Sie auf den "Lebenslauf (PDF)" Button
   - Die PDF-Datei sollte heruntergeladen werden

## Alternative: Externer Link

Falls Sie Ihren CV auf einem anderen Service hosten (z.B. Google Drive, Dropbox):

```tsx
<Button variant="outline" size="lg" asChild>
  <Link
    href="https://your-cv-link.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="mr-2 h-4 w-4" />
    Lebenslauf (PDF)
  </Link>
</Button>
```

---

**Hinweis:** Diese README-Datei können Sie nach dem Hochladen Ihrer CV-Datei löschen.
