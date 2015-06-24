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

    renderNav () {
        const categories = this.props.categories.map((category) => {
            const modules = category.modules.map((module) => {
                const exports = module.exports.map((exp) => {
                    return (<li key={exp.name} className="nav__exports__item">
                        <a href={"#" + "categories-" + category.name + "-modules-" + module.module + "-exports-" + exp.name}>
                            <code>{ exp.name + "()" }</code>
                        </a>
                    </li>)
                });

                return (<li key={module.module} className="nav__modules__item">
                    <a href={"#categories-" + category.name + "-modules-" + module.module}>{module.module}</a>
                    <ul className="nav__exports">{exports}</ul>
                </li>);
            });

            return (<li key={category.name} className="nav__category__item">
                <a href={"#categories-" + category.name}>{category.name}</a>
                <ul className="nav__modules">{modules}</ul>
            </li>);
        });

        return (<nav className="nav"><section id="table-of-contents">
            <ul className="nav__category">{categories}</ul>
        </section></nav>);
    }

    renderDocumentation () {
        const categories = this.props.categories.map((category) => <Category
            key={category.name}
            onCodeEditorOpened={::this.handleCodeEditorOpened}
            category={category}
        />);

        return (<div>
            <h1>Trine v.{this.props.version} Documentation</h1>
            { categories }
        </div>);
    }

    renderHeader () {
        return (<header className="header">
            <img src="../../images/trine-logo-dark-no-text@x2.png" className="header__train-logo" />
            <span className="header__tag-line">
                <strong>trine</strong> { " " } { "Documentation" }
            </span>
            <a className="header__aside" href="https://github.com/jussi-kalliokoski/trine">Github</a>
        </header>);
    }

    render () {
        const content = this.state.codeEditorOpen ?
            this.renderCodeEditor() :
            this.renderDocumentation();

        return (<div>
            { this.renderHeader() }
            { this.renderNav() }
            <div className="content" role="main">
                { content }
            </div>
        </div>)
    }
};
