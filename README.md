Change to directories with shortcut names in Linux Terminal.


## install

```bash
# source the script in .bashrc to install
$ echo "source <path to ocd.sh>" >> ~/.bashrc
```


## usage

```bash
$ ocd [- | [+<shortcut> [path] | -<shortcut> | =<shortcut>]]

# [] -> optional argument
# <> -> argument value
```

```bash
# change to workspace directory
$ ocd /local/mnt/workspace

# change to up one directory
$ ocd ..

# stay at current directory (list contents)
$ ocd .

# change to previous directory
$ ocd -

# add current directory as shortcut
$ ocd +work

# change to root directory
$ ocd /

# change to workspace directory using shortcut
$ ocd =work

# remove workspace shortcut
$ ocd -work

# add relative path shortcut
$ ocd +up3 ../../..

# go up 3 directories
$ ocd =up3

# remove relative path shortcut
$ ocd -up3
```
