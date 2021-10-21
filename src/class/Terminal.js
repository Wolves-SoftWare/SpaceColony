const l = console.log
const stdout = process.stdout
const stdin = process.stdin
const stderr = process.stderr
const rdl = require("readline")
const EventEmitter = require('events')


class Select extends EventEmitter {
  /**
   *
   * @param opts.question {String}
   * @param opts.options {Array<String>}
   */
  constructor(opts = {
    question: "",
    options: [],
    pointer: ">",
    color: "blue"
  }) {
    super();
    let { question, options, pointer, color } = opts
    this.answers =[]
    this.question = question
    this.options = options
    options.forEach(str => this.answers.push(str.toLowerCase()))

    this.pointer = pointer
    this._color = color
    this.input
    this.cursorLocs = {
      x: 0,
      y: 0
    }
  }

  /**
   *
   * @param question
   * @param options
   */
  new({question, options}){
    if(!question || !options.length) return
    this.question = question
    this.options = options
  }

  start() {
    if(!this.question || !this.options) return
    console.clear()
    stdout.write(this.question + '\n')
    for (let opt = 0; opt < this.options.length; opt++) {
      this.options[opt] = this.pointer + " " + this.options[opt]
      if (opt === this.options.length - 1) {
        this.input = this.options.length - 1
        this.options[opt] += '\n'
        stdout.write(Select.color(this.options[opt], this._color))
      } else {
        this.options[opt] += '\n'
        stdout.write(this.options[opt])
      }
      this.cursorLocs.y = opt + 1
    }

    stdin.setRawMode(true)
    stdin.resume()
    stdin.setEncoding('utf-8')
    Select.hideCursor()
    stdin.on("data", Select.pn(this))
  }

  static pn(self) {
    return (c) => {

      switch (c) {
        case '\u0004':
        case '\r':
        case '\n':
          return Select.enter(self)
        case '\u0003':
          return Select.ctrlc(self)
        case '\u001b[A':
          return Select.upArrow(self)
        case '\u001b[B':
          return Select.downArrow(self)

      }
    }
  }

  static enter(self) {
    stdin.removeListener('data', Select.pn)
    stdin.setRawMode(false)
    stdin.pause()
    Select.showCursor()
    rdl.cursorTo(stdout, 0, self.options.length + 1)
    self.emit('selected', self.answers[self.input])

  }

  static ctrlc(self) {
    stdin.removeListener('data', self.pn)
    stdin.setRawMode(false)
    stdin.pause()
    self.showCursor()
  }

  static upArrow(self) {
    let y = self.cursorLocs.y
    rdl.cursorTo(stdout, 0, y)
    stdout.write(self.options[y - 1])
    if (self.cursorLocs.y === 1) {
      self.cursorLocs.y = self.options.length
    } else {
      self.cursorLocs.y--
    }
    y = self.cursorLocs.y
    rdl.cursorTo(stdout, 0, y)
    stdout.write(Select.color(self.options[y - 1], self._color))
    self.input = y - 1
  }

  static downArrow(self) {
    let y = self.cursorLocs.y
    rdl.cursorTo(stdout, 0, y)
    stdout.write(self.options[y - 1])
    if (self.cursorLocs.y === self.options.length) {
      self.cursorLocs.y = 1
    } else {
      self.cursorLocs.y++
    }
    y = self.cursorLocs.y
    rdl.cursorTo(stdout, 0, y)
    stdout.write(Select.color(self.options[y - 1], self._color))
    self.input = y - 1
  }
  static hideCursor() {
    stdout.write("\x1B[?25l")
  }

  static showCursor() {
    stdout.write("\x1B[?25h")
  }

  static color(str, colorName = "yellow") {
    const colors = {
      "yellow": [33, 89],
      "blue": [34, 89],
      "green": [32, 89],
      "cyan": [35, 89],
      "red": [31, 89],
      "magenta": [36, 89]
    }
    const _color = colors[colorName]
    const start = "\x1b[" + _color[0] + "m"
    const stop = "\x1b[" + _color[1] + "m\x1b[0m"
    return start + str + stop
  }
}


module.exports = Select
global.Select = Select
