#!/bin/bash
function ocd() {

# prepare
local d="${HOME}/.config/nodef/extra-cd"
mkdir -p ${d}

# options
local x="0"
local a="$1"
local c="${a:0:1}"
local f="${d}/${a:1}.ini"
if [[ "${a}" == "-" ]]; then
	x="1" && popd > /dev/null
elif [[ "${c}" == "+" ]]; then
	if [[ "$2" == "" ]]; then pwd > "${f}"; else echo "$2" > "${f}"; fi
elif [[ "${c}" == "-" ]]; then
	rm -f "${f}"
elif [[ "${c}" == "=" ]]; then
	x="1" && pushd $(cat "$f") > /dev/null
else
	x="1" && pushd "${a}" > /dev/null
fi

# list directory
if [[ "${x}" == "1" ]]; then
	ls --color --group-directories-first && echo
fi
}
