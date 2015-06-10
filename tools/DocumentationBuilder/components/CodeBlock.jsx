"use strict";

import React from "react";

export class CodeBlock extends React.Component {
    render () {
        const language = this.props.language ? "language-" + this.props.language : "";
        return (<pre className={language}><code className={language}>
            { this.props.code }
        </code></pre>)
    }
};
