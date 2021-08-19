function ChildComponent(props) {
  const { name, count } = props.votes;
  // Final Output: Abe Lincoln had a total vot count of 139033
  return (
    <div>
      {name} had a total vot count of {count}.
    </div>
  );
}

export default ChildComponent;
