Change to directories with shortcut names in Linux Terminal.


## install

```bash
# source the script in .bashrc to install
$ echo "source <path to ocd.sh>" >> ~/.bashrc
```


## usage

```bash
$ ecd [- | [+<shortcut> [path] | -<shortcut> | =<shortcut>]]

# [] -> optional argument
# <> -> argument value
```

```bash
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
