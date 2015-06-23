"use strict";

import React from "react";
import { Module } from "./Module";

export class Category extends React.Component {
    renderModules () {
        return this.props.category.modules.map((module) => {
            return (<Module
                onCodeEditorOpened={this.props.onCodeEditorOpened}
                key={module.module}
                module={module}
                categoryName={this.props.category.name}
            />);
        });
    }

    render () {
        const id = "categories-" + this.props.category.name;

        return (<section id={id} className="category-section">
            <h2 className="category-section__header">
                { this.props.category.name }
                { " " }
                <a className="anchor" href={"#" + id}>{"#"}</a>
            </h2>
            { this.renderModules() }
        </section>)
    }
};
