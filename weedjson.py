#!/usr/bin/python

import sys
import re
import json
from collections import defaultdict

inp = open(sys.argv[1], 'r')
words = defaultdict(list)
word_re = re.compile(r'^[a-z]{3,}$')
prev_line = None

for line in inp.readlines():
    line = line.strip()

    if not word_re.search(line):
        continue
    elif line[-1] == 's' and prev_line and line[0:-1] == prev_line:
        continue

    prev_line = line
    words[len(line)].append(line)

inp.close()

out = open(sys.argv[2], 'w')
out.write(json.dumps(words, sort_keys=True, separators=(',', ':')))
out.close()
