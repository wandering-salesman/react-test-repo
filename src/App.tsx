import React from "react";
import ReactDiffViewer from "react-diff-viewer";
import { parseDiff, Diff, Hunk } from "react-diff-view";
import oldJson from "./old.json";
import newJson from "./new.json";

const App = (props: any) => {
    const [oldCode, setOldCode] = React.useState(JSON.stringify(oldJson, null, 4));
    const [newCode, setNewCode] = React.useState(JSON.stringify(oldJson, null, 4));
    return (
        <div>
            <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
        </div>
    );
}

export default App;
