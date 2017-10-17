# Fair Random Strings
Fair Random Strings solves a few problems with randomly choosing strings from an array.

It is not random in the sense that once a string gets chosen, it is no longer an option until all strings have been chosen, at which point the array returns to it's original length.

Fair Random Strings also saves it's data in a local JSON file, so that the program does not have to always be running.

## Weighted Random Strings
Any item may be selected at any time, but an item that has not been selected will receive a higher chance of being selected the next time around. 
___
## Installation
Clone this repo, edit the stringList array, and run in node.
