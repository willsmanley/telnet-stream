// Generated by CoffeeScript 2.0.2
(function() {
  // telnetSocket.coffee
  // Copyright 2017 Patrick Meade.

  // This program is free software: you can redistribute it and/or modify
  // it under the terms of the GNU Affero General Public License as
  // published by the Free Software Foundation, either version 3 of the
  // License, or (at your option) any later version.

  // This program is distributed in the hope that it will be useful,
  // but WITHOUT ANY WARRANTY; without even the implied warranty of
  // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  // GNU Affero General Public License for more details.

  // You should have received a copy of the GNU Affero General Public License
  // along with this program.  If not, see <http://www.gnu.org/licenses/>.
  //----------------------------------------------------------------------------
  var Socket, TelnetInput, TelnetOutput, TelnetSocket;

  ({Socket} = require("net"));

  ({TelnetInput, TelnetOutput} = require("./telnetStream"));

  TelnetSocket = class TelnetSocket {
    constructor(_socket, opt) {
      var options;
      this._socket = _socket;
      if (!(this._socket instanceof Socket)) {
        throw new Error("required: net.Socket");
      }
      options = opt || {};
      this._in = new TelnetInput(options);
      this._out = new TelnetOutput(options);
      this._socket.pipe(this._in);
      this._out.pipe(this._socket);
    }

    address() {
      return this._socket.address.apply(this._socket, arguments);
    }

    connect() {
      return this._socket.connect.apply(this._socket, arguments);
    }

    destroy() {
      return this._socket.destroy.apply(this._socket, arguments);
    }

    end() {
      return this._socket.end.apply(this._socket, arguments);
    }

    on(name, callback) {
      switch (name) {
        case "command":
        case "data":
        case "do":
        case "dont":
        case "sub":
        case "will":
        case "wont":
          return this._in.on(name, callback);
        default:
          return this._socket.on(name, callback);
      }
    }

    pause() {
      return this._socket.pause.apply(this._socket, arguments);
    }

    ref() {
      return this._socket.ref.apply(this._socket, arguments);
    }

    resume() {
      return this._socket.resume.apply(this._socket, arguments);
    }

    setEncoding() {
      return this._socket.setEncoding.apply(this._socket, arguments);
    }

    setKeepAlive() {
      return this._socket.setKeepAlive.apply(this._socket, arguments);
    }

    setNoDelay() {
      return this._socket.setNoDelay.apply(this._socket, arguments);
    }

    setTimeout() {
      return this._socket.setTimeout.apply(this._socket, arguments);
    }

    unref() {
      return this._socket.unref.apply(this._socket, arguments);
    }

    write() {
      if(process.env.NODE_ENV !== 'production'){
        for(let argument of arguments){
          console.log('WRITE: ', argument)
        }
      }
      return this._out.write.apply(this._out, arguments);
    }

    writeCommand(command) {
      return this._out.writeCommand(command);
    }

    writeDo(option) {
      return this._out.writeDo(option);
    }

    writeDont(option) {
      return this._out.writeDont(option);
    }

    writeSub(option, buffer) {
      return this._out.writeSub(option, buffer);
    }

    writeWill(option) {
      return this._out.writeWill(option);
    }

    writeWont(option) {
      return this._out.writeWont(option);
    }

  };

  exports.TelnetSocket = TelnetSocket;

  //----------------------------------------------------------------------------
// end of telnetSocket.coffee

}).call(this);