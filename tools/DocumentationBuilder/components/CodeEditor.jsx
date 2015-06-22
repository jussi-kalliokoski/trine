"use strict";

import React from "react";
import CodeMirror from "react-code-mirror";

export class CodeEditor extends React.Component {
    handleChange (event) {
        this.props.onChanged({ code: event.target.value });
    }

    render () {
        return (<div>
            <CodeMirror
                value={this.props.code}
                lineNumbers={true}
                onChange={::this.handleChange}
            />
            <pre>{this.props.output}</pre>
            <button
                onClick={this.props.onHidden}
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                }}
            >Hide REPL</button>
        </div>);
    }
};
