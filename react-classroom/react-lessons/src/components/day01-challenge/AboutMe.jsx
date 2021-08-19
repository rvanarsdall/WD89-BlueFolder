function AboutMe() {
  const style = {
    header: { color: "blue" },
    listItems: { listStyle: "none" },
  };
  return (
    <div>
      <h1 style={style.header}>Rob V</h1>
      <p>Grew up in Fort Wayne, IN</p>
      <ul>
        <li style={style.listItems}>Place 1</li>
        <li style={style.listItems}>Place 2</li>
        <li style={style.listItems}>Place 3</li>
      </ul>
    </div>
  );
}

export default AboutMe;
