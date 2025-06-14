const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 🔧 Custom Filters
  eleventyConfig.addFilter("year", () => {
    return DateTime.now().toFormat("yyyy");
  });

  // ✅ Pass through static assets (like your styles and images)
  eleventyConfig.addPassthroughCopy("assets");

  // ✅ Also pass through the compiled Tailwind output
  eleventyConfig.addPassthroughCopy("dist");

  return {
    dir: {
      input: ".",
      includes: "components",
      layouts: "components/layouts",
      output: "_site"
    }
  };
};