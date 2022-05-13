Change the working directory, with shortcuts and listing.<br>
🐚 [Shell](https://www.npmjs.com/package/extra-cd.sh),
🖥️ [Command prompt](https://www.npmjs.com/package/extra-cd.cmd),
📜 [Files](https://unpkg.com/extra-cd.sh/).

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>

```bash
# Install on Linux
$ npm install -g extra-cd.sh
$ source "$(which extra-cd)"

# Install on Windows
$ npm install -g extra-cd.cmd
```

<br>

```bash
$ ecd [-] [+/-/=<shortcut>] [path]
# [] -> optional argument
# <> -> argument value


# Change to workspace directory
$ ecd /local/mnt/workspace

# Change to up one directory
$ ecd ..

# Stay at current directory (list contents)
$ ecd .

# Change to previous directory
$ ecd -

# Add current directory as shortcut
$ ecd +work

# Change to root directory
$ ecd /

# Change to workspace directory using shortcut
$ ecd =work

# Remove workspace shortcut
$ ecd -work

# Add relative path shortcut
$ ecd +up3 ../../..

# Go up 3 directories
$ ecd =up3

# Remove relative path shortcut
$ ecd -up3
```

<br>
<br>


## References:

- [cd (command)](https://en.wikipedia.org/wiki/Cd_(command))

<br>
<br>


[![](https://img.youtube.com/vi/aZ1Zp3gNcEI/maxresdefault.jpg)](https://www.youtube.com/watch?v=aZ1Zp3gNcEI)
