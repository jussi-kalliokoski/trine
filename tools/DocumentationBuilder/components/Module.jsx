"use strict";

import React from "react";
import { FunctionExport } from "./FunctionExport";

export class Module extends React.Component {
    renderExports () {
        return this.props.module.exports.map((exp) => {
            if ( exp.type === "Function" ) {
                return (<FunctionExport
                    key={exp.name}
                    function={exp}
                    categoryName={this.props.categoryName}
                    moduleName={this.props.module.module}
                    importTarget={this.props.module.importTarget}
                />);
            }
        });
    }

    render () {
        const id = "categories-" + this.props.categoryName + "-modules-" + this.props.module.module;

        return (<section id={id}>
            <h3>
                { this.props.module.module }
                <a className="anchor" href={"#" + id}>{"#"}</a>
            </h3>
            { this.renderExports() }
        </section>)
    }
};
