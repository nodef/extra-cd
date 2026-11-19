Change the working directory, with shortcuts and listing.<br>

▌
🐚 [Shell](https://www.npmjs.com/package/extra-cd.sh),
🖥️ [Command prompt](https://www.npmjs.com/package/extra-cd.cmd),
📜 [Files](https://unpkg.com/extra-cd.sh/).

<br>

The [cd] (or `chdir`) is a [builtin shell command] to *change* the *current*
*working directory* of the *shell*. This package provides a **user-friendly**
**version** of the `cd` command, called `xcd`. It **lists the contents** of a
directory upon changing directory, and also provides the ability to **save**
**absolute and relative shortcuts**. Please check the examples below.

[cd]: https://en.wikipedia.org/wiki/Cd_(command)
[builtin shell command]: https://en.wikipedia.org/wiki/Shell_builtin


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
$ xcd [-] [+/-/=<shortcut>] [path]
# [] -> optional argument
# <> -> argument value


# Change to workspace directory
$ xcd /local/mnt/workspace

# Change to up one directory
$ xcd ..

# Stay at current directory (list contents)
$ xcd .

# Change to previous directory
$ xcd -

# Add current directory as shortcut
$ xcd +work

# Change to root directory
$ xcd /

# Change to workspace directory using shortcut
$ xcd =work

# Remove workspace shortcut
$ xcd -work

# Add relative path shortcut
$ xcd +up3 ../../..

# Go up 3 directories
$ xcd =up3

# Remove relative path shortcut
$ xcd -up3
```

<br>
<br>


## References:

- [cd (command)](https://en.wikipedia.org/wiki/Cd_(command))

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-cd)
