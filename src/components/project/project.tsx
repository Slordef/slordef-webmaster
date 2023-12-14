import './project.css';

export function Project(props: React.PropsWithChildren) {
  return (
    <section id={'project'}>
      <div className="content">{props.children}</div>
    </section>
  );
}
