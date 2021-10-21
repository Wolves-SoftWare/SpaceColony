const EventLoader = require("./eventLoader");
const EventEmitter = require('events')
const stdout = process.stdout
const stdin = process.stdin
const stderr = process.stderr
const rdl = require("readline")
const fs = require("fs");
const Colony = require('./Colony')
const Many = require('extends-classes');

class Game extends EventEmitter{
  constructor() {
    super()

    this.colony = new Colony()


    this.answers =[]
    this.question
    this.options
    this.pointer = ">"
    this._color = "blue"
    this.input
    this.cursorLocs = {
      x: 0,
      y: 0
    }
  }

  async startGame(){
    this.events = await EventLoader();
    [...this.events.values()].map((event) => {
      this.on(event.name, (...args) => event.func(this, ...args));
    });
    console.log(this.events)
    this.emit('startGame',this)
  }

  /**
   * FIXME
   *  - When trying to select
   *
   */

  newTerm({question, options}){
    if(!question || !options.length) return
    this.question = question
    this.options = options
    this.options.forEach(str => this.answers.push(str.toLowerCase()))
  }

  startTerminal() {
    if(!this.question || !this.options) return
    console.clear()
    stdout.write(this.question + '\n')
    for (let opt = 0; opt < this.options.length; opt++) {
      this.options[opt] = this.pointer + " " + this.options[opt]
      if (opt === this.options.length - 1) {
        this.input = this.options.length - 1
        this.options[opt] += '\n'
        stdout.write(Game.color(this.options[opt], this._color))
      } else {
        this.options[opt] += '\n'
        stdout.write(this.options[opt])
      }
      this.cursorLocs.y = opt + 1
    }

    stdin.setRawMode(true)
    stdin.resume()
    stdin.setEncoding('utf-8')
    Game.hideCursor()
    stdin.on("data", Game.pn(this))
  }

  static pn(self) {
    return (c) => {

      switch (c) {
        case '\u0004':
        case '\r':
        case '\n':
          return Game.enter(self)
        case '\u0003':
          return Game.ctrlc()
        case '\u001b[A':
          return Game.upArrow(self)
        case '\u001b[B':
          return Game.downArrow(self)

      }
    }
  }

  static enter(self) {
    rdl.cursorTo(stdout, 0, self.options.length + 1)
    self.emit('selected',self.answers[self.input])

  }

  static ctrlc() {
    process.exit(0)
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
    stdout.write(Game.color(self.options[y - 1], self._color))
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
    stdout.write(Game.color(self.options[y - 1], self._color))
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
module.exports = Game
