/// <reference types="@rsbuild/core/types" />
// Taking png images as an example
declare module "*.png" {
    const content: string;
    export default content;
  }
  declare module "*.svg" {
    const content: string;
    export default content;
  }
  