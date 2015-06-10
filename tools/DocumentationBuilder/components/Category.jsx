"use strict";

import React from "react";
import { Module } from "./Module";

export class Category extends React.Component {
    renderModules () {
        return this.props.category.modules.map((module) => {
            return (<Module key={module.module} module={module} categoryName={this.props.category.name} />);
        });
    }

    render () {
        const id = "categories-" + this.props.category.name;

        return (<section id={id}>
            <h2>
                { this.props.category.name }
                <a className="anchor" href={"#" + id}>{"#"}</a>
            </h2>
            { this.renderModules() }
        </section>)
    }
};
