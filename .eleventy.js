module.exports = (config) => {
  config.addPassthroughCopy('./src/images/');

  // Returns work items, sorted by display order
  config.addCollection('work', (collection) => {
    return collection
      .getFilteredByGlob('./src/work/*.md')
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      );
  });
  // same as above but additionally filtered by the featured flag
  config.addCollection('featuredWork', collection => {
    return collection
      .getFilteredByGlob('./src/work/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1))
      .filter(x => x.data.featured);
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
