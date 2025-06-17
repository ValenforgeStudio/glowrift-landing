const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 🔧 Custom Filters
  eleventyConfig.addFilter("year", () => {
    return DateTime.now().toFormat("yyyy");
  });

  // ✅ Layout Aliases
  eleventyConfig.addLayoutAlias("base", "base.njk"); // components/layouts/base.njk
  eleventyConfig.addLayoutAlias("layouts/base", "base.njk");

  // ✅ Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy({ "scripts": "scripts" });
  eleventyConfig.addPassthroughCopy("scripts/env.js");


  // ✅ Serve 404.html in dev
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = require('fs').readFileSync('404.html');

        bs.addMiddleware("*", (req, res) => {
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: ".",
      includes: "components",
      layouts: "components/layouts",
      output: "_site"
    }
  };
};