export default function Hello(props: any) {
  return <div className="Hello">Hello {props.match?.params?.name}</div>
}