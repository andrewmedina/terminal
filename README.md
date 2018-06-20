# Recreating a Termina
This is a takehome I did for a company. To run, simply go to the terminal and type `npm install && node terminal.js`. Ensure that input.dat is in the same directory so that the data can be parsed properly.



Your program will simulate:
The creation of subdirectories (folders) for an OS. The input file to your program, input.dat, will contain a sequence of commands that a user might enter from a command line, and the output will contain the operating system’s responses to these commands.

Below is an example of an input file:

dir
mkdir sub6
mkdir sub3
mkdir sub4
dir
mkdir sub4
cd sub3
cd sub3
mkdir sub3
mkdir sub6
mkdir sub4
dir
cd sub6
mkdir sub666
dir
up
up
dir
up

And the listing of the corresponding output on the bash:

Directory Problem by Andrew Marten Medina
Command: dir
Directory of root:
No subdirectories
Command: mkdir sub6
Command: mkdir sub3
Command: mkdir sub4
Command: dir
Directory of root:
sub3 sub4 sub6
Command: mkdir sub4
Subdirectory already exists
Command: cd sub3
Command: cd sub3
Subdirectory does not exist
Command: mkdir sub3
Command: mkdir sub6
Command: mkdir sub4
Command: dir
Directory of root\sub3:
sub3 sub4 sub6
Command: cd sub6
Command: mkdir sub666
Command: dir
Directory of root\sub3\sub6:
sub666
Command: up
Command: up
Command: dir
Directory of root:
sub3 sub4 sub6
Command: up
Cannot move up from root directory
End of Directory Problem by Andrew Marten Medina

The four commands that can appear in the input file are:
dir          Display the path and the subdirectories of the current default directory, the latter in lexicographic order.
mkdir <name> Create a subdirectory of the current default directory with the specified name.
cd <name>    Change the default to a specified subdirectory of the current default directory.
up           Change the default to the parent directory of the current default directory.
