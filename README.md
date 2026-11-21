# The Ramp

[![the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/De4i/held-open-poem/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/De4i/held-open-poem/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

A short poem about permission: a man builds a ramp for someone
who never asked for one, and the man it was built for takes his
power back by judging the gift — make it gentler, I like the
hill. The poem is written to /output/entry.txt by a tiny
deterministic program.

Competition: [make.fun — The poem about permission](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

## Run

```sh
node main.ts
```

`main.ts` (Node, standard library only) writes the poem it holds as
a constant to `$MAKEFUN_OUTPUT_DIR/entry.txt`, or to
`/output/entry.txt` when the variable is not set, creating the
output directory if needed. The output is byte-identical on every
run.

## License

MIT — see [LICENSE](LICENSE).
