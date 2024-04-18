// export default function PracContainer(props) {
    // const {children} = props;
export default function PracContainer({children}) {
  return (
    <>
    <header>PostList</header>
    <main>{children}</main>
    <footer>footer</footer>
    </>
  );
}
