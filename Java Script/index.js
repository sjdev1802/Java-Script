// creating a stopwatch in javaScript

function StopWatch() {
  let startTime = 0,
    duration = 0,
    timerRunning = false;

  let timerInc = function () {
    if (timerRunning) {
      duration += 0.01;
    }
  };

  this.reset = function () {
    duration = 0;
  };
  this.start = function () {
    if (timerRunning) {
      throw new Error("Already Running.");
    }
    timerRunning = true;
    setInterval(timerInc, 10);
  };
  this.stop = function () {
    if (!timerRunning) {
      throw new Error("Not Running.");
    }
    timerRunning = false;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

let stopwatch = new StopWatch();
