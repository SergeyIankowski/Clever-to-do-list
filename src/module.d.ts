declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.png";
declare module "*.svg";
declare module "*.webp";
declare module "*.scss" {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}
