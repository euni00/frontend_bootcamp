const Counter = {
  count: 0,

  getCount: function () {
    return this.count;
  },

  resetCount: function () {
    this.count = 0;
  },

  incrementSync: function () {
    // 동기적으로 3초 뒤에 this.count를 증가하세요.
    // while 문 안에서, 또 다른 Date.now()를 구하여 3000을 초과하는 순간
    // while 문을 벗어나게 구현하세요.
    const currentTime = Date.now();

    while (true) {
      const now = Date.now();
      if (now - currentTime > 3000) break;
    }

    this.count++;
  },

  incrementAsync: function (callback) {
    // 비동기적으로 3초 뒤에 this.count를 증가하며 callback을 호출하도록 구현하세요.
    // setTimeout을 활용하세요.
    setTimeout(() => {
      this.count++;
      callback();
    }, 3000);
  },
};

export default Counter;
