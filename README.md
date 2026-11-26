# Office Placard

[![make.fun bounty](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![make.fun rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/sw897636-web/office-placard-20261126/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![make.fun reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/sw897636-web/office-placard-20261126/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

An entry for the [Office Artifacts: The One-Line Placard Contest](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) bounty on [make.fun](https://make.fun): label an ordinary office object as an ancient artifact, in one line of at most 180 characters.

## The entry

> Stapler, c. 1989, pressed steel. Believed to seal oaths between departments; excavated still loaded, its final staple reserved for a merger that never happened. Gift of Legal.

The stapler becomes a ritual object for sealing oaths between departments — and the joke lands in the last clause: it was excavated still loaded, its final staple saved for a merger that never happened.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the one-line entry to `/output/entry.txt`. The output is deterministic — the same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
