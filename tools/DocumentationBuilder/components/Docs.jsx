"use strict";

import React from "react";
import { Category } from "./Category";
import { CodeEditor } from "./CodeEditor";

function print (...args) {
    return args.map(function (arg) {
        if ( typeof arg === "string" ) {
            return arg;
        } else if ( typeof arg === "function" ) {
            return arg.toString();
        } else {
            return JSON.stringify(arg, null, 2);
        }
    }).join(" ");
}

function evaluate (code) {
    const capturingConsole = Object.create(console);
    const logs = [];

    void [
        "log",
        "info",
        "debug",
        "error",
    ].forEach((logLevel) => {
        capturingConsole[logLevel] = (...args) => {
            console[logLevel](...args);

            const output = print(...args);
            logs.push(output);
        };
    });

    void new Function("console", code)(capturingConsole);

    return logs.join("\n");
}

export class Docs extends React.Component {
    constructor () {
        super();

        this.state = {
            codeEditorOpen: false,
            codeEditorCode: "",
            codeEditorOutput: "",
        };
    }

    updateCodeEditorOutput () {
        clearTimeout(this.compileTimer);
        this.compileTimer = setTimeout(() => {
            const { code } = babel.transform(this.state.codeEditorCode, {
                stage: 0,
                filename: "repl",
            });

            const output = evaluate(code);
            this.setState({ codeEditorOutput: output });
        }, 1000);
    }

    handleCodeEditorCodeChanged ({ code }) {
        this.setState({
            codeEditorCode: code,
            codeEditorOutput: "",
        });

        this.updateCodeEditorOutput();
    }

    handleCodeEditorHidden () {
        this.setState({
            codeEditorOpen: false,
        });
    }

    renderCodeEditor () {
        if ( !this.state.codeEditorOpen ) { return null; }

        return (<CodeEditor
            code={this.state.codeEditorCode}
            onHidden={::this.handleCodeEditorHidden}
            onChanged={::this.handleCodeEditorCodeChanged}
            output={this.state.codeEditorOutput}
        />);
    }

    handleCodeEditorOpened ({ code }) {
        this.setState({
            codeEditorOpen: true,
            codeEditorCode: code,
        });
    }

    renderTableOfContents () {
        const categories = this.props.categories.map((category) => {
            const modules = category.modules.map((module) => {
                const exports = module.exports.map((exp) => {
                    return (<li key={exp.name}>
                        <a href={"#" + "categories-" + category.name + "-modules-" + module.module + "-exports-" + exp.name}>
                            <code>{ exp.name + "()" }</code>
                        </a>
                    </li>)
                });

                return (<li key={module.module}>
                    <a href={"#categories-" + category.name + "-modules-" + module.module}>{module.module}</a>
                    <ul>{exports}</ul>
                </li>);
            });

            return (<li key={category.name}>
                <a href={"#categories-" + category.name}>{category.name}</a>
                <ul>{modules}</ul>
            </li>);
        });

        return (<section id="table-of-contents">
            <h2>Table of Contents</h2>
            <ul>{categories}</ul>
        </section>);
    }

    renderDocumentation () {
        const categories = this.props.categories.map((category) => <Category
            key={category.name}
            onCodeEditorOpened={::this.handleCodeEditorOpened}
            category={category}
        />);

        return (<div>
            <h1>Trine v.{this.props.version} Documentation</h1>
            { this.renderTableOfContents() }
            { categories }
        </div>);
    }

    render () {
        const content = this.state.codeEditorOpen ?
            this.renderCodeEditor() :
            this.renderDocumentation();
        return (<div className="content" role="main">
            { content }
        </div>)
    }
};
