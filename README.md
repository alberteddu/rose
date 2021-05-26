@lbrto/rose
===========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@lbrto/rose.svg)](https://npmjs.org/package/@lbrto/rose)
[![Downloads/week](https://img.shields.io/npm/dw/@lbrto/rose.svg)](https://npmjs.org/package/@lbrto/rose)
[![License](https://img.shields.io/npm/l/@lbrto/rose.svg)](https://github.com/alberteddu/rose/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @lbrto/rose
$ rose COMMAND
running command...
$ rose (-v|--version|version)
@lbrto/rose/1.0.4 darwin-x64 node-v15.14.0
$ rose --help [COMMAND]
USAGE
  $ rose COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rose hello [FILE]`](#rose-hello-file)
* [`rose help [COMMAND]`](#rose-help-command)
* [`rose update [CHANNEL]`](#rose-update-channel)

## `rose hello [FILE]`

describe the command here

```
USAGE
  $ rose hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ rose hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/alberteddu/rose/blob/v1.0.4/src/commands/hello.ts)_

## `rose help [COMMAND]`

display help for rose

```
USAGE
  $ rose help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `rose update [CHANNEL]`

update the rose CLI

```
USAGE
  $ rose update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_
<!-- commandsstop -->
