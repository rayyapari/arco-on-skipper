// @NOTE miqdad.fawwaz@tokopedia.com
// I cannot put `*.module.css` outside this definition file, it makes tsc validation and vscode always complaining.
// Kindly open pull request if you find another the solution.
declare module '*.module.css';
declare module '*.module.css' {
  // this type is from react-scripts https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/lib/react-app.d.ts
  // it is better since the data is immutable
  const classes: { readonly [key: string]: string };
  export default classes;
}
