import { ArrowRight } from "react-bootstrap-icons";
import Href from "../../../components/Href";

const Container = (props) => {
    const title = props.title;
    const label = props.content.label;
    const desc = props.content.desc;
    const content = props.content.struct;
    const external_source = props.content.external_source;
    const link = props.content.link;
    const prefix = props.prefix;

    return (
        <div id={prefix+label} className="mt-5">
            <h4>{title}</h4>
            { desc && desc != '' ? <div className="mb-3">{desc}</div> : '' }
            <table className="table table-striped-columns" style={{width:"auto"}}>
                <tbody>
                    { content.map((entry, index)=> <tr key={typeof(entry.name) == 'string' ? entry.name : index}><td className="d-none"></td><td>{entry.name}</td><td>{entry.desc}</td></tr>) }
                </tbody>
            </table>
            { link ? <div><ArrowRight className="me-2"/><Href text={link.label} href={link.url}/></div> : '' }
            { external_source ? <div>{external_source}</div> : '' }
        </div>
    );
};

export default Container;
