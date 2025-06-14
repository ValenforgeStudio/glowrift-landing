module.exports = function(eleventyConfig) {
  // Pass through static assets (like your styles and images)
  eleventyConfig.addPassthroughCopy("assets");

  // ✅ Also pass through the compiled Tailwind output
  eleventyConfig.addPassthroughCopy("dist");

  return {
    dir: {
      input: ".",
      includes: "components",
      output: "_site"
    }
  };
};