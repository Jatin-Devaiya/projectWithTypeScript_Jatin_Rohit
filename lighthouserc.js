module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start", // or "live-server" or "http-server ./"
      url: ["http://localhost:3000"], // adjust as needed
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
