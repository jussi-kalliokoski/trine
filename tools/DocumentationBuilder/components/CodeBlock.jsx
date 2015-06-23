"use strict";

import React from "react";
import highlight from "highlight.js";

export class CodeBlock extends React.Component {
    constructor () {
        super();

        this.state = {
            hovered: false,
        };
    }

    componentDidMount () {
        const codeNode = this.refs.code.getDOMNode();
        highlight.highlightBlock(codeNode);
    }

    openInEditor () {
        const header = this.props.header ? this.props.header + "\n\n" : "";

        this.props.onCodeEditorOpened({
            code: header + this.props.code,
        });
    }

    handleMouseLeave () {
        this.setState({ hovered: false });
    }

    handleMouseOver () {
        this.setState({ hovered: true });
    }

    render () {
        const language = this.props.language ? "language-" + this.props.language : "";
        const button = !this.state.hovered ? null : <button
            onClick={::this.openInEditor}
            style={{
                position: "absolute",
                right: 0,
                top: 0,
            }}
        >Try it!</button>;

        return (<div
            onMouseOver={::this.handleMouseOver}
            onMouseLeave={::this.handleMouseLeave}
            style={{ position: "relative" }}
        >
            <pre className={language}><code ref="code" className={language}>
                { this.props.code }
            </code></pre>
            { button }
        </div>);
    }
};
