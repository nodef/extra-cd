#!/usr/bin/env bash

# Get present script directory.
# - https://stackoverflow.com/a/246128/1413259
psd() {
  z="${BASH_SOURCE[0]}"
  if [ -h "$z" ]; then z="$(readlink "$z")"; fi
  cd "$(dirname "$0")" && cd "$(dirname "$z")" && pwd
}


# Change the working directory, with shortcuts and listing.
extra-cd() {
# Setup config directory
local d="$HOME/.config/npm/extra-cd"
mkdir -p "$d"

# Process arguments
local l="0"
local a="$1"
local c="${a:0:1}"
local f="$d/${a:1}.txt"
if [[ "$1" == "--help" ]]; then
	less "$(psd)/README.md"
elif [[ "$1" == "-" ]]; then
	l="1" && popd > /dev/null
elif [[ "$c" == "+" ]]; then
	if [[ "$2" == "" ]];  then pwd > "$f"; else echo "$2" > "$f"; fi
elif [[ "$c" == "-" ]]; then
	rm -f "$f"
elif [[ "$c" == "=" ]]; then
	l="1" && pushd $(cat "$f") > /dev/null
else
	l="1" && pushd "$1" > /dev/null
fi

# List directory
if [[ "$l" == "1" ]]; then
	ls --color --group-directories-first && echo
fi
}


# Change the working directory, with shortcuts and listing.
ecd() {
extra-cd "$@"
}
