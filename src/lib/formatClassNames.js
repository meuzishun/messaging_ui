export const formatClassNames = (styles, classNames) =>
  classNames.map((className) => styles[className]).join(' ');
