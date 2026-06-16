# SymptomTrack — landing page (source copy)

Canonical deploy target: **public repo** [`rosteoman/symptomtrack-landing`](https://github.com/rosteoman/symptomtrack-landing).

Live URL: **https://rosteoman.github.io/symptomtrack-landing/**

The iOS app stays in the **private** repo `rosteoman/SymptomTrack`. Only this static site is public.

## Deploy (one-time setup + updates)

```bash
./scripts/setup-babenberg-studies-pages.sh
```

Requires [GitHub CLI](https://cli.github.com/) (`brew install gh`) and `gh auth login`.

After setup, copy changes from `landing/` to `../babenberg-studies.github.io/` and push, or edit directly in the Pages repo.

## Local preview

Open `index.html` in Finder (double-click), or:

```bash
python3 -m http.server 8765
# → http://127.0.0.1:8765
```

## App Store

- EN: https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=en-US
- ES: https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=es-ES

Legal: https://rvbservices.wixsite.com/babenberg-studies/legal
