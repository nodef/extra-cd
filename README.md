Change to directories with listing.
> You can use shortcuts too!

```bash
# install
$ npm install -g extra-cd

# linux:
# a new terminal is necessary
# to use after installing.
```

```bash
$ ecd [-] | +/-/=<shortcut> [path]
# [] -> optional argument
# <> -> argument value


# change to workspace directory
$ ecd /local/mnt/workspace

# change to up one directory
$ ecd ..

# stay at current directory (list contents)
$ ecd .

# change to previous directory
$ ecd -

# add current directory as shortcut
$ ecd +work

# change to root directory
$ ecd /

# change to workspace directory using shortcut
$ ecd =work

# remove workspace shortcut
$ ecd -work

# add relative path shortcut
$ ecd +up3 ../../..

# go up 3 directories
$ ecd =up3

# remove relative path shortcut
$ ecd -up3
```
