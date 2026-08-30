import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.addGlobalData("indexCategories", [
    { tag: "development", heading: "Development" },
    { tag: "games", heading: "Games" },
  ]);
}

export const config = {
  templateFormats: ["md", "njk", "html"],
};
