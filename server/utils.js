function getPostData(req, res) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      console.error(error);
    }
  });
}

module.exports = {
  getPostData,
};
