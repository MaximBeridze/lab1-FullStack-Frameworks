# Project proposal

* Name: Maxim Beridze
* Project title: Spire Run Tracker
* Pitch: Track Slay the Spire 2 runs and see how win rates vary by character and by which cards and relics were present at the end of a run.
* Target users: Slay the Spire 2 players who want to review their runs and compare results across characters, difficulty levels, and game modes.

## Pages

| URL | Content | Dynamic segment? | Rendering strategy and why |
| --- | --- | --- | --- |
| `/` | Public dashboard with wins, losses, and character win rates | No | Prerender for Milestone 1 because every visitor sees the same sample data. Refresh after writes in later milestones. |
| `/runs` | Run history with character, Ascension level, game mode, and result | No | Render on request so the list can show new runs and respond to filters as those features are added. |
| `/runs/[id]` | One run's outcome, final deck, and relics | Yes | Render on request so a newly logged run has a page immediately. Use the run in the page title and return a custom 404 for unknown IDs. |
| `/characters/[slug]` | Public character statistics with run counts, win rates, and a short explanation of how they are calculated | Yes | Prerender known characters so each has a descriptive, indexable page. Refresh the summaries when the underlying runs change. |

The first three routes are the Milestone 1 scope. Start with fictional records in JSON. The character detail pages and card and relic breakdowns can follow once the run history and win-rate calculations work.

## Data

* **Character:** ID, slug, and display name.
* **Run:** ID, character ID, played date, Ascension level, game mode, result (win, loss, or abandoned), final deck, and relics held at the end.
* One character can have many runs; each solo run belongs to one character. For the first version, store card and relic IDs as lists on the run.

For win rates, use completed wins and losses, show the number of runs behind each percentage, and keep game modes separate. For a card or relic, count each qualifying run once when the item was present at the end, even if the deck contains multiple copies. This describes the observed outcomes without attributing wins to an item.

## Write actions

In later milestones, users can log a solo run, correct an existing entry, or delete it. Start with manual entry. A local import from the game's run history can follow after the core workflow is working. The submitted demo uses fictional data and requires no login.

## Repository

GitHub URL: https://github.com/MaximBeridze/lab1-FullStack-Frameworks
