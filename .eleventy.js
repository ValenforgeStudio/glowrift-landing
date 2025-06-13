module.exports = function(eleventyConfig) {
  // Pass through static assets (like your styles and images)
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};