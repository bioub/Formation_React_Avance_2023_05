import type { RouteComponentProps } from 'react-router-dom';

type HelloProps = RouteComponentProps<{
  name: string;
}>;

export default function Hello(props: HelloProps) {
  return <div className="Hello">Hello {props.match?.params?.name}</div>;
}
