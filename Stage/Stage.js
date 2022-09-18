/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound(
        "wth//Honolulu March",
        "./Stage/sounds/wth//Honolulu March.mp3"
      ),
      new Sound(
        "wth//Every Hour On The Isle",
        "./Stage/sounds/wth//Every Hour On The Isle.mp3"
      ),
      new Sound(
        "wth//Shores of Hale'iwa",
        "./Stage/sounds/wth//Shores of Hale'iwa.mp3"
      ),
      new Sound("wth//Hula Blues", "./Stage/sounds/wth//Hula Blues.mp3"),
      new Sound(
        "wth//Aloha No O Honolulu",
        "./Stage/sounds/wth//Aloha No O Honolulu.mp3"
      ),
      new Sound(
        "wth//Hawaiian Tattoo",
        "./Stage/sounds/wth//Hawaiian Tattoo.mp3"
      ),
      new Sound("wth//Sarinande", "./Stage/sounds/wth//Sarinande.mp3"),
      new Sound("wth//Awapuhi", "./Stage/sounds/wth//Awapuhi.mp3"),
      new Sound(
        "wth//Hawaiian Pussycat",
        "./Stage/sounds/wth//Hawaiian Pussycat.mp3"
      ),
      new Sound("wth//Hilo March", "./Stage/sounds/wth//Hilo March.mp3"),
      new Sound("wth//Mamae", "./Stage/sounds/wth//Mamae.mp3"),
      new Sound(
        "wth//Kamakani Kaili Aloha",
        "./Stage/sounds/wth//Kamakani Kaili Aloha.mp3"
      ),
      new Sound(
        "wth//Jauh Dari Ambon",
        "./Stage/sounds/wth//Jauh Dari Ambon.mp3"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "ntsctopal" },
        this.whenIReceiveNtsctopal
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "paltontsc" },
        this.whenIReceivePaltontsc
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "33to45" },
        this.whenIReceive33to45
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "45to78" },
        this.whenIReceive45to78
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "33to78" },
        this.whenIReceive33to78
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "45to33" },
        this.whenIReceive45to33
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "78to33" },
        this.whenIReceive78to33
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "78to45" },
        this.whenIReceive78to45
      ),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "next" }, this.whenIReceiveNext),
      new Trigger(
        Trigger.BROADCAST,
        { name: "previous" },
        this.whenIReceivePrevious
      ),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.KEY_PRESSED, { key: "j" }, this.whenKeyJPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "l" }, this.whenKeyLPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "k" }, this.whenKeyKPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "h" }, this.whenKeyHPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "g" }, this.whenKeyGPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "e" }, this.whenKeyEPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "q" }, this.whenKeyQPressed),
      new Trigger(Trigger.BROADCAST, { name: "down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "up" }, this.whenIReceiveUp),
      new Trigger(
        Trigger.BROADCAST,
        { name: "432440" },
        this.whenIReceive432440
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "440432" },
        this.whenIReceive440432
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "o" }, this.whenKeyOPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "p" }, this.whenKeyPPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "t" }, this.whenKeyTPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "wacky" }, this.whenIReceiveWacky),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wacky2" },
        this.whenIReceiveWacky2
      ),
      new Trigger(Trigger.BROADCAST, { name: "loop" }, this.whenIReceiveLoop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];

    this.audioEffects.volume = 88;

    this.vars.temp = 1;
    this.vars.speed = 0;
    this.vars.wth = 1;
    this.vars.wacky = 0;
    this.vars.vibrato = 0;
    this.vars.angle = 2;
    this.vars.effect = 0;
    this.vars.wacky2 = 0;
    this.vars.state = 0;
    this.vars.loop = 0;

    this.watchers.speed = new Watcher({
      label: "speed",
      style: "slider",
      visible: true,
      value: () => this.vars.speed,
      setValue: value => {
        this.vars.speed = value;
      },
      x: 240,
      y: 180
    });
    this.watchers.wth = new Watcher({
      label: "wth",
      style: "normal",
      visible: true,
      value: () => this.vars.wth,
      x: 240,
      y: 141
    });
    this.watchers.loop = new Watcher({
      label: "loop",
      style: "normal",
      visible: true,
      value: () => this.vars.loop,
      x: 240,
      y: 113
    });
  }

  *whenIReceiveNtsctopal() {
    this.vars.speed += (Math.log(1001 / 960) / Math.log(2)) * 120;
  }

  *whenIReceivePaltontsc() {
    this.vars.speed += (Math.log(960 / 1001) / Math.log(2)) * 120;
  }

  *whenIReceive33to45() {
    this.vars.speed += (Math.log(45 / (100 / 3)) / Math.log(2)) * 120;
    this.vars.temp = 2;
  }

  *whenIReceive45to78() {
    this.vars.speed += (Math.log(78 / 45) / Math.log(2)) * 120;
    this.vars.temp = 3;
  }

  *whenIReceive33to78() {
    this.vars.speed += (Math.log(78 / (100 / 3)) / Math.log(2)) * 120;
    this.vars.temp = 3;
  }

  *whenIReceive45to33() {
    this.vars.speed += (Math.log(100 / 3 / 45) / Math.log(2)) * 120;
    this.vars.temp = 1;
  }

  *whenIReceive78to33() {
    this.vars.speed += (Math.log(100 / 3 / 78) / Math.log(2)) * 120;
    this.vars.temp = 1;
  }

  *whenIReceive78to45() {
    this.vars.speed += (Math.log(45 / 78) / Math.log(2)) * 120;
    this.vars.temp = 2;
  }

  *whenIReceiveReset() {
    this.vars.speed = 0;
    this.vars.temp = 1;
  }

  *whenKeyLeftArrowPressed() {
    this.broadcast("down");
  }

  *whenKeyUpArrowPressed() {
    this.broadcast("up");
  }

  *whenGreenFlagClicked() {
    this.vars.speed = 0;
    while (true) {
      this.audioEffects.pitch = this.vars.speed;
      yield;
    }
  }

  *whenKeyRightArrowPressed() {
    this.broadcast("up");
  }

  *whenKeyDownArrowPressed() {
    this.broadcast("down");
  }

  *whenGreenFlagClicked2() {
    this.vars.wth = 1;
    this.broadcast("play");
    while (true) {
      if (this.vars.wth > 13) {
        this.vars.wth = 1;
      }
      if (this.vars.wth < 1) {
        this.vars.wth = 1;
      }
      yield;
    }
  }

  *whenIReceiveNext() {
    if (this.vars.loop == 0) {
      this.vars.wth += 1;
      this.broadcast("play");
    } else {
      this.broadcast("loop");
    }
  }

  *whenIReceivePrevious() {
    this.vars.wth += -1;
    this.broadcast("play");
  }

  *whenIReceivePlay() {
    this.stopAllSounds();
    yield* this.playSoundUntilDone(this.vars.wth);
    this.broadcast("next");
  }

  *whenKeyJPressed() {
    this.broadcast("previous");
  }

  *whenKeyLPressed() {
    this.broadcast("next");
  }

  *whenKeyKPressed() {
    this.broadcast("play");
  }

  *whenKeySpacePressed() {
    this.broadcast("reset");
  }

  *whenKeyHPressed() {
    this.broadcast("ntsctopal");
  }

  *whenKeyGPressed() {
    this.broadcast("paltontsc");
  }

  *whenKeyEPressed() {
    if (this.vars.temp == 1) {
      this.broadcast("33to78");
    }
    if (this.vars.temp == 2) {
      this.broadcast("45to78");
    }
  }

  *whenKeyWPressed() {
    if (this.vars.temp == 1) {
      this.broadcast("33to45");
    }
    if (this.vars.temp == 3) {
      this.broadcast("78to45");
    }
  }

  *whenKeyQPressed() {
    if (this.vars.temp == 2) {
      this.broadcast("45to33");
    }
    if (this.vars.temp == 3) {
      this.broadcast("78to33");
    }
  }

  *whenIReceiveDown() {
    this.vars.speed = Math.round(this.vars.speed);
    this.vars.speed += -1;
  }

  *whenIReceiveUp() {
    this.vars.speed = Math.round(this.vars.speed);
    this.vars.speed += 1;
  }

  *whenIReceive432440() {
    this.vars.speed += (Math.log(440 / 432) / Math.log(2)) * 120;
  }

  *whenIReceive440432() {
    this.vars.speed += (Math.log(432 / 440) / Math.log(2)) * 120;
  }

  *whenKeyOPressed() {
    this.broadcast(440432);
  }

  *whenKeyPPressed() {
    this.broadcast(432440);
  }

  *whenKeyRPressed() {
    this.vars.wacky += 1;
    this.broadcast("wacky");
  }

  *whenKeyTPressed() {
    this.vars.wacky2 += 1;
    this.broadcast("wacky2");
  }

  *whenGreenFlagClicked3() {
    this.vars.wacky = 0;
    this.vars.wacky2 = 0;
    this.vars.loop = 0;
    this.vars.temp = 1;
  }

  *whenIReceiveWacky() {
    this.vars.state = this.vars.speed;
    if (this.vars.wacky2 == 1) {
      return;
    } else {
      while (true) {
        if (this.vars.wacky == 1) {
          while (true) {
            this.vars.speed += -120;
            yield* this.wait(0.01);
            this.vars.speed += 120;
            yield* this.wait(0.01);
            yield;
          }
        }
        if (this.vars.wacky == 2) {
          this.vars.speed = this.vars.state;
          this.vars.wacky = 0;
        }
        yield;
      }
    }
  }

  *whenIReceiveWacky2() {
    this.vars.state = this.vars.speed;
    if (this.vars.wacky == 1) {
      return;
    } else {
      while (true) {
        if (this.vars.wacky2 == 1) {
          while (true) {
            this.vars.speed += 120;
            yield* this.wait(0.01);
            this.vars.speed += -120;
            yield* this.wait(0.01);
            yield;
          }
        }
        if (this.vars.wacky2 == 2) {
          this.vars.speed = this.vars.state;
          this.vars.wacky2 = 0;
        }
        yield;
      }
    }
  }

  *whenIReceiveLoop() {
    while (true) {
      yield* this.playSoundUntilDone(this.vars.wth);
      if (this.vars.loop == 0) {
        this.broadcast("next");
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.vars.loop == 2) {
        this.vars.loop = 0;
      }
      yield;
    }
  }
}
