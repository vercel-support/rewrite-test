module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/waypoint/index.js",
      },
    ];
  },
};
